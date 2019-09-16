import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";
import "@testing-library/jest-dom/extend-expect";

test("Display Shows", () => {
  const { getByText } = render(<Display />);
});

test("Display Gate State-Closed", () => {
  const { getByText } = render(<Display closed={true} locked={true} />);
  getByText(/closed/i);
  getByText(/locked/i);
});

test("Display Gate State-Closed", () => {
  const { getByText } = render(<Display closed={false} locked={false} />);
  getByText(/open/i);
  getByText(/Unlock/);
});

test("Use red-led for locked or closed", () => {
  const { getByText } = render(<Display closed={true} locked={true} />);
  expect(getByText(/locked/i)).toHaveClass("red-led");
  expect(getByText(/closed/i)).toHaveClass("red-led");
});

test("Use green-led for unlocked or open", () => {
  const { getByText } = render(<Display closed={false} locked={false} />);

  expect(getByText(/unlocked/i)).toHaveClass("green-led");
  expect(getByText(/open/i)).toHaveClass("green-led");
});
