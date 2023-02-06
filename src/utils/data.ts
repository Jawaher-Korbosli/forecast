import { TEMPERATURE_UNIT_NAMES } from "../constants";
import { IListElement, ISelectObj } from "../interfaces";
import { getDayNameFromStringDate } from "./date";

export const getTemperatureData = (data: IListElement[]): number[] => {
  if (!Array.isArray(data) || data.length === 0) return [];
  return data.map((elem) => {
    return Math.ceil(elem.main.temp);
  });
};
export const getDayNames = (data: IListElement[]): string[] => {
  if (!Array.isArray(data) || data.length === 0) return [];
  return data.map((elem) => {
    return getDayNameFromStringDate(elem.dt_txt);
  });
};

export const getTemperatureSymbolFromName = (unitName: string) => {
  return TEMPERATURE_UNIT_NAMES[unitName] || "";
};

export const getAllCities = (): ISelectObj[] => {
  const cities: {
    name: string;
    lon: number;
    lat: number;
    country: string;
  }[] = require("../data/cities_list.json");
  if (!cities || !Array.isArray(cities) || cities.length === 0) return [];
  return cities.map((city) => {
    return { label: city.name, value: city.name };
  });
};
