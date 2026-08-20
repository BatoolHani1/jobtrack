import { getApplicationsPerMonth } from "@/lib/applications";
import ApplicationsOverTimeChart from "@/components/ApplicationsOverTimeChart";

export default async function ApplicationsOverTimeSection({ userId }) {
  const applicationsPerMonth = await getApplicationsPerMonth(userId);

  return (
    <section className="rounded-xl border border-border bg-surface p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-text">
        Applications Over Time
      </h2>
      <div className="mt-4">
        <ApplicationsOverTimeChart data={applicationsPerMonth} />
      </div>
    </section>
  );
}
