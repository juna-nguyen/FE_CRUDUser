export function Button({ children, variant = 'primary', className = '', ...props }) {
  const styles = {
    primary:
      'bg-[var(--primary)] text-white hover:bg-[var(--primary-strong)] shadow-[0_10px_20px_-14px_rgba(47,43,228,0.55)]',
    secondary: 'bg-white text-slate-700 border border-[var(--border)] hover:bg-slate-50',
    ghost: 'bg-transparent text-[var(--primary)] hover:bg-indigo-50',
    danger: 'bg-[#c81e1e] text-white hover:bg-[#a71818]',
  }

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors focus-ring ${styles[variant]} ${className}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}
