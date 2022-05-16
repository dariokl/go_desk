import { useState, useEffect, useCallback } from "react";
import useCurrentLocation from "./useCurrentLocation";

const useCurrentWeather = () => {
  const { location, error: LocationError } = useCurrentLocation();

  const [data, setData] = useState();
  const [error, setError] = useState(LocationError);
  const [loading, setLoading] = useState(true);

  const URL = `https://api.open-meteo.com/v1/forecast?latitude=${location?.latitude}&longitude=${location?.longitude}&hourly=temperature_2m&current_weather=true`;

  useEffect(() => {
    if (!location) {
      setLoading(false);
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
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [location, URL]);

  const fourHoursForecast = useCallback(() => {
    const now = new Date();

    return [
      {
        time: now.getHours() + ":00",
        temperature: data?.hourly?.temperature_2m[now.getHours()],
      },
      {
        time: now.getHours() + 1 + ":00",
        temperature: data?.hourly?.temperature_2m[now.getHours() + 1],
      },
      {
        time: now.getHours() + 2 + ":00",
        temperature: data?.hourly?.temperature_2m[now.getHours() + 2],
      },
      {
        time: now.getHours() + 3 + ":00",
        temperature: data?.hourly?.temperature_2m[now.getHours() + 3],
      },
    ];
  }, [data]);

  return {
    currentWeather: {
      current: data?.current_weather,
      min: Math.min.apply(null, data?.hourly?.temperature_2m),
      max: Math.max.apply(null, data?.hourly?.temperature_2m),
      hourlyForeCast: fourHoursForecast(),
    },
    loading: loading,
    error: error || LocationError,
  };
};

export default useCurrentWeather;
