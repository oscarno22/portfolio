import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

/**
 * Serves the current resume as a PDF.
 *
 * The source of truth is a Google Doc. When RESUME_DOC_ID is set and the Doc is
 * shared as "Anyone with the link: Viewer", this fetches the Doc's PDF export
 * (cached for an hour) so the site always serves the latest version without a
 * redeploy. If the export is unavailable for any reason, it falls back to the
 * last PDF committed under public/docs.
 */
const FALLBACK_PATH = '/docs/resume-oscarnolen-2026-11.pdf'
const FILENAME = 'oscar-nolen-resume.pdf'
const REVALIDATE_SECONDS = 60 * 60

export async function GET(request: Request) {
  const docId = process.env.RESUME_DOC_ID

  if (docId) {
    try {
      const exportUrl = `https://docs.google.com/document/d/${encodeURIComponent(docId)}/export?format=pdf`
      const upstream = await fetch(exportUrl, {
        next: { revalidate: REVALIDATE_SECONDS },
        redirect: 'follow',
      })
      const contentType = upstream.headers.get('content-type') ?? ''

      // A private Doc redirects to a sign-in page with an HTML body; only
      // trust a real PDF response.
      if (upstream.ok && contentType.includes('application/pdf')) {
        const body = await upstream.arrayBuffer()
        return new NextResponse(body, {
          status: 200,
          headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `inline; filename="${FILENAME}"`,
            'Content-Length': String(body.byteLength),
            'Cache-Control': `public, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate=86400`,
            'X-Resume-Source': 'google-doc',
          },
        })
      }
      console.warn(
        `resume.pdf: export returned ${upstream.status} ${contentType || '(no content-type)'}; using fallback`
      )
    } catch (error) {
      console.warn('resume.pdf: export fetch failed; using fallback', error)
    }
  }

  const fallback = new URL(FALLBACK_PATH, request.url)
  return NextResponse.redirect(fallback, {
    status: 307,
    headers: { 'Cache-Control': 'public, max-age=300', 'X-Resume-Source': 'fallback' },
  })
}
