import React from "react";

import useCurrentWeather from "../../hooks/useCurrentWeather";
import { weatherCodes } from "../../utils/contants";

const Weather = () => {
  const { currentWeather, error } = useCurrentWeather();

  return (
    <div class="flex  flex-col items-center justify-center pr-1 font-sans">
      <div class="w-full rounded-lg bg-gray-400 bg-opacity-50 p-4  shadow backdrop-blur-lg backdrop-filter">
        <div class="mb-2 p-2">
          <div class="text-center">
            <div class="leading-tight text-white">
              <span class="fa fa-map-marker"></span>
            </div>
          </div>
        </div>
        <div class="mb-1 p-1">
          <div class="flex">
            <div class="flex-1 text-center text-7xl text-white">
              <span class="fa fa-cloud"></span>
              {currentWeather.current?.temperature} °
            </div>
          </div>
        </div>
        <div class="mb-2 p-2">
          <div class="text-center">
            <div class="text-lg leading-tight text-white">
              Min {currentWeather.min} ° / Max {currentWeather.max} °
            </div>
            <div class="mt-1 text-lg font-bold leading-tight text-white">
              {weatherCodes[currentWeather.current?.weathercode]}
            </div>
          </div>
        </div>
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
