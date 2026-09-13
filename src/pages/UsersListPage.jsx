import { useState } from "react";
import { Plus } from "lucide-react";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { UserTable } from "@/components/users/UserTable";
import { UserFormCard } from "@/components/users/UserFormCard";
import { DeleteUserModal } from "@/components/users/DeleteUserModal";

export function UsersListPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDeleteUser = (user) => {
    setSelectedUser(user);
    setIsDeleteOpen(true);
  };

  return (
    <DashboardShell title="User Management">
      <div className="flex-1 overflow-y-auto px-8 py-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-[32px] font-bold tracking-tight text-slate-950 max-sm:text-3xl">
              User Management
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-slate-600">
              Manage your application users and their roles.
            </p>
          </div>
          <Button
            className="px-5 py-3 text-base"
            onClick={() => setIsFormOpen(true)}
          >
            <Plus size={18} />
            Add User
          </Button>
        </div>

        <Card>
          <UserTable onDeleteUser={handleDeleteUser} />
        </Card>

        {isFormOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/30 px-4 py-8 backdrop-blur-sm">
            <UserFormCard onClose={() => setIsFormOpen(false)} />
          </div>
        ) : null}

        {isDeleteOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/30 px-4 py-8 backdrop-blur-sm">
            <DeleteUserModal
              userName={selectedUser?.name}
              userId={selectedUser?._id}
              onClose={() => {
                setIsDeleteOpen(false);
                setSelectedUser(null);
              }}
            />
          </div>
        ) : null}
      </div>
    </DashboardShell>
  );
}
