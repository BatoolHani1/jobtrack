import { getApplicationById } from "@/lib/applications";
import ApplicationForm from "@/components/ApplicationForm";
import { notFound } from "next/navigation";
import { updateApplication } from "@/app/(app)/applications/actions";

export const metadata = {
  title: "Edit Application | JobTrack",
};

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
