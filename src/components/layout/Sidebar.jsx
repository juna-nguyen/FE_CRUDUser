import { BarChart3, FolderOpen, Settings, Users } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";

const navItems = [
  { label: "Users", icon: Users, active: true },
  // { label: "Analytics", icon: BarChart3 },
  // { label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="flex w-[320px] flex-col border-r border-[var(--border)] bg-white/90 px-8 py-8 backdrop-blur-sm max-lg:w-[280px] max-sm:hidden">
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-[0_12px_24px_-16px_rgba(47,43,228,0.75)]">
            <FolderOpen size={24} />
          </div>
          <div>
            <h1 className="text-[28px] font-extrabold tracking-tight text-[var(--primary)]">
              AdminConsole
            </h1>
            <p className="mt-0.5 text-sm font-medium text-slate-600">
              Management Suite
            </p>
          </div>
        </div>
      </div>

      <nav className="space-y-3">
        {navItems.map(({ label, icon: Icon, active }) => (
          <a
            key={label}
            className={`flex items-center gap-3 rounded-2xl px-4 py-4 text-base font-medium transition-colors ${
              active
                ? "bg-[#d8e5ff] text-slate-700"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            }`}
            href="#"
          >
            <Icon size={22} strokeWidth={2.1} />
            {label}
          </a>
        ))}
      </nav>

      {/* <div className="mt-auto border-t border-[var(--border)] pt-6">
        <div className="flex items-center gap-3">
          <Avatar name="Admin User" initials="AU" size="sm" />
          <div>
            <p className="text-sm font-semibold text-slate-900">Admin User</p>
            <p className="text-sm text-slate-600">admin@system.com</p>
          </div>
        </div>
      </div> */}
    </aside>
  );
}
