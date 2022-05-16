import React, { useState, useEffect } from "react";

import Icon from "../../base/Icon";
import { weatherCodes } from "../../../utils/contants";

const CurrentWeather = ({ current }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const infoTuple = weatherCodes[current?.weathercode];

    if (infoTuple) {
      setInfo({ weather: infoTuple[0], icon: infoTuple[1] });
    }
  }, [current?.weathercode]);

  return (
    <>
      <div class="mb-2 p-2">
        <div class="text-center">
          <div class="leading-tight text-gray-50">
            <Icon name={info.icon} size="48" />
          </div>
        </div>
      </div>
      <div class="mb-1 p-1">
        <div class="flex">
          <div class="flex-1 text-center text-7xl text-gray-50">
            <span class="fa fa-cloud"></span>
            {current?.temperature} °
          </div>
        </div>
      </div>
      <div class="mb-2 p-2">
        <div class="text-center">
          <div class="text-lg leading-tight text-gray-50">
            Min {current?.min} ° / Max {current?.max} °
          </div>
          <div class="mt-1 text-lg font-bold leading-tight text-gray-50">
            {info.weather}
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
