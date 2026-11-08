export default function StackChips({
  items,
  label = 'Stack',
}: {
  items: string[]
  label?: string
}) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 font-mono text-xs text-gray-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-gray-300"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
