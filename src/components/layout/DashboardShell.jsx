import { Sidebar } from '@/components/layout/Sidebar'
import { TopBar } from '@/components/layout/TopBar'

export function DashboardShell({ children, title, showSearch = true, backLabel }) {
  return (
    <div className="flex min-h-screen overflow-hidden text-[var(--text)]">
      <Sidebar />
      <main className="flex min-h-screen flex-1 flex-col overflow-hidden">
        <TopBar title={title} showSearch={showSearch} backLabel={backLabel} />
        {children}
      </main>
    </div>
  )
}
