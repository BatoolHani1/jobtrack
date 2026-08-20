export default function ApplicationsLoading() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="h-8 w-40 animate-pulse rounded-lg bg-border" />
          <div className="mt-2 h-4 w-72 animate-pulse rounded-lg bg-border" />
        </div>
        <div className="h-10 w-40 animate-pulse rounded-lg bg-border" />
      </div>

      <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4 sm:flex-row sm:items-center">
        <div className="h-10 flex-1 animate-pulse rounded-lg bg-border" />
        <div className="h-10 w-40 animate-pulse rounded-lg bg-border" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="h-64 animate-pulse rounded-xl border border-border bg-surface"
          />
        ))}
      </div>
    </div>
  );
}
