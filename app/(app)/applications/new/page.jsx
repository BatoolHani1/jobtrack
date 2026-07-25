import Link from "next/link";

export const metadata = {
  title: "Add Application | JobTrack",
};

export default function NewApplicationPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-text">
          Add Application
        </h1>
        <p className="mt-1 text-sm text-muted">
          Log the details of a job you&apos;ve applied to. Saving isn&apos;t
          wired up yet.
        </p>
      </div>

      <form className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-6 shadow-sm">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="jobTitle" className="text-sm font-medium text-text">
            Job Title
          </label>
          <input
            id="jobTitle"
            name="jobTitle"
            type="text"
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
            className="rounded-lg border border-border px-3 py-2 text-sm text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="jobLink" className="text-sm font-medium text-text">
            Job Link
          </label>
          <input
            id="jobLink"
            name="jobLink"
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
            type="button"
            disabled
            className="cursor-not-allowed rounded-lg bg-primary/40 px-4 py-2.5 text-sm font-medium text-white"
          >
            Save Application
          </button>
        </div>
      </form>
    </div>
  );
}
