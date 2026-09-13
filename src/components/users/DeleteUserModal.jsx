import { AlertTriangle, Info, Trash2, X } from 'lucide-react'
import { useState } from 'react'
import { deleteUser } from '@/services/api/apiUser'
import { Button } from '@/components/ui/Button'

export function DeleteUserModal({ onClose, userId, userName = 'Sarah Jenkins' }) {
  const [error, setError] = useState('')
  const [deleting, setDeleting] = useState(false)
  const handleDelete = async () => {
    if (!userId) { setError('User id is missing.'); return }
    setDeleting(true)
    try { await deleteUser(userId); onClose?.() } catch (requestError) { setError(requestError.message) } finally { setDeleting(false) }
  }
  return (
    <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-white shadow-[0_24px_50px_-20px_rgba(17,24,39,0.35)]">
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-100 text-rose-600">
            <AlertTriangle size={20} />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Delete User</h2>
        </div>
        <button
          className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 focus-ring"
          onClick={onClose}
          type="button"
        >
          <X size={20} />
        </button>
      </div>

      <div className="px-6 py-6">
        <p className="text-base leading-7 text-slate-700">
          Are you sure you want to delete <strong className="font-semibold text-slate-950">{userName}</strong>? This
          action cannot be undone and will permanently remove all associated data, settings, and history from the system.
        </p>

        <div className="mt-6 rounded-2xl border border-[#cfd7e6] bg-slate-50 p-4">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 text-slate-500" size={20} />
            <div>
              <p className="text-sm font-semibold text-slate-900">Consequences of deletion:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>User will immediately lose access.</li>
                <li>Analytics history will be anonymized.</li>
                <li>Active sessions will be terminated.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {error ? <p className="px-6 pb-3 text-sm text-rose-600">{error}</p> : null}

      <div className="flex justify-end gap-3 border-t border-slate-200 bg-slate-50 px-6 py-5">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" disabled={deleting} onClick={handleDelete}>
          <Trash2 size={18} />
          {deleting ? 'Deleting...' : 'Delete'}
        </Button>
      </div>
    </div>
  )
}
