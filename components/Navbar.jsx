import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-full p-2 text-muted hover:bg-lavenderSoft hover:text-primary"
          aria-label="Notifications"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path d="M10 2a6 6 0 0 0-6 6v3.586l-1.707 1.707A1 1 0 0 0 3 15h14a1 1 0 0 0 .707-1.707L16 11.586V8a6 6 0 0 0-6-6Zm0 16a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 10 18Z" />
          </svg>
        </button>

        <div className="flex items-center gap-2 border-l border-border pl-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lavenderSoft text-sm font-medium text-text">
            U
          </span>
          <span className="hidden text-sm font-medium text-text sm:inline">
            User
          </span>
        </div>
      </div>
    </header>
  );
}
