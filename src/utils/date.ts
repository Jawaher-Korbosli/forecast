export const getDayNameFromStringDate = (dateString: string) => {
  const date = new Date(dateString);
  var dayName = days[date.getDay()];
  return dayName;
};

export const getHourFromStringDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.getHours();
};

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
