"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { APPLICATION_STATUSES } from "@/lib/statuses";

export default function ApplicationStatusFilter({ status }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleStatusChange(value) {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    if (value) {
      params.set("status", value);
    } else {
      params.delete("status");
    }
    const query = params.toString();
    replace(query ? `${pathname}?${query}` : pathname);
  }

  return (
    <>
      <label htmlFor="application-status-filter" className="sr-only">
        Filter by status
      </label>
      <select
        id="application-status-filter"
        defaultValue={status}
        onChange={(e) => handleStatusChange(e.target.value)}
        className="rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      >
        <option value="">All statuses</option>
        {APPLICATION_STATUSES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </>
  );
}
