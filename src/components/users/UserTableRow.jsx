import { Eye, MoreVertical, PencilLine, Trash2 } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";

export function UserTableRow({ user, onDelete }) {
  const userId = user._id || user.id;
  const detailHref = userId ? `/users/${encodeURIComponent(userId)}` : "#";

  const handleEditClick = (event) => {
    event.preventDefault();
    if (!userId) return;
    window.history.pushState({}, "", detailHref);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <tr className="group border-b border-[var(--border)] transition-colors hover:bg-slate-50/80">
      <td className="px-6 py-5 align-middle text-sm text-slate-500">
        <span className="font-mono-ui">{userId || "—"}</span>
      </td>
      <td className="px-6 py-5 align-middle">
        <div className="flex items-center gap-3">
          <Avatar
            name={user.name}
            initials={user.initials}
            accent={user.accent}
            size="sm"
          />
          <div>
            <p className="text-sm font-medium text-slate-900">{user.name}</p>
            <p className="text-sm text-slate-500">{user.role}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-5 align-middle text-sm text-slate-700">
        {user.email}
      </td>
      <td className="px-6 py-5 align-middle text-sm text-slate-700">
        {user.age}
      </td>
      <td className="px-6 py-5 align-middle text-sm text-slate-700">
        {user.createdAt}
      </td>
      <td className="px-6 py-5 align-middle">
        <div className="flex items-center justify-end gap-2">
          <a
            aria-label={`Edit ${user.name}`}
            className="rounded-lg p-2 text-slate-500 opacity-100 transition-colors hover:bg-slate-100 hover:text-[var(--primary)] focus-ring lg:opacity-0 lg:group-hover:opacity-100"
            href={detailHref}
            onClick={handleEditClick}
            title={`Open ${user.name} details`}
          >
            <PencilLine size={18} />
          </a>
          <button
            className="rounded-lg p-2 text-slate-500 opacity-100 transition-colors hover:bg-rose-50 hover:text-rose-600 focus-ring lg:opacity-0 lg:group-hover:opacity-100"
            onClick={() => onDelete?.(user)}
            type="button"
          >
            <Trash2 size={18} />
          </button>
          <button
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 focus-ring"
            type="button"
          >
            <MoreVertical size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}
