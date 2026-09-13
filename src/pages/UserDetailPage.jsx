import { useState } from "react";
import { PencilLine, Trash2 } from "lucide-react";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { Button } from "@/components/ui/Button";
import { userDetail as fallbackUserDetail } from "@/data/users";
import { SystemDataCard } from "@/components/users/SystemDataCard";
import { UserDetailCard } from "@/components/users/UserDetailCard";
import { UserFormCard } from "@/components/users/UserFormCard";
import { DeleteUserModal } from "@/components/users/DeleteUserModal";

export function UserDetailPage({
  user = fallbackUserDetail,
  isEditRoute = false,
}) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(isEditRoute);

  return (
    <DashboardShell
      title="User Details"
      showSearch={false}
      backLabel="Back to Users"
      backHref="/"
    >
      <div className="relative flex-1 overflow-y-auto px-8 py-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="text-[42px] font-bold tracking-tight text-slate-950 max-sm:text-3xl">
            User Details
          </h1>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" onClick={() => setIsEditOpen(true)}>
              <PencilLine size={18} />
              Edit User
            </Button>
            <Button variant="danger" onClick={() => setIsDeleteOpen(true)}>
              <Trash2 size={18} />
              Delete User
            </Button>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-12">
          <div className="xl:col-span-8">
            <UserDetailCard user={user} />
          </div>
          <div className="xl:col-span-4">
            <SystemDataCard user={user} />
          </div>
        </div>

        {isEditOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/30 px-4 py-8 backdrop-blur-sm">
            <UserFormCard user={user} onClose={() => setIsEditOpen(false)} />
          </div>
        ) : null}

        {isDeleteOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/30 px-4 py-8 backdrop-blur-sm">
            <DeleteUserModal
              userId={user._id}
              userName={user.name}
              onClose={() => setIsDeleteOpen(false)}
            />
          </div>
        ) : null}
      </div>
    </DashboardShell>
  );
}
