import React, { useEffect, useState } from "react";
import "./index.css";
import Select, { SingleValue } from "react-select";
import { fetchForecastData } from "../../data/fetch";
import FetchingDataModal from "../modals/fetchingDataModal";
import { useDispatch } from "react-redux";
import { update } from "../../redux/forecastSlice";
import { IApiData, ISelectObj } from "../../interfaces";
import { getForecastDataForStore } from "../../utils/forecast";
import { getAllCities } from "../../utils/data";
import ErrorFetchingDataModal from "../modals/errorFetchingDataModal";

export default function Header() {
  const [selectedCity, setSelectedCity] = useState<ISelectObj>({
    label: "Tunis",
    value: "Tunis",
  });
  const [selectedUnit, setSelectedUnit] = useState<ISelectObj>(tempUnits[0]);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [dataFetchingError, setDataFetchingError] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setIsFetchingData(true);
    fetchForecastData(
      selectedCity.value,
      selectedUnit.value,
      handleSuccess,
      handleFail
    );
  }, [selectedCity, selectedUnit]);

  const handleSuccess = (data: IApiData) => {
    setIsFetchingData(false);
    dispatch(
      update({
        unit: selectedUnit.value,
        data: getForecastDataForStore(data),
        city: selectedCity.value,
      })
    );
  };

  const handleFail = (error: any) => {
    setIsFetchingData(false);
    setDataFetchingError(error);
    dispatch(
      update({
        unit: selectedUnit.value,
        data: [],
        city: selectedCity.value,
      })
    );
  };

  const changeCapital = (data: SingleValue<ISelectObj>) => {
    setSelectedCity(data as ISelectObj);
  };
  const changeUnit = (data: SingleValue<ISelectObj>) => {
    setSelectedUnit(data as ISelectObj);
  };
  return (
    <div className="header">
      <Select
        options={getAllCities()}
        className="capitalSelect"
        defaultValue={selectedCity}
        onChange={changeCapital}
      />
      <Select
        options={tempUnits}
        className="tempUnitSelect"
        defaultValue={selectedUnit}
        onChange={changeUnit}
      />
      {isFetchingData && <FetchingDataModal />}
      {dataFetchingError && (
        <ErrorFetchingDataModal
          errorMessage="Error fetching data"
          closeModal={() => {
            setDataFetchingError("");
          }}
        />
      )}
    </div>
  );
}

// const capitals: ISelectObj[] = [
//   { value: "Tunis", label: "Tunis" },
//   { value: "Algeria", label: "Algeria" },
//   { value: "Paris", label: "Paris" },
// ];

const tempUnits: ISelectObj[] = [
  { value: "metric", label: "Celsius" },
  { value: "imperial", label: "Fahrenheit" },
];
