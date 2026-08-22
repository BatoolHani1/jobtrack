import { z } from "zod";
import { APPLICATION_STATUSES } from "@/lib/statuses";

export const applicationSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  company: z.string().min(1, "Company is required"),
  status: z.enum(APPLICATION_STATUSES),
  appliedDate: z
    .string()
    .min(1, "Applied date is required")
    .refine((value) => !Number.isNaN(Date.parse(value)), "Enter a valid date")
    .refine(
      (value) => value <= new Date().toLocaleDateString("en-CA"),
      "Applied date cannot be in the future"
    ),
  link: z.union([z.literal(""), z.url("Enter a valid URL")]),
  notes: z.string(),
});

export const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
