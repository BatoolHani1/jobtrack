import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <header className="border-b border-border bg-surface">
        <div className="px-6 py-4 md:px-8 lg:px-12">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/jobtrack-icon.svg"
              alt=""
              width={230}
              height={240}
              priority
              className="h-10 w-auto"
            />
            <span className="text-lg font-semibold">
              <span className="text-primaryDark">Job</span>
              <span className="text-primary">Track</span>
            </span>
          </Link>
        </div>
      </header>

      <section className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden bg-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lavenderSoft blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-lavender/30 blur-3xl"
        />

        <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 md:gap-10 md:px-8 md:py-24">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold tracking-widest text-primary">
              YOUR JOB SEARCH, ORGANIZED
            </span>
            <h1 className="text-4xl font-bold leading-tight text-text sm:text-5xl">
              <span className="text-primary">Effortless</span> Job Management
            </h1>
            <p className="max-w-md text-base leading-relaxed text-muted">
              Take control of your job search with an easy-to-use app that
              helps you manage applications, track progress, and stay
              organized every step of the way.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/dashboard"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primaryDark"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <Image
              src="/jobtrack-illustration.png"
              alt="Illustration of a job application tracking checklist"
              width={1536}
              height={1024}
              priority
              className="h-auto w-full max-w-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
