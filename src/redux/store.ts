import { configureStore } from "@reduxjs/toolkit";
import forecastReducer from "./forecastSlice";

// export default configureStore({
//   reducer: {
//     forecast: forecastReducer,
//   },
// });

export const setupStore = (preloadedState?: any) => {
  return configureStore({
    reducer: {
      forecast: forecastReducer,
    },
    preloadedState,
  });
};
