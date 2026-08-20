import { Suspense } from "react";
import { auth } from "@/auth";
import DashboardOverview from "@/components/DashboardOverview";
import DashboardOverviewSkeleton from "@/components/DashboardOverviewSkeleton";
import ApplicationsOverTimeSection from "@/components/ApplicationsOverTimeSection";
import ApplicationsOverTimeSkeleton from "@/components/ApplicationsOverTimeSkeleton";

export const metadata = {
  title: "Dashboard | JobTrack",
};

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8">
      <div>
        <h1 className="text-2xl font-semibold text-text">Dashboard</h1>
        <p className="mt-1 text-sm text-muted">
          This is where you track your job search: an overview of your
          applications, interviews, and offers.
        </p>
      </div>

      <Suspense fallback={<DashboardOverviewSkeleton />}>
        <DashboardOverview userId={session.user.id} />
      </Suspense>

      <Suspense fallback={<ApplicationsOverTimeSkeleton />}>
        <ApplicationsOverTimeSection userId={session.user.id} />
      </Suspense>
    </div>
  );
}
