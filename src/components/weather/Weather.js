import React from "react";

import CurrentWeather from "./components/CurrentWeather";
import useCurrentWeather from "../../hooks/useCurrentWeather";

import { weatherContainerCN, innerWeatherCN } from "./styles";

const Weather = () => {
  const { currentWeather, error } = useCurrentWeather();

  return (
    <div className={weatherContainerCN}>
      <div className={innerWeatherCN}>
        <CurrentWeather current={currentWeather?.current} />
        <div class="mb-1 text-xs text-white">Today</div>
        <div class="mb-2 flex rounded-xl bg-indigo-200 bg-opacity-20 p-2">
          <div class="flex-1 text-center text-white ">
            <div class="text-xs">8:30 am</div>
            <div>
              <i class="bi bi-cloud-fill"></i>
            </div>
            <div class="text-xs">27°</div>
          </div>
          <div class="flex-1 text-center text-white">
            <div class="text-xs">11:30 am</div>
            <div>
              <i class="bi bi-sun"></i>
            </div>
            <div class="text-xs">29°</div>
          </div>
          <div class="flex-1 text-center text-white">
            <div class="text-xs">3:30 pm</div>
            <div>
              <i class="bi bi-cloud-fill"></i>
            </div>
            <div class="text-xs">27°</div>
          </div>
          <div class="flex-1 text-center text-white">
            <div class="text-xs">7:30 pm</div>
            <div>
              <i class="bi bi-lightning-fill"></i>
            </div>
            <div class="text-xs">20°</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
