import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("Render Dashboard", () => {
  render(<Dashboard />);
});

test("Default Gate State", () => {
  const { getByText } = render(<Dashboard />);
  getByText(/unlocked/i);
  getByText(/open/i);
  getByText(/lock gate/i);
  getByText(/close gate/i);
});

test("buttons text changes to reflect the state the door will be in if clicked", () => {
  const component = render(<Dashboard />);
  let button = component.getByText("Close Gate");
  fireEvent.click(button);
  button = component.getByText("Open Gate");
  expect(button);
});
