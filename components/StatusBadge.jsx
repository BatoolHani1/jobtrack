const statusStyles = {
  Applied: "bg-lavenderSoft text-primaryDark",
  Interview: "bg-lavender text-primaryDark",
  Offer: "bg-primary text-white",
  Rejected: "bg-border text-muted",
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
        statusStyles[status] ?? statusStyles.Applied
      }`}
    >
      {status}
    </span>
  );
}
