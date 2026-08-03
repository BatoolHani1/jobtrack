import { deleteApplication } from "@/app/(app)/applications/actions";

export default function DeleteApplicationButton({ id }) {
  return (
    <form action={deleteApplication} className="contents">
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-danger px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-dangerDark"
      >
        Delete
      </button>
    </form>
  );
}
