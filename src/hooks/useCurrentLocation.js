import { useState, useEffect } from "react";

const useCurrentLocation = () => {
  const [location, setLocation] = useState();
  const [error, setError] = useState();

  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;

    setLocation({
      latitude: latitude.toFixed(2),
      longitude: longitude.toFixed(2),
    });
  };

  const handleError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { location, error };
};

export default useCurrentLocation;
