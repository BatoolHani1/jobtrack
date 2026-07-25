import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function LayoutShell({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="flex flex-1">
        <input type="checkbox" id="sidebar-toggle" className="peer hidden" />
        <Sidebar />
        <label
          htmlFor="sidebar-toggle"
          aria-hidden="true"
          className="fixed inset-0 z-30 hidden bg-primaryDark/40 peer-checked:block md:hidden"
        />
        <main className="flex-1 px-4 py-6 md:px-8 md:py-8">{children}</main>
      </div>
    </div>
  );
}
