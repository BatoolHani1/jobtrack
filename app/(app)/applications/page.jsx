import Link from "next/link";

export const metadata = {
  title: "Applications | JobTrack",
};

export default function ApplicationsPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-text">
            Applications
          </h1>
          <p className="mt-1 text-sm text-muted">
            Keep track of every job you&apos;ve applied to, all in one place.
          </p>
        </div>
        <Link
          href="/applications/new"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primaryDark"
        >
          + Add Application
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface px-6 py-16 text-center">
        <h2 className="text-base font-medium text-text">
          No applications yet
        </h2>
        <p className="mt-2 max-w-sm text-sm text-muted">
          No applications yet — start tracking your job applications by adding
          your first application.
        </p>
        <Link
          href="/applications/new"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primaryDark"
        >
          + Add Application
        </Link>
      </div>
    </div>
  );
}
