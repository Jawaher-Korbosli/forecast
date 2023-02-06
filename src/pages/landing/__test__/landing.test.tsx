import React from "react";
import { getByText, render, screen, waitFor } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import Landing from "..";
import { act } from "react-dom/test-utils";
import { renderWithProviders } from "../../../utils/test-utils";
import { setupServer } from "msw/node";
import { handlers } from "../../../utils/test-utils/handlers";
import { preloadedState } from "../../../utils/test-utils/preloadedState";

jest.mock("react-chartjs-2", () => ({
  Bar: () => null, // add any additional chart types here
}));
jest.setTimeout(40000);

it("Should render landing page", async () => {
  await act(() =>
    waitFor(() => {
      renderWithProviders(<Landing />, { preloadedState });
    })
  );
  const loadingElement = screen.getByText(/Loading Data/i);
  expect(loadingElement).toBeInTheDocument();
});

// it("Should render no data found", async () => {
//   const server = setupServer(...handlers);
//   server.listen();
//   await act(() =>
//     waitFor(() => {
//       renderWithProviders(<Landing />);
//     })
//   );
//   await wait(3000);
//   const loadingElement = screen.getByText(/no data found/i);
//   expect(loadingElement).toBeInTheDocument();
//   server.resetHandlers();
//   server.close();
// });
