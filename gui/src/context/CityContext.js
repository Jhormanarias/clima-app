import { createContext, useContext, useEffect, useState } from "react";
import axiosFile from "../api/axios";

const CityContext = createContext();

export function CityProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const [loadingCities, setLoadingCities] = useState(false);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [savingCity, setSavingCity] = useState(false);
  const [errors, setErrors] = useState({});

  const getCities = async () => {
    try {
      setLoadingCities(true);
      const response = await axiosFile.get("/cities");
      setCities(response.data.data ?? []);
    } catch (error) {
      console.error("Error obteniendo ciudades:", error);
    } finally {
      setLoadingCities(false);
    }
  };

  const createCity = async (formValues) => {
    try {
      setSavingCity(true);
      setErrors({});

      const formData = new FormData();
      formData.append("name", formValues.name);
      formData.append("latitude", formValues.latitude);
      formData.append("longitude", formValues.longitude);
      formData.append("image", formValues.image);

      const response = await axiosFile.post("/cities", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      await getCities();
      return response.data;
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors ?? {});
      }
      throw error;
    } finally {
      setSavingCity(false);
    }
  };

  const deleteCity = async (id) => {
    try {
      await axiosFile.delete(`/cities/${id}`);
      if (selectedCity?.id === id) {
        setSelectedCity(null);
        setWeatherData(null);
      }
      await getCities();
    } catch (error) {
      console.error("Error eliminando ciudad:", error);
    }
  };

  const getWeatherByCity = async (city) => {
    try {
      setLoadingWeather(true);
      setSelectedCity(city);

      const response = await axiosFile.get(`/cities/${city.id}/weather`);
      setWeatherData(response.data.data);
    } catch (error) {
      console.error("Error obteniendo clima:", error);
      setWeatherData(null);
    } finally {
      setLoadingWeather(false);
    }
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <CityContext.Provider
      value={{
        cities,
        selectedCity,
        weatherData,
        loadingCities,
        loadingWeather,
        savingCity,
        errors,
        getCities,
        createCity,
        deleteCity,
        getWeatherByCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

export function useCityContext() {
  return useContext(CityContext);
}