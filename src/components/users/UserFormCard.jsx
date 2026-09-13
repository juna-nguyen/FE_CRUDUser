import { CircleAlert, Cake, Mail, UserRound } from "lucide-react";
import { useState } from "react";
import { createUser, updateUser } from "@/services/api/apiUser";
import { Button } from "@/components/ui/Button";

function Field({
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  widthClass = "w-full",
}) {
  return (
    <div className="space-y-2">
      <label
        className={`text-sm font-semibold ${error ? "text-rose-600" : "text-slate-700"}`}
      >
        {label} <span className="text-rose-600">*</span>
      </label>
      <div className={`relative ${widthClass}`}>
        {Icon ? (
          <Icon
            className={`absolute left-3 top-1/2 -translate-y-1/2 ${error ? "text-rose-500" : "text-slate-500"}`}
            size={18}
          />
        ) : null}
        <input
          className={`h-11 w-full rounded-xl border bg-white px-4 text-sm text-slate-800 placeholder:text-slate-400 focus-ring ${
            Icon ? "pl-10" : ""
          } ${error ? "border-rose-500 bg-rose-50/40" : "border-[var(--border)]"}`}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
        {error ? (
          <CircleAlert
            className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-500"
            size={18}
          />
        ) : null}
      </div>
      {error ? <p className="text-xs text-rose-600">{error}</p> : null}
    </div>
  );
}

export function UserFormCard({ onClose, onCreated, user }) {
  const isEdit = Boolean(user?._id);
  const [form, setForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    age: String(user?.age || "18"),
  });
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const update = (field) => (event) =>
    setForm((current) => ({ ...current, [field]: event.target.value }));
  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.age) {
      setError("Name, email and age are required.");
      return;
    }
    setSaving(true);
    setError("");
    try {
      const payload = {
        ...form,
        name: form.name.trim(),
        age: Number(form.age),
        role: user?.role || "Viewer",
        department: user?.department,
        location: user?.location,
        status: user?.status || "Active",
      };
      const saved = isEdit
        ? await updateUser(user._id, payload)
        : await createUser(payload);
      onCreated?.(saved);
      onClose?.();
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSaving(false);
    }
  };
  return (
    <div className="mx-auto w-full max-w-[560px] rounded-[var(--radius-lg)] border border-[var(--border)] bg-white shadow-[0_24px_50px_-20px_rgba(17,24,39,0.35)]">
      <div className="flex items-start justify-between border-b border-[var(--border)] px-8 py-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            {isEdit ? "Edit User" : "Create New User"}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {isEdit
              ? "Update this member in the system."
              : "Add a new member to the system."}
          </p>
        </div>
        <button
          className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 focus-ring"
          onClick={onClose}
          type="button"
        >
          <span className="text-xl leading-none">×</span>
        </button>
      </div>

      <div className="max-h-[70vh] overflow-y-auto px-8 py-8">
        <div className="space-y-6">
          <Field
            label="Full Name"
            icon={UserRound}
            value={form.name}
            onChange={update("name")}
            placeholder="e.g., Alex Johnson"
          />
          <Field
            label="Email Address"
            icon={Mail}
            value={form.email}
            onChange={update("email")}
            placeholder="name@example.com"
          />
          <Field
            label="Age"
            icon={Cake}
            value={form.age}
            onChange={update("age")}
            placeholder="18"
            type="number"
            widthClass="w-32"
          />
          {error ? <p className="text-sm text-rose-600">{error}</p> : null}
          <div className="rounded-2xl border border-dashed border-[var(--border)] bg-slate-50 p-4">
            <div className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-4">
              <div className="rounded-full bg-indigo-50 p-2 text-[var(--primary)]">
                <CircleAlert size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Default Permissions
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  New users are assigned the "Viewer" role by default. You can
                  change this later in their profile settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 border-t border-[var(--border)] bg-slate-50 px-8 py-5">
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={saving} onClick={handleSubmit}>
          <span>
            {saving ? "Saving..." : isEdit ? "Update User" : "Save User"}
          </span>
        </Button>
      </div>
    </div>
  );
}
