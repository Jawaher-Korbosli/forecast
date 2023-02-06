import React from "react";
import { IListElement } from "../../interfaces";
import { getTemperatureSymbolFromName } from "../../utils/data";
import { getDayNameFromStringDate } from "../../utils/date";
import "./index.css";

interface ICardProps {
  data: IListElement;
  unit: string;
  city: string;
}
export default function Card({ data, unit, city }: ICardProps) {
  return (
    <div className="cardComp" role="cardComp">
      <div className="topDetails">
        <h1 className="degree">
          {Math.ceil(data.main.temp)}
          {/* */}
          <span className="unitSymbol">
            {getTemperatureSymbolFromName(unit)}
          </span>
        </h1>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="icon"
          className="weatherIcon"
        />
      </div>
      <p className="date">{getDayNameFromStringDate(data.dt_txt)}</p>
      <div className="bottomDetails">
        <p className="city">{city}</p>
        <p className="description">{data.weather[0].description}</p>
      </div>
    </div>
  );
}
