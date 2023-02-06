import axios from "axios";
import { API_URL } from "../constants";

export const fetchForecastData = (
  city: string,
  unit: string,
  handleSuccess: (data: any) => void, //callback function
  handleFail: (error: any) => void
) => {
  axios
    .get(`${API_URL}&q=${city}&units=${unit}`)
    .then(({ data }) => {
      handleSuccess(data);
    })
    .catch((error) => {
      handleFail(error);
    });
};
