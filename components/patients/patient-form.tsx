"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  PATIENT_SCHEMA,
  type PatientFormType,
} from "@/app/(portal)/patients/schema/patient.schema";

const inputClass = "h-10 w-full rounded-md border bg-white px-3 text-sm";
const errorClass = "mt-1 text-xs text-red-600";

export function PatientForm({ defaultValues }: { defaultValues?: Partial<PatientFormType> }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PatientFormType>({
    resolver: zodResolver(PATIENT_SCHEMA),
    defaultValues: { status: "pending", ...defaultValues },
  });

  const onSubmit = async (data: PatientFormType) => {
    // TODO(FE-10 submit): call the tRPC mutation `patient.create` (useMutation), then
    //   show success/error feedback and redirect to /patients. Disable the button while submitting.
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-lg border bg-white p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">Full name</label>
          <input {...register("fullName")} className={inputClass} />
          <p className={errorClass}>{errors.fullName?.message}</p>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input {...register("email")} className={inputClass} />
          <p className={errorClass}>{errors.email?.message}</p>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Phone</label>
          <input {...register("phone")} className={inputClass} />
          <p className={errorClass}>{errors.phone?.message}</p>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Date of birth</label>
          <input type="date" {...register("dateOfBirth")} className={inputClass} />
          <p className={errorClass}>{errors.dateOfBirth?.message}</p>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Status</label>
          <select {...register("status")} className={inputClass}>
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Notes</label>
        <textarea {...register("notes")} rows={3} className="w-full rounded-md border bg-white p-3 text-sm" />
      </div>

      {/* ---------- Medications (form array) ---------- */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-medium">Medications</h2>
          <button type="button" className="rounded-md border px-3 py-1.5 text-sm hover:bg-slate-50">
            + Add medication
          </button>
        </div>
        {/* TODO(FE-9 form array): use `useFieldArray({ control, name: "medications" })`.
            Render one row per field (map over `fields`, use field.id as the key),
            wire "Add" to `append`, "Remove" to `remove(index)`, show per-row errors,
            and show "No medications added" when the list is empty.
            The static row below is only a visual placeholder - replace it. */}
        <div className="grid items-start gap-3 rounded-md border bg-slate-50 p-3 sm:grid-cols-[1fr_1fr_1fr_auto]">
          <input placeholder="Name" className={inputClass} />
          <input placeholder="Dosage (e.g. 500mg)" className={inputClass} />
          <select className={inputClass} defaultValue="daily">
            <option value="daily">Daily</option>
            <option value="twice-daily">Twice daily</option>
            <option value="weekly">Weekly</option>
            <option value="as-needed">As needed</option>
          </select>
          <button type="button" className="h-10 rounded-md px-3 text-sm text-red-600 hover:bg-red-50">Remove</button>
        </div>
      </section>

      <div className="flex justify-end gap-3">
        <button type="button" className="rounded-md border px-4 py-2 text-sm">Cancel</button>
        <button
          disabled={isSubmitting}
          className="rounded-md bg-teal-700 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          Save patient
        </button>
      </div>
    </form>
  );
}
