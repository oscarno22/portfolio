import { ImageResponse } from 'next/og'
import { profile } from '@/content'

export const alt = `${profile.name} — ${profile.headline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        background: 'linear-gradient(135deg, #0f172a 0%, #0c4a6e 100%)',
        color: 'white',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', fontSize: 26, color: '#7dd3fc', letterSpacing: 4 }}>
        {profile.eyebrow.toUpperCase()}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>
          {profile.name}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 38,
            color: '#e2e8f0',
            lineHeight: 1.25,
            maxWidth: 1000,
          }}
        >
          {profile.headline}
        </div>
      </div>
      <div style={{ display: 'flex', fontSize: 24, color: '#94a3b8' }}>
        {profile.github.replace('https://', '')}
      </div>
    </div>,
    size
  )
}
