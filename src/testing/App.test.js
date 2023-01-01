import React from "react";
import Tests from "./index";
import { render, screen } from "@testing-library/react";
it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Tests />, div);
});
