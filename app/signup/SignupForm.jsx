"use client";

import { useActionState } from "react";
import { signup } from "./actions";
import { buttonStyles } from "@/lib/buttonStyles";

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(signup, { errors: {} });

  return (
    <form action={formAction} className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-6 shadow-sm">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-text">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-lg border border-border px-3 py-2 text-sm text-text placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <div aria-live="polite" aria-atomic="true">
          {state.errors?.name && (
            <p className="text-sm text-danger">{state.errors.name}</p>
          )}
        </div>
      </div>

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
        <div aria-live="polite" aria-atomic="true">
          {state.errors?.email && (
            <p className="text-sm text-danger">{state.errors.email}</p>
          )}
        </div>
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
        <div aria-live="polite" aria-atomic="true">
          {state.errors?.password && (
            <p className="text-sm text-danger">{state.errors.password}</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-2">
        <button
          type="submit"
          aria-disabled={isPending}
          className={buttonStyles("primary")}
        >
          Create account
        </button>
      </div>
    </form>
  );
}
