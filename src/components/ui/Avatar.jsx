export function Avatar({ name, initials, accent = 'from-slate-700 to-slate-500', size = 'md' }) {
  const sizeClass = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-11 w-11 text-sm',
    lg: 'h-20 w-20 text-2xl',
    xl: 'h-32 w-32 text-4xl',
  }[size]

  return (
    <div
      aria-label={name}
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${accent} font-semibold text-white shadow-sm ring-1 ring-white/70 ${sizeClass}`}
    >
      {initials}
    </div>
  )
}
