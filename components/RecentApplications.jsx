import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";

export default function RecentApplications({ applications }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-text">Recent Applications</h2>
      {applications.length === 0 ? (
        <p className="mt-4 text-sm text-muted">No applications yet.</p>
      ) : (
        <ul className="mt-4 flex flex-col gap-3">
          {applications.map((application) => (
            <li key={application.id}>
              <Link
                href={`/applications/${application.id}`}
                className="flex items-center justify-between gap-4 rounded-lg border border-border bg-lavenderPale p-3 transition-colors hover:bg-lavenderSoft"
              >
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium text-text">{application.title}</p>
                  <p className="text-sm text-muted">{application.company}</p>
                </div>
                <div className="flex items-center gap-3">
                  <StatusBadge status={application.status} />
                  <span className="text-sm text-muted">
                    {new Date(application.appliedDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
