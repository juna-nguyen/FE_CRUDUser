import { Badge } from '@/components/ui/Badge'
import { Avatar } from '@/components/ui/Avatar'

export function UserDetailCard({ user }) {
  return (
    <section className="rounded-[var(--radius-lg)] border border-[#d9e1ef] bg-white p-8 shadow-[0_10px_30px_-22px_rgba(17,24,39,0.3)]">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <div className="relative shrink-0">
          <Avatar name={user.name} initials={user.initials} accent={user.accent} size="xl" />
          <span className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-white bg-emerald-400" />
        </div>

        <div className="flex-1">
          <h3 className="text-[30px] font-bold tracking-tight text-slate-900">{user.name}</h3>
          <p className="mt-2 flex items-center gap-2 text-base text-slate-600">
            <span>✉</span>
            {user.email}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Role</p>
              <Badge tone="softPrimary">{user.role}</Badge>
            </div>
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Department</p>
              <p className="text-base text-slate-900">{user.department}</p>
            </div>
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Age</p>
              <p className="text-base text-slate-900">{user.age}</p>
            </div>
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Location</p>
              <p className="text-base text-slate-900">{user.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
