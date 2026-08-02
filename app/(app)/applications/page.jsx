import Link from "next/link";
import { getApplications } from "@/lib/applications";
import StatusBadge from "@/components/StatusBadge";

export const metadata = {
  title: "Applications | JobTrack",
};

export default async function ApplicationsPage() {
  const applications = await getApplications();

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

      {applications.length === 0 ? (
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
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {applications.map((application) => {
            const interviewCount = application._count.interviews;
            const interviewLabel =
              interviewCount === 0
                ? "No interviews"
                : `${interviewCount} interview${interviewCount === 1 ? "" : "s"}`;

            return (
              <div
                key={application.id}
                className="flex flex-col overflow-hidden rounded-xl border border-border shadow-sm"
              >
                <div className="flex flex-col gap-1 bg-surface p-6">
                  <h2 className="font-semibold text-text">
                    {application.title}
                  </h2>
                  <p className="text-sm text-muted">{application.company}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 border-t border-border bg-background p-6 text-sm">
                  <div className="flex items-center gap-2 text-muted">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path
                        fillRule="evenodd"
                        d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75a.75.75 0 0 1 .75-.75Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      {new Date(application.appliedDate).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path
                        fillRule="evenodd"
                        d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331V16l3.114-3.114a1 1 0 0 1 .707-.293h.179c2.236 0 4.43-.18 6.57-.524 1.437-.232 2.43-1.489 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.03 41.03 0 0 0 10 2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{interviewLabel}</span>
                  </div>
                  <div>
                    <StatusBadge status={application.status} />
                  </div>
                </div>

                <div className="flex items-center gap-3 border-t border-border bg-surface p-6">
                  <Link
                    href={`/applications/${application.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-lavenderSoft px-4 py-2.5 text-sm font-medium text-primaryDark shadow-sm transition-colors hover:bg-lavender"
                  >
                    View
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
