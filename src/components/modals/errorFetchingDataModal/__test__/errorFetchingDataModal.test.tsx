import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorFetchingDataModal from "../index";

it("Should render error fetching data modal", () => {
  render(
    <ErrorFetchingDataModal
      errorMessage="error message"
      closeModal={() => {}}
    />
  );
  const textElement = screen.getByText(/error message/i);
  const buttonElement = screen.getByText(/ok/i);
  expect(textElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
