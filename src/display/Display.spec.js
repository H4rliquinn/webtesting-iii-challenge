import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

test("Can't open/close if locked", () => {
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
