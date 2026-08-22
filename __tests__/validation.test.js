import { describe, it, expect } from "vitest";
import { z } from "zod";
import { applicationSchema, signupSchema } from "@/lib/validation";

describe("applicationSchema", () => {
  it("passes for a fully valid object", () => {
    const result = applicationSchema.safeParse({
      title: "Software Engineer",
      company: "Acme",
      status: "Applied",
      appliedDate: "2020-01-01",
      link: "https://example.com",
      notes: "",
    });

    expect(result.success).toBe(true);
  });

  it("fails when title is empty", () => {
    const result = applicationSchema.safeParse({
      title: "",
      company: "Acme",
      status: "Applied",
      appliedDate: "2020-01-01",
      link: "",
      notes: "",
    });

    expect(result.success).toBe(false);
    expect(z.flattenError(result.error).fieldErrors.title).toContain("Job title is required");
  });

  it("fails when appliedDate is in the future", () => {
    const result = applicationSchema.safeParse({
      title: "Software Engineer",
      company: "Acme",
      status: "Applied",
      appliedDate: "2030-01-01",
      link: "",
      notes: "",
    });

    expect(result.success).toBe(false);
    expect(z.flattenError(result.error).fieldErrors.appliedDate).toContain(
      "Applied date cannot be in the future"
    );
  });

  it("passes when link is an empty string", () => {
    const result = applicationSchema.safeParse({
      title: "Software Engineer",
      company: "Acme",
      status: "Applied",
      appliedDate: "2020-01-01",
      link: "",
      notes: "",
    });

    expect(result.success).toBe(true);
  });

  it("fails when link is not a url", () => {
    const result = applicationSchema.safeParse({
      title: "Software Engineer",
      company: "Acme",
      status: "Applied",
      appliedDate: "2020-01-01",
      link: "not a url",
      notes: "",
    });

    expect(result.success).toBe(false);
    expect(z.flattenError(result.error).fieldErrors.link).toContain("Enter a valid URL");
  });
});

describe("signupSchema", () => {
  it("fails when password is seven characters", () => {
    const result = signupSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      password: "1234567",
    });

    expect(result.success).toBe(false);
    expect(z.flattenError(result.error).fieldErrors.password).toContain(
      "Password must be at least 8 characters"
    );
  });

  it("fails when email is not valid", () => {
    const result = signupSchema.safeParse({
      name: "Jane Doe",
      email: "notanemail",
      password: "longenoughpassword",
    });

    expect(result.success).toBe(false);
  });
});
