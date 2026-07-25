import StatCard from "@/components/StatCard";

export const metadata = {
  title: "Dashboard | JobTrack",
};

const stats = [
  { label: "Total Applications", value: 0 },
  { label: "Interviews", value: 0 },
  { label: "Offers", value: 0 },
  { label: "Rejected", value: 0 },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8">
      <div>
        <h1 className="text-2xl font-semibold text-text">Dashboard</h1>
        <p className="mt-1 text-sm text-muted">
          This is where you track your job search — an overview of your
          applications, interviews, and offers.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <section className="rounded-xl border border-border bg-surface p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-text">
              Recent Applications
            </h2>
            <span className="rounded-full bg-lavenderSoft px-2.5 py-1 text-xs font-medium text-muted">
              Coming in a later week
            </span>
          </div>
          <p className="mt-4 text-sm text-muted">
            A list of your most recent job applications will appear here once
            tracking is connected to real data.
          </p>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-text">
              Applications Overview
            </h2>
            <span className="rounded-full bg-lavenderSoft px-2.5 py-1 text-xs font-medium text-muted">
              Coming in a later week
            </span>
          </div>
          <p className="mt-4 text-sm text-muted">
            Charts summarizing your application stages will be added in a future
            update.
          </p>
        </section>
      </div>
    </div>
  );
}
