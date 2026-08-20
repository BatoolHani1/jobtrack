import { Suspense } from "react";
import Link from "next/link";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Log In",
};

export default function LoginPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lavenderSoft blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-lavender/30 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-md flex-col gap-6 px-4">
        <div>
          <h1 className="text-2xl font-semibold text-text">
            Welcome back
          </h1>
          <p className="mt-1 text-sm text-muted">
            Log in to keep tracking your job applications.
          </p>
        </div>

        <Suspense>
          <LoginForm />
        </Suspense>

        <p className="text-center text-sm text-muted">
          Do not have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-primary hover:text-primaryDark"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}
