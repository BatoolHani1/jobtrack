import Link from "next/link";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Application | JobTrack",
};

async function createApplication(formData) {
  "use server";

  const title = formData.get("title");
  const company = formData.get("company");
  const status = formData.get("status");
  const appliedDate = formData.get("appliedDate");
  const notes = formData.get("notes");
  const link = formData.get("link");

  // stand-in for auth until Week 4
  const user = await prisma.user.findFirst();

  await prisma.application.create({
    data: {
      title,
      company,
      status,
      appliedDate: new Date(appliedDate),
      notes: notes === "" ? null : notes,
      link: link === "" ? null : link,
      userId: user.id,
    },
  });

  revalidatePath("/applications");
  redirect("/applications");
}

export default function NewApplicationPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-text">
          Add Application
        </h1>
        <p className="mt-1 text-sm text-muted">
          Log the details of a job you&apos;ve applied to.
        </p>
      </div>

      <form action={createApplication} className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-6 shadow-sm">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="title" className="text-sm font-medium text-text">
            Job Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            placeholder="e.g. Frontend Engineer"
            className="rounded-lg border border-border px-3 py-2 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-medium text-text">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="e.g. Acme Inc."
            className="rounded-lg border border-border px-3 py-2 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="status" className="text-sm font-medium text-text">
            Status
          </label>
          <select
            id="status"
            name="status"
            defaultValue="Applied"
            className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="appliedDate" className="text-sm font-medium text-text">
            Applied Date
          </label>
          <input
            id="appliedDate"
            name="appliedDate"
            type="date"
            required
            className="rounded-lg border border-border px-3 py-2 text-sm text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="link" className="text-sm font-medium text-text">
            Job Link
          </label>
          <input
            id="link"
            name="link"
            type="url"
            placeholder="https://..."
            className="rounded-lg border border-border px-3 py-2 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="notes" className="text-sm font-medium text-text">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Anything worth remembering about this application..."
            className="resize-none rounded-lg border border-border px-3 py-2 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <Link
            href="/applications"
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted hover:bg-lavenderSoft"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primaryDark"
          >
            Save Application
          </button>
        </div>
      </form>
    </div>
  );
}
