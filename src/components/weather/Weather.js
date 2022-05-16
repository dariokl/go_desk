import React from "react";

import Spinner from "../base/spinner/Spinner";
import CurrentWeather from "./components/CurrentWeather";
import Houry from "./components/Hourly";
import useCurrentWeather from "../../hooks/useCurrentWeather";

import { weatherContainerCN, innerWeatherCN } from "./styles";

const Weather = () => {
  const { currentWeather, error, loading } = useCurrentWeather();

  return (
    <div className={weatherContainerCN}>
      <div className={innerWeatherCN}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {error ? (
              <p className="text-md">{error}.</p>
            ) : (
              <>
                <CurrentWeather current={currentWeather?.current} />
                <Houry forecast={currentWeather?.hourlyForeCast} />{" "}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
