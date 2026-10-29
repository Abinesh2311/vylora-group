import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  it("merges class names and removes Tailwind conflicts", () => {
    expect(cn("px-2 py-1", "px-4", "text-sm")).toBe("py-1 px-4 text-sm");
  });

  it("handles conditional values", () => {
    const active = true;
    expect(cn("base", active && "active", !active && "inactive")).toBe(
      "base active",
    );
  });
});
