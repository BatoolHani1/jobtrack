"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { authenticate } from "./actions";
import { buttonStyles } from "@/lib/buttonStyles";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-text">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border border-border px-3 py-2 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-sm font-medium text-text">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={8}
          className="rounded-lg border border-border px-3 py-2 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <input type="hidden" name="redirectTo" value={callbackUrl} />

      <div className="flex items-center justify-end gap-3 pt-2">
        <button
          type="submit"
          aria-disabled={isPending}
          className={buttonStyles("primary")}
        >
          Log in
        </button>
      </div>

      <div aria-live="polite" aria-atomic="true">
        {errorMessage && <p className="text-sm text-danger">{errorMessage}</p>}
      </div>
    </form>
  );
}
