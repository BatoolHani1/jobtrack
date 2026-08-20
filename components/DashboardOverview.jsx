import { getApplicationStatusCounts, getRecentApplications } from "@/lib/applications";
import { APPLICATION_STATUSES } from "@/lib/statuses";
import StatCard from "@/components/StatCard";
import TotalApplicationsCard from "@/components/TotalApplicationsCard";
import RecentApplications from "@/components/RecentApplications";
import ApplicationsPieChart from "@/components/ApplicationsPieChart";

export default async function DashboardOverview({ userId }) {
  const [statusCounts, recentApplications] = await Promise.all([
    getApplicationStatusCounts(userId),
    getRecentApplications(userId),
  ]);
  const total = Object.values(statusCounts).reduce((sum, count) => sum + count, 0);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <TotalApplicationsCard total={total} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
          {APPLICATION_STATUSES.map((status) => (
            <StatCard key={status} label={status} value={statusCounts[status]} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <RecentApplications applications={recentApplications} />
        </section>

        <section className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-text">
            Applications Overview
          </h2>
          <div className="mt-4">
            <ApplicationsPieChart statusCounts={statusCounts} />
          </div>
        </section>
      </div>
    </>
  );
}
