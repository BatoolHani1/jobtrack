import { describe, expect, it } from "vitest";
import { formatDate } from "@/lib/format";

describe("formatDate", () => {
  it("formats a date string", () => {
    expect(formatDate(new Date(2024, 2, 5))).toBe("5 Mar 2024");
  });
});
