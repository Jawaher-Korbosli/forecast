import React from "react";
import { render, screen } from "@testing-library/react";
import FetchingDataModal from "../index";

it("Should render fetching data modal", () => {
  render(<FetchingDataModal />);
  const textElement = screen.getByText(/Loading Data/i);
  expect(textElement).toBeInTheDocument();
});
