import SidebarNav from "./SidebarNav";

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex w-64 -translate-x-full flex-col overflow-y-auto bg-primaryDark pt-6 transition-transform duration-200 ease-in-out peer-checked:translate-x-0 md:static md:z-auto md:translate-x-0">
      <SidebarNav />
    </aside>
  );
}
