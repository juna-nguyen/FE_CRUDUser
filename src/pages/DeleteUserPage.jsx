import { DashboardShell } from '@/components/layout/DashboardShell'
import { DeleteUserModal } from '@/components/users/DeleteUserModal'
import { UserDetailCard } from '@/components/users/UserDetailCard'
import { SystemDataCard } from '@/components/users/SystemDataCard'
import { userDetail } from '@/data/users'

export function DeleteUserPage() {
  return (
    <DashboardShell title="User Management" showSearch={true}>
      <div className="relative flex-1 overflow-hidden px-8 py-8 lg:px-10">
        <div className="pointer-events-none select-none opacity-35 blur-[2px]">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-[42px] font-bold tracking-tight text-slate-950">User Details</h1>
              <p className="mt-3 text-lg text-slate-600">Manage your application users and their roles.</p>
            </div>
          </div>
          <div className="grid gap-6 xl:grid-cols-12">
            <div className="xl:col-span-8">
              <UserDetailCard user={userDetail} />
            </div>
            <div className="xl:col-span-4">
              <SystemDataCard user={userDetail} />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/25 px-4 backdrop-blur-sm">
          <DeleteUserModal />
        </div>
      </div>
    </DashboardShell>
  )
}
