import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useSelector } from "react-redux";
import { IStore } from "../../interfaces";
import {
  getDayNames,
  getTemperatureData,
  getTemperatureSymbolFromName,
} from "../../utils/data";

export default function Chart() {
  const forecast = useSelector((state: any) => state.forecast.value as IStore);
  const data = {
    labels: getDayNames(forecast.data),
    datasets: [
      {
        data: getTemperatureData(forecast.data),
        borderWidth: 1,
        backgroundColor: [
          "#45507d",
          "#45507d",
          "#45507d",
          "#45507d",
          "#45507d",
        ],
        borderColor: ["#45507d", "#45507d", "#45507d", "#45507d", "#45507d"],
        borderRadius: [4, 4, 4, 4, 4],
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: "#919191",
        },
        grid: {
          color: "#4f4f4f73",
        },
      },
      y: {
        ticks: {
          color: "#919191",
        },
        grid: {
          color: "#4f4f4f73",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `${forecast.city}'s Weather Forecast`,
        padding: {
          top: 20,
          bottom: 50,
        },
        color: "white",
        font: {
          size: 17,
          weight: "500",
        },
      },
      tooltip: {
        callbacks: {
          title: (context: any): string => {
            return context[0].label;
          },
          label: (context: any): string => {
            return `${context.raw} ${getTemperatureSymbolFromName(
              forecast.unit
            )}`;
          },
        },
      },
    },
  };
  return <Bar options={options} data={data} />;
}
