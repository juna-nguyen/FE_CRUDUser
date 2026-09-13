import { Bell, CircleHelp, Search } from 'lucide-react'
import { Avatar } from '@/components/ui/Avatar'

export function TopBar({ title, showSearch = true, backLabel, backHref = '/' }) {
  const handleBackClick = (event) => {
    event.preventDefault()
    window.history.pushState({}, '', backHref)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-[var(--border)] bg-white/90 px-8 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        {backLabel ? (
          <a
            className="flex items-center gap-3 text-slate-600 transition-colors hover:text-slate-900"
            href={backHref}
            onClick={handleBackClick}
          >
            <span className="text-3xl leading-none">←</span>
            <span className="text-[16px] font-medium">{backLabel}</span>
          </a>
        ) : (
          <h2 className="text-[34px] font-semibold tracking-tight text-slate-950 max-sm:text-2xl">{title}</h2>
        )}
      </div>

      <div className="flex items-center gap-4">
        {showSearch ? (
          <label className="relative hidden min-w-[320px] items-center md:flex max-sm:hidden">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input
              className="h-12 w-full rounded-full border border-[var(--border)] bg-[#f8faff] pl-12 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus-ring"
              placeholder="Search..."
              type="text"
            />
          </label>
        ) : null}

        <button className="rounded-full p-2.5 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-ring" type="button">
          <Bell size={22} />
        </button>
        <button className="rounded-full p-2.5 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-ring" type="button">
          <CircleHelp size={22} />
        </button>
        <Avatar name="Current User" initials="AU" size="sm" />
      </div>
    </header>
  )
}
