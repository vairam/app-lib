import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders Button component", () => {
    render(<Button>Click Me</Button>);

    expect(screen.getByRole("button").innerHTML).toEqual("Click Me");
  });
});
