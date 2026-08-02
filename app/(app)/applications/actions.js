"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createApplication(formData) {
  const title = formData.get("title");
  const company = formData.get("company");
  const status = formData.get("status");
  const appliedDate = formData.get("appliedDate");
  const notes = formData.get("notes");
  const link = formData.get("link");

  const user = await prisma.user.findFirst();

  await prisma.application.create({
    data: {
      title,
      company,
      status,
      appliedDate: new Date(appliedDate),
      notes: notes === "" ? null : notes,
      link: link === "" ? null : link,
      userId: user.id,
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
