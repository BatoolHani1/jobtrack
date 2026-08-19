export default function TotalApplicationsCard({ total }) {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-xl bg-primaryLight p-6 text-white shadow-sm">
      <p className="text-base font-medium text-white text-center">Total Applications</p>
      <p className="mt-2 text-6xl font-bold text-center">{total}</p>
    </div>
  );
}
