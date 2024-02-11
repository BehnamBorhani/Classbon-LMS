import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import { Progress } from ".";

describe("Progress Component", () => {
  test("applies the correct css class for different variant", () => {
    const { rerender } = render(<Progress value={75} variant="accent" />);
    expect(screen.getByRole("progressbar")).toHaveClass("progress-accent");

    rerender(<Progress value={75} variant="error" />);
    expect(screen.getByRole("progressbar")).toHaveClass("progress-error");
  });
});
