export const API_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.REACT_APP_API_KEY}`;
export const MID_DAY_HOUR = 12;
export const TEMPERATURE_UNIT_NAMES: { [key: string]: string } = {
  metric: "°C",
  imperial: "°F",
};
