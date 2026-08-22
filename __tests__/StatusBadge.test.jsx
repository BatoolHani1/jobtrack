import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import StatusBadge from "@/components/StatusBadge";

describe("StatusBadge", () => {
  it("renders the status text", () => {
    render(<StatusBadge status="Offer" />);

    expect(screen.getByText("Offer")).toBeInTheDocument();
  });

  it("falls back to the Applied style for an unrecognised status", () => {
    const { unmount } = render(<StatusBadge status="Applied" />);
    const appliedClassName = screen.getByText("Applied").className;
    unmount();

    render(<StatusBadge status="Ghosted" />);
    const ghostedClassName = screen.getByText("Ghosted").className;

    expect(ghostedClassName).toBe(appliedClassName);
  });
});
