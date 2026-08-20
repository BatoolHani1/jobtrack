import { deleteApplication } from "@/app/(app)/applications/actions";
import { buttonStyles } from "@/lib/buttonStyles";

export default function DeleteApplicationButton({ id }) {
  return (
    <form action={deleteApplication} className="contents">
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className={buttonStyles("danger")}
      >
        Delete
      </button>
    </form>
  );
}
