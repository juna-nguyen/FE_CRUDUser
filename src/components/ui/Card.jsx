export function Card({ children, className = '' }) {
  return (
    <section className={`glass-border soft-shadow rounded-[var(--radius-lg)] bg-white ${className}`}>
      {children}
    </section>
  )
}
