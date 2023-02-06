import { MID_DAY_HOUR } from "../constants";
import { IApiData, IListElement } from "../interfaces";
import { getDayNameFromStringDate, getHourFromStringDate } from "./date";

export const getForecastDataForStore = (data: IApiData): IListElement[] => {
  if (!data || !Array.isArray(data.list) || data.list.length === 0) return [];
  const newList: IListElement[] = getFiveDaysForecast(data.list);
  return newList;
};

//get the 5 forecast near 10am
const getFiveDaysForecast = (list: IListElement[]): IListElement[] => {
  const fiveDaysForecast: IListElement[] = [];
  list.forEach((elem: IListElement) => {
    if (getHourFromStringDate(elem.dt_txt) === MID_DAY_HOUR)
      fiveDaysForecast.push(elem);
  });
  //if the current day is not the first element in the fiveDaysForecast then remove the last element and add first element of list instead
  if (
    getDayNameFromStringDate(list[0].dt_txt) !=
    getDayNameFromStringDate(fiveDaysForecast[0].dt_txt)
  ) {
    fiveDaysForecast.pop();
    fiveDaysForecast.unshift(list[0]);
  }

  return fiveDaysForecast;
};
