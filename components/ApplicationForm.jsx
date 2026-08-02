import Link from "next/link";

export default function ApplicationForm({ action, application, submitLabel }) {
  const appliedDateValue = application?.appliedDate?.toISOString().slice(0, 10);

  return (
    <form action={action} className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-6 shadow-sm">
      {application && <input type="hidden" name="id" value={application.id} />}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="title" className="text-sm font-medium text-text">
          Job Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          defaultValue={application?.title}
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
          defaultValue={application?.company}
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
          defaultValue={application?.status ?? "Applied"}
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
          defaultValue={appliedDateValue}
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
          defaultValue={application?.link}
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
          defaultValue={application?.notes}
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
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
