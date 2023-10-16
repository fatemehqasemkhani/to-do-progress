import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "../components/Checkbox";

const mockHandleChange = jest.fn();

const testData = {
  id: "test-id",
  checked: false,
  value: 10,
  description: "lorem ipsum",
  percent: 12,
};

test("Checkbox component renders correctly", () => {
  render(<Checkbox data={testData} handleChange={mockHandleChange} />);

  const checkbox = screen.getByRole("checkbox");

  expect(checkbox).not.toBeChecked();

  const descriptionElement = screen.getByText("lorem ipsum");

  expect(descriptionElement).toBeInTheDocument();
});
