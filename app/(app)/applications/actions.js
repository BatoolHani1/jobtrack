"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect, notFound } from "next/navigation";
import { auth } from "@/auth";
import { z } from "zod";
import { applicationSchema } from "@/lib/validation";

export async function createApplication(prevState, formData) {
  const title = formData.get("title");
  const company = formData.get("company");
  const status = formData.get("status");
  const appliedDate = formData.get("appliedDate");
  const notes = formData.get("notes");
  const link = formData.get("link");

  const result = applicationSchema.safeParse({ title, company, status, appliedDate, link, notes });

  if (!result.success) {
    return {
      errors: z.flattenError(result.error).fieldErrors,
      values: { title, company, status, appliedDate, link, notes },
    };
  }

  const session = await auth();

  await prisma.application.create({
    data: {
      title: result.data.title,
      company: result.data.company,
      status: result.data.status,
      appliedDate: new Date(result.data.appliedDate),
      notes: result.data.notes === "" ? null : result.data.notes,
      link: result.data.link === "" ? null : result.data.link,
      userId: session.user.id,
    },
  });

  revalidatePath("/applications");
  redirect("/applications");
}

export async function updateApplication(prevState, formData) {
  const id = formData.get("id");
  const title = formData.get("title");
  const company = formData.get("company");
  const status = formData.get("status");
  const appliedDate = formData.get("appliedDate");
  const notes = formData.get("notes");
  const link = formData.get("link");

  const result = applicationSchema.safeParse({ title, company, status, appliedDate, link, notes });

  if (!result.success) {
    return {
      errors: z.flattenError(result.error).fieldErrors,
      values: { title, company, status, appliedDate, link, notes },
    };
  }

  const session = await auth();

  const existing = await prisma.application.findFirst({
    where: { id, userId: session.user.id },
  });

  if (!existing) {
    notFound();
  }

  await prisma.application.update({
    where: { id },
    data: {
      title: result.data.title,
      company: result.data.company,
      status: result.data.status,
      appliedDate: new Date(result.data.appliedDate),
      notes: result.data.notes === "" ? null : result.data.notes,
      link: result.data.link === "" ? null : result.data.link,
    },
  });

  revalidatePath("/applications");
  revalidatePath(`/applications/${id}`);
  redirect(`/applications/${id}`);
}

export async function deleteApplication(formData) {
  const id = formData.get("id");

  const session = await auth();

  const existing = await prisma.application.findFirst({
    where: { id, userId: session.user.id },
  });

  if (!existing) {
    notFound();
  }

  await prisma.application.delete({ where: { id } });

  revalidatePath("/applications");
  redirect("/applications");
}
