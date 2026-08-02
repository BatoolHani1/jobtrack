import ApplicationForm from "@/components/ApplicationForm";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Application | JobTrack",
};

async function createApplication(formData) {
  "use server";

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

export default function NewApplicationPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-text">
          Add Application
        </h1>
        <p className="mt-1 text-sm text-muted">
          Log the details of a job you&apos;ve applied to.
        </p>
      </div>

      <ApplicationForm action={createApplication} submitLabel="Save Application" />
    </div>
  );
}
