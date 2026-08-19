import { auth } from "@/auth";
import { getApplicationStatusCounts, getRecentApplications } from "@/lib/applications";
import { APPLICATION_STATUSES } from "@/lib/statuses";
import StatCard from "@/components/StatCard";
import TotalApplicationsCard from "@/components/TotalApplicationsCard";
import RecentApplications from "@/components/RecentApplications";
import ApplicationsPieChart from "@/components/ApplicationsPieChart";

export const metadata = {
  title: "Dashboard | JobTrack",
};

export default async function DashboardPage() {
  const session = await auth();
  const [statusCounts, recentApplications] = await Promise.all([
    getApplicationStatusCounts(session.user.id),
    getRecentApplications(session.user.id),
  ]);
  const total = Object.values(statusCounts).reduce((sum, count) => sum + count, 0);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8">
      <div>
        <h1 className="text-2xl font-semibold text-text">Dashboard</h1>
        <p className="mt-1 text-sm text-muted">
          This is where you track your job search: an overview of your
          applications, interviews, and offers.
        </p>
      </div>

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
    </div>
  );
}
