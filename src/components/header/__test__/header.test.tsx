import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../index";
import { renderWithProviders } from "../../../utils/test-utils";

// jest.mock(
//   "react-select",
//   () =>
//     ({
//       options,
//       value,
//       onChange,
//     }: {
//       options: ISelectObj[];
//       value: string;
//       onChange: (option: ISelectObj | undefined) => void;
//     }) => {
//       function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
//         const option = options.find(
//           (option: ISelectObj) => option.value === event.currentTarget.value
//         );
//         onChange(option);
//       }
//       return (
//         <select data-testid="select" value={value} onChange={handleChange}>
//           {options.map(({ label, value }: any) => (
//             <option key={value} value={value} data-testid={value}>
//               {label}
//             </option>
//           ))}
//         </select>
//       );
//     }
// );

it("Should render header component with Tunis as default city and Celsius as default temperature unit", () => {
  renderWithProviders(<Header />);
  const selectCity = screen.getByText(/Tunis/i);
  const selectUnit = screen.getByText(/Celsius/i);
  expect(selectCity).toBeInTheDocument();
  expect(selectUnit).toBeInTheDocument();
});
