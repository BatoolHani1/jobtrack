"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect, notFound } from "next/navigation";
import { auth } from "@/auth";

export async function createApplication(formData) {
  const title = formData.get("title");
  const company = formData.get("company");
  const status = formData.get("status");
  const appliedDate = formData.get("appliedDate");
  const notes = formData.get("notes");
  const link = formData.get("link");

  const session = await auth();

  await prisma.application.create({
    data: {
      title,
      company,
      status,
      appliedDate: new Date(appliedDate),
      notes: notes === "" ? null : notes,
      link: link === "" ? null : link,
      userId: session.user.id,
    },
  });

  revalidatePath("/applications");
  redirect("/applications");
}

export async function updateApplication(formData) {
  const id = formData.get("id");
  const title = formData.get("title");
  const company = formData.get("company");
  const status = formData.get("status");
  const appliedDate = formData.get("appliedDate");
  const notes = formData.get("notes");
  const link = formData.get("link");

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
      title,
      company,
      status,
      appliedDate: new Date(appliedDate),
      notes: notes === "" ? null : notes,
      link: link === "" ? null : link,
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
