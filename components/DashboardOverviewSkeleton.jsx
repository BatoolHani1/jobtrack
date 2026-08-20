export default function DashboardOverviewSkeleton() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="h-full min-h-48 animate-pulse rounded-xl border border-border bg-surface" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-24 animate-pulse rounded-xl border border-border bg-surface"
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="h-96 animate-pulse rounded-xl border border-border bg-surface" />
        <div className="h-96 animate-pulse rounded-xl border border-border bg-surface" />
      </div>
    </>
  );
}
