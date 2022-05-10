import { useState, useEffect } from "react";
import useCurrentLocation from "./useCurrentLocation";

const useCurrentWeather = () => {
  const { location, error: LocationError } = useCurrentLocation();

  const [data, setData] = useState();
  const [error, setError] = useState(LocationError);

  const URL = `https://api.open-meteo.com/v1/forecast?latitude=${location?.latitude}&longitude=${location?.longitude}&hourly=temperature_2m&current_weather=true`;

  useEffect(() => {
    if (!location) {
      return;
    }
    async function fetchData() {
      try {
        const response = await fetch(URL);
        const json = await response.json();

        if (!response.ok) {
          let err = new Error(response.status);
          err.message = json.reason;
          throw err;
        }

        setData(json);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [location, URL]);

  return {
    currentWeather: {
      current: data?.current_weather,
      min: Math.min.apply(null, data?.hourly?.temperature_2m),
      max: Math.max.apply(null, data?.hourly?.temperature_2m),
    },
    error: error || LocationError,
  };
};

export default useCurrentWeather;
