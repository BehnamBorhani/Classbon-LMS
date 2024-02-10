import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import { Badge } from ".";

describe("Badge Component", () => {
  test("applies the correct css class for different badge variants", () => {
    const { rerender } = render(<Badge variant="primary">Primary</Badge>);
    expect(screen.getByText("Primary")).toHaveClass("badge-primary");

    rerender(<Badge size="large">Large</Badge>);
    expect(screen.getByText("Large")).toHaveClass("badge-lg");
  });
});
