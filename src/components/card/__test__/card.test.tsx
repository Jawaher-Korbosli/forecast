import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../index";
import { IListElement } from "../../../interfaces";

it("Should render card component", () => {
  render(<Card city="Tunis" unit="metric" data={data} />);
  const degreeElement = screen.getByText(/9/i);
  const dateElement = screen.getByText(/Sunday/i);
  const cityElement = screen.getByText(/Tunis/i);
  const descriptionElement = screen.getByText(/broken clouds/i);
  expect(degreeElement).toBeInTheDocument();
  expect(degreeElement.textContent).toBe("9°C");
  expect(dateElement).toBeInTheDocument();
  expect(cityElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});

it("Should render correct unit symbol", () => {
  render(<Card city="Tunis" unit="imperial" data={data} />);
  const degreeElement = screen.getByText(/9/i);
  expect(degreeElement.textContent).toBe("9°F");
});

const data: IListElement = {
  dt: 1675620000,
  main: {
    temp: 8.29,
    feels_like: 5.66,
    temp_min: 7.09,
    temp_max: 8.29,
    pressure: 1040,
    sea_level: 1040,
    grnd_level: 1036,
    humidity: 62,
    temp_kf: 1.2,
  },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04n",
    },
  ],
  clouds: {
    all: 61,
  },
  wind: {
    speed: 4.52,
    deg: 5,
    gust: 10.11,
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "n",
  },
  dt_txt: "2023-02-05 18:00:00",
};
