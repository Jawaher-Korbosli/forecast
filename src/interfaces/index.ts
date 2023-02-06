//openweathermap data type
export interface IApiData {
  cod: string;
  message: number | string;
  cnt: number;
  list: IListElement[];
  city: ICity;
}

export interface IListElement {
  dt: EpochTimeStamp;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface ICity {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface IStore {
  unit: string;
  data: IListElement[];
  city: string;
}

export interface ISelectObj {
  value: string;
  label: string;
}
