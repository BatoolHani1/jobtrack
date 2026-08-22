import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ApplicationStatusFilter from "@/components/ApplicationStatusFilter";

const mocks = vi.hoisted(() => ({
  replace: vi.fn(),
  searchParams: new URLSearchParams(),
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: mocks.replace }),
  usePathname: () => "/applications",
  useSearchParams: () => mocks.searchParams,
}));

describe("ApplicationStatusFilter", () => {
  beforeEach(() => {
    mocks.replace.mockClear();
    mocks.searchParams = new URLSearchParams();
  });

  it("calls replace with a path containing status=Offer when selecting Offer", async () => {
    const user = userEvent.setup();
    render(<ApplicationStatusFilter status="" />);

    await user.selectOptions(screen.getByLabelText("Filter by status"), "Offer");

    expect(mocks.replace).toHaveBeenCalledWith(expect.stringContaining("status=Offer"));
  });

  it("drops page from the query string when the status changes", async () => {
    mocks.searchParams = new URLSearchParams("page=3");
    const user = userEvent.setup();
    render(<ApplicationStatusFilter status="" />);

    await user.selectOptions(screen.getByLabelText("Filter by status"), "Offer");

    const [calledWith] = mocks.replace.mock.calls[0];
    expect(calledWith).not.toContain("page=");
  });
});
