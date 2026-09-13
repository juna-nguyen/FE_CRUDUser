import { Badge } from '@/components/ui/Badge'

export function SystemDataCard({ user }) {
  return (
    <section className="rounded-[var(--radius-lg)] border border-[#d9e1ef] bg-white p-6 shadow-[0_10px_30px_-22px_rgba(17,24,39,0.3)]">
      <h4 className="border-b border-slate-200 pb-4 text-[24px] font-semibold text-slate-900">System Data</h4>

      <div className="mt-6 space-y-6">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">User ID</p>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-mono-ui text-sm text-slate-700">
            {user.systemId}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Created At</p>
          <p className="text-base text-slate-900">{user.createdAtDetail}</p>
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Last Updated</p>
          <p className="text-base text-slate-900">{user.updatedAt}</p>
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Account Status</p>
          <Badge tone="success">Active</Badge>
        </div>
      </div>
    </section>
  )
}
