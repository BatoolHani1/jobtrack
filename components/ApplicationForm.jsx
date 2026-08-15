"use client";

import Link from "next/link";
import { useActionState } from "react";

export default function ApplicationForm({ action, application, submitLabel }) {
  const appliedDateValue = application?.appliedDate?.toISOString().slice(0, 10);
  const [state, formAction, isPending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-6 shadow-sm">
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
          defaultValue={state?.values?.title ?? application?.title}
          placeholder="e.g. Frontend Engineer"
          aria-describedby="title-error"
          className="rounded-lg border border-border px-3 py-2 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <div id="title-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.title?.map((error) => (
            <p key={error} className="text-sm text-danger">
              {error}
            </p>
          ))}
        </div>
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
          defaultValue={state?.values?.company ?? application?.company}
          placeholder="e.g. Acme Inc."
          aria-describedby="company-error"
          className="rounded-lg border border-border px-3 py-2 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <div id="company-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.company?.map((error) => (
            <p key={error} className="text-sm text-danger">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="status" className="text-sm font-medium text-text">
          Status
        </label>
        <select
          id="status"
          name="status"
          defaultValue={state?.values?.status ?? application?.status ?? "Applied"}
          aria-describedby="status-error"
          className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <div id="status-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.status?.map((error) => (
            <p key={error} className="text-sm text-danger">
              {error}
            </p>
          ))}
        </div>
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
          defaultValue={state?.values?.appliedDate ?? appliedDateValue}
          aria-describedby="appliedDate-error"
          className="rounded-lg border border-border px-3 py-2 text-sm text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <div id="appliedDate-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.appliedDate?.map((error) => (
            <p key={error} className="text-sm text-danger">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="link" className="text-sm font-medium text-text">
          Job Link
        </label>
        <input
          id="link"
          name="link"
          type="url"
          defaultValue={state?.values?.link ?? application?.link}
          placeholder="https://..."
          aria-describedby="link-error"
          className="rounded-lg border border-border px-3 py-2 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <div id="link-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.link?.map((error) => (
            <p key={error} className="text-sm text-danger">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="notes" className="text-sm font-medium text-text">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          defaultValue={state?.values?.notes ?? application?.notes}
          placeholder="Anything worth remembering about this application..."
          aria-describedby="notes-error"
          className="resize-none rounded-lg border border-border px-3 py-2 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <div id="notes-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.notes?.map((error) => (
            <p key={error} className="text-sm text-danger">
              {error}
            </p>
          ))}
        </div>
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
          aria-disabled={isPending}
          className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primaryDark"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
