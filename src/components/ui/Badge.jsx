export function Badge({ children, tone = 'neutral' }) {
  const styles = {
    neutral: 'bg-slate-100 text-slate-700 border-slate-200',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border-amber-200',
    danger: 'bg-rose-50 text-rose-700 border-rose-200',
    info: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    softPrimary: 'bg-[#dce2ff] text-[#3341a4] border-[#c7d2fe]',
  }

  return (
    <span className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold ${styles[tone]}`}>
      {children}
    </span>
  )
}
