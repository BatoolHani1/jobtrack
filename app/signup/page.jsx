import Link from "next/link";
import SignupForm from "./SignupForm";

export const metadata = {
  title: "Sign Up | JobTrack",
};

export default function SignupPage() {
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
            Create your account
          </h1>
          <p className="mt-1 text-sm text-muted">
            Start tracking your job applications in one place.
          </p>
        </div>

        <SignupForm />

        <p className="text-center text-sm text-muted">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:text-primaryDark">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}
