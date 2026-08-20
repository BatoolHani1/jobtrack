import Link from "next/link";

const PRIMARY_BUTTON = "inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primaryDark";
const SECONDARY_BUTTON = "inline-flex items-center justify-center gap-2 rounded-lg bg-lavenderSoft px-4 py-2.5 text-sm font-medium text-primaryDark shadow-sm transition-colors hover:bg-lavender";

export default function ApplicationsEmptyState({ variant }) {
  const content = {
    empty: {
      heading: "No applications to track yet",
      message: "Add your first job to start tracking your job search journey.",
      href: "/applications/new",
      label: "+ Add Application",
      buttonClass: PRIMARY_BUTTON,
    },
    filters: {
      heading: "No matches for this search",
      message: "Nothing in your applications matches the current search or filter.",
      href: "/applications",
      label: "Clear search and filters",
      buttonClass: SECONDARY_BUTTON,
    },
    page: {
      heading: "This page is empty",
      message: "There are no applications on this page. Go back to the first page to see your results.",
      href: "/applications",
      label: "Back to first page",
      buttonClass: SECONDARY_BUTTON,
    },
  }[variant];

  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface px-6 py-16 text-center">
      <h2 className="text-base font-medium text-text">{content.heading}</h2>
      <p className="mt-2 max-w-sm text-sm text-muted">{content.message}</p>
      <Link href={content.href} className={`mt-6 ${content.buttonClass}`}>
        {content.label}
      </Link>
    </div>
  );
}
