import { DashboardShell } from '@/components/layout/DashboardShell'
import { UserFormCard } from '@/components/users/UserFormCard'

export function UserFormPage() {
  return (
    <DashboardShell title="User Management" showSearch={true}>
      <div className="flex-1 overflow-y-auto px-8 py-8 lg:px-10">
        <div className="rounded-[28px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0.18))] p-6 shadow-[0_20px_45px_-34px_rgba(17,24,39,0.35)]">
          <UserFormCard />
        </div>
      </div>
    </DashboardShell>
  )
}
