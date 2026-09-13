import { useEffect, useState } from "react";
import { users as fallbackUsers } from "@/data/users";
import { getUsers } from "@/services/api/apiUser";
import { UserTableRow } from "@/components/users/UserTableRow";

export function UserTable({ onDeleteUser }) {
  const [users, setUsers] = useState(fallbackUsers);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getUsers()
      .then((result) => setUsers(result.items || result))
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[#c7d0e2] bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[#c7d0e2] bg-slate-50 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Age</th>
              <th className="px-6 py-4">Created At</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="px-6 py-8 text-center" colSpan="6">
                  Loading users...
                </td>
              </tr>
            ) : null}
            {error ? (
              <tr>
                <td className="px-6 py-3 text-center text-rose-600" colSpan="6">
                  {error} (showing local data)
                </td>
              </tr>
            ) : null}
            {users.map((user, index) => (
              <UserTableRow
                key={user._id || user.id || `user-${index}`}
                user={user}
                onDelete={onDeleteUser}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="flex flex-col gap-3 border-t border-[#c7d0e2] px-6 py-4 text-sm font-medium text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>Showing 1 to 5 of 5 entries</p>
        <div className="flex items-center gap-2">
          <button
            className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-slate-400"
            type="button"
          >
            Prev
          </button>
          <button
            className="rounded-lg bg-[var(--primary)] px-3 py-1.5 font-semibold text-white"
            type="button"
          >
            1
          </button>
          <button
            className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-slate-400"
            type="button"
          >
            Next
          </button>
        </div>
      </div> */}
    </div>
  );
}
