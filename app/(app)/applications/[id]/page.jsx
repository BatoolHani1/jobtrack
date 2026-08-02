import Link from "next/link";
import { notFound } from "next/navigation";
import { getApplicationById } from "@/lib/applications";
import StatusBadge from "@/components/StatusBadge";

export default async function ApplicationDetailPage({ params }) {
  const { id } = await params;
  const application = await getApplicationById(id);

  if (!application) {
    notFound();
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link
          href="/applications"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-lavenderSoft px-4 py-2.5 text-sm font-medium text-primaryDark shadow-sm transition-colors hover:bg-lavender"
        >
          Back to applications
        </Link>
        <Link
          href={`/applications/${application.id}/edit`}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-lavenderSoft px-4 py-2.5 text-sm font-medium text-primaryDark shadow-sm transition-colors hover:bg-lavender"
        >
          Edit
        </Link>
      </div>

      <div className="flex flex-col gap-6 rounded-xl border border-border bg-surface p-6 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-text">
              {application.title}
            </h1>
            <p className="mt-1 text-sm text-muted">{application.company}</p>
          </div>
          <StatusBadge status={application.status} />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted">
            Applied on{" "}
            {new Date(application.appliedDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
          {application.notes ? (
            <p className="text-sm text-text">{application.notes}</p>
          ) : null}
          {application.link ? (
            <a
              href={application.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:text-primaryDark"
            >
              View job posting
            </a>
          ) : null}
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6">
          <h2 className="text-base font-medium text-text">Interviews</h2>
          {application.interviews.length === 0 ? (
            <p className="text-sm text-muted">No interviews recorded</p>
          ) : (
            <ul className="flex flex-col gap-2">
              {application.interviews.map((interview) => (
                <li
                  key={interview.id}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-text">{interview.type}</span>
                  <span className="text-muted">
                    {new Date(interview.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
