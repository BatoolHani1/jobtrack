"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function ApplicationPagination({ totalPages, currentPage }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function createPageURL(pageNumber) {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Applications pagination" className="flex items-center gap-2">
      {currentPage <= 1 ? (
        <span
          aria-label="Previous page"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 0 1-.02 1.06L8.832 10l3.938 3.71a.75.75 0 1 1-1.04 1.08l-4.5-4.25a.75.75 0 0 1 0-1.08l4.5-4.25a.75.75 0 0 1 1.06.02Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      ) : (
        <Link
          href={createPageURL(currentPage - 1)}
          aria-label="Previous page"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-lavenderPale text-primaryDark transition-colors hover:bg-lavenderSoft"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 0 1-.02 1.06L8.832 10l3.938 3.71a.75.75 0 1 1-1.04 1.08l-4.5-4.25a.75.75 0 0 1 0-1.08l4.5-4.25a.75.75 0 0 1 1.06.02Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      )}

      {pages.map((pageNumber) => (
        <Link
          key={pageNumber}
          href={createPageURL(pageNumber)}
          aria-current={pageNumber === currentPage ? "page" : undefined}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
            pageNumber === currentPage
              ? "bg-primary text-white"
              : "bg-lavenderPale text-primaryDark hover:bg-lavenderSoft"
          }`}
        >
          {pageNumber}
        </Link>
      ))}

      {currentPage >= totalPages ? (
        <span
          aria-label="Next page"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      ) : (
        <Link
          href={createPageURL(currentPage + 1)}
          aria-label="Next page"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-lavenderPale text-primaryDark transition-colors hover:bg-lavenderSoft"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      )}
    </nav>
  );
}
