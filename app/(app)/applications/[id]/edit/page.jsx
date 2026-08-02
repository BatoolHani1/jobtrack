import prisma from "@/lib/prisma";
import { getApplicationById } from "@/lib/applications";
import ApplicationForm from "@/components/ApplicationForm";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const metadata = {
  title: "Edit Application | JobTrack",
};

async function updateApplication(formData) {
  "use server";

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

export default async function EditApplicationPage({ params }) {
  const { id } = await params;
  const application = await getApplicationById(id);

  if (!application) {
    notFound();
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-text">
          Edit Application
        </h1>
        <p className="mt-1 text-sm text-muted">
          Update the details of this application.
        </p>
      </div>

      <ApplicationForm action={updateApplication} application={application} submitLabel="Save Changes" />
    </div>
  );
}
