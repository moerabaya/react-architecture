import React from "react";
import Tests from "./index";
import TestRenderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";

test("App snapshot test", () => {
  const component = TestRenderer.create(<Tests />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
