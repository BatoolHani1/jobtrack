import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";

export default async function Navbar() {
  const session = await auth();
  const displayName = session?.user?.name || session?.user?.email;
  const initial = displayName?.charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-20 flex shrink-0 items-center justify-between border-b border-border bg-surface px-4 py-3 md:px-6">
      <div className="flex items-center gap-3">
        <label
          htmlFor="sidebar-toggle"
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-border text-muted hover:bg-lavenderSoft md:hidden"
          aria-label="Toggle navigation"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M3 5.5A.75.75 0 0 1 3.75 4.75h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.5Zm0 4.5a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10Zm.75 3.75a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <Link href="/dashboard" className="flex items-center gap-2">
          <Image
            src="/jobtrack-icon.svg"
            alt=""
            width={230}
            height={240}
            className="h-10 w-auto"
          />
          <span className="text-lg font-semibold">
            <span className="text-primaryDark">Job</span>
            <span className="text-primary">Track</span>
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lavenderSoft text-sm font-medium text-text">
          {initial}
        </span>
        <span className="hidden text-sm font-medium text-text sm:inline">
          {displayName}
        </span>
      </div>
    </header>
  );
}
