import SidebarNav from "./SidebarNav";
import { signOut } from "@/auth";

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex w-64 -translate-x-full flex-col overflow-y-auto bg-primaryDark py-6 transition-transform duration-200 ease-in-out peer-checked:translate-x-0 md:static md:z-auto md:translate-x-0">
      <SidebarNav />
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
        className="mt-auto px-3"
      >
        <button
          type="submit"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-lavenderSoft transition-colors hover:bg-primary/40 hover:text-white"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path d="M10 2a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm-4.24 2.7a1 1 0 0 1 .05 1.42 5.5 5.5 0 1 0 8.38 0 1 1 0 1 1 1.47-1.36 7.5 7.5 0 1 1-11.32 0 1 1 0 0 1 1.42-.06Z" />
          </svg>
          Sign Out
        </button>
      </form>
    </aside>
  );
}
