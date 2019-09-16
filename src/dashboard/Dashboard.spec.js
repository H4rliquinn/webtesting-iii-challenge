import React from "react";
import { render } from "@testing-library/react";
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

// test("Can't open/close if locked", () => {
//   const toggleLocked = jest.fn();
//   const toggleClosed = jest.fn();
//   const { getByText, queryByText, fireEvent } = render(<Dashboard />);

//   const closeButton = getByText(/close/i);
//   fireEvent.click(closeButton);
//   expect(toggleClosed).toHaveBeenCalledTimes(1);
//   fireEvent.click(getByText(/close gate/i));
//   const openState = queryByText(/open/i);
//   expect(openState).toBeNull();
// });
