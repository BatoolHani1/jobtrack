import ApplicationForm from "@/components/ApplicationForm";
import { createApplication } from "@/app/(app)/applications/actions";

export const metadata = {
  title: "Add Application | JobTrack",
};

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
