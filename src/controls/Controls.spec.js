import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";
import "@testing-library/jest-dom/extend-expect";

test("Renders", () => {
  render(<Controls />);
});

test("Buttons Shown", () => {
  const locked = false;
  const closed = false;
  const toggleLocked = jest.fn(() => !locked);
  const toggleClosed = jest.fn(() => !closed);
  const { getByText } = render(
    <Controls
      locked={locked}
      closed={closed}
      toggleClosed={toggleClosed}
      toggleLocked={toggleLocked}
    />
  );
  getByText(/lock gate/i);
  getByText(/close gate/i);
});

// test("Button text changes when clicked", async () => {
//   const locked = false;
//   const closed = false;
//   const toggleLocked = jest.fn(() => () => !locked);
//   const toggleClosed = jest.fn(() => () => !closed);

//   const { getByText } = render(
// <Controls
//   locked={locked}
//   closed={closed}
//   toggleClosed={toggleClosed}
//   toggleLocked={toggleLocked}
// />
//   );

//   const component = render(
//     <Controls
//       locked={locked}
//       closed={closed}
//       toggleClosed={toggleClosed}
//       toggleLocked={toggleLocked}
//     />
//   );

//   const button = component.getByText(/close gate/i);
//   fireEvent.click(button);
//   expect(toggleClosed).toHaveBeenCalledTimes(1);
//   button = await component.getByText("Open Gate");
//   expect(button);

//   expect(closed).toBe(true);
// expect(closed).toBe(true);

//   fireEvent.click(getByText(/lock gate/i));
//   getByText(/unlock gate/i);
// getByText(/lock gate/i);
// getByText(/close gate/i);
// });

test("Closed button disabled if gate locked", () => {
  const locked = true;
  const closed = false;
  const toggleLocked = jest.fn(() => () => !locked);
  const toggleClosed = jest.fn(() => () => !closed);
  const { getByText } = render(
    <Controls
      locked={locked}
      closed={closed}
      toggleClosed={toggleClosed}
      toggleLocked={toggleLocked}
    />
  );

  expect(getByText(/close gate/i)).toBeDisabled();
});

test("Locked button disabled if gate open", () => {
  const locked = false;
  const closed = false;
  const toggleLocked = jest.fn(() => () => !locked);
  const toggleClosed = jest.fn(() => () => !closed);
  const { getByText } = render(
    <Controls
      locked={locked}
      closed={closed}
      toggleClosed={toggleClosed}
      toggleLocked={toggleLocked}
    />
  );
  expect(getByText(/lock gate/i)).toBeDisabled();
});

// test("Can't open/close if locked", () => {
//   const toggleLocked = jest.fn();
//   const toggleClosed = jest.fn();

//   const { getByText, queryByText } = render(
//     <Controls toggleClosed={toggleClosed} toggleLocked={toggleLocked} />
//   );

//   fireEvent.click(getByText(/close gate/i));
//   fireEvent.click(getByText(/lock gate/i));
//   expect(toggleClosed).toHaveBeenCalledTimes(1);
//   fireEvent.click(getByText(/close gate/i));
//   const openState = queryByText(/open/i);
//   expect(openState).toBeNull();
// });
