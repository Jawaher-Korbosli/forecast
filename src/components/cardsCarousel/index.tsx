import React from "react";
import "./index.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Card from "../card";
import { useSelector } from "react-redux";
import { IStore } from "../../interfaces";

export default function CardsCarousel() {
  const forecast = useSelector((state: any) => state.forecast.value as IStore);
  const renderCards = () => {
    const { data, unit } = forecast;
    if (!Array.isArray(data)) return <></>;
    return data.map((elem) => {
      return (
        <Card data={elem} unit={unit} key={elem.dt} city={forecast.city} />
      );
    });
  };
  return <Carousel responsive={responsive}>{renderCards()}</Carousel>;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1150 },
    items: 3,
  },
  desktop2: {
    breakpoint: { max: 1149, min: 950 },
    items: 2.5,
  },
  tablet: {
    breakpoint: { max: 949, min: 826 },
    items: 2.2,
  },
  mobile: {
    breakpoint: { max: 825, min: 750 },
    items: 2,
  },
  mobile2: {
    breakpoint: { max: 749, min: 600 },
    items: 1.6,
  },
  mobile3: {
    breakpoint: { max: 599, min: 490 },
    items: 1.3,
    gap: 20,
  },
  mobile4: {
    breakpoint: { max: 489, min: 0 },
    items: 1,
    gap: 20,
  },
};
