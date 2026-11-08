export default function StackChips({
  items,
  label = 'Stack',
  size = 'sm',
}: {
  items: string[]
  label?: string
  size?: 'sm' | 'md'
}) {
  const sizing = size === 'md' ? 'px-2.5 py-1 text-sm' : 'px-2 py-0.5 text-xs'
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-md border border-gray-200 bg-gray-50 font-mono text-gray-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-gray-300 ${sizing}`}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
