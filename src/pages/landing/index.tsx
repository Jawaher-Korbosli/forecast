import React from "react";
import { useSelector } from "react-redux";
import CardsCarousel from "../../components/cardsCarousel";
import Chart from "../../components/chart";
import Header from "../../components/header";
import { IStore } from "../../interfaces";

export default function Landing() {
  return (
    <div>
      <Header />
      <CardsCarousel />
      <Chart />
    </div>
  );
}
