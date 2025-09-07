import { useEffect, useState, type ReactNode } from "react";
import { WeatherContext } from "../Context/WeatherContext";
import fetchCurrentWeather from "../Services/FetchCurrentWeather";
import type CurrentWeatherInterface from "../Interface/CurrentWeatherInterface";
import type SunAndMoonPanelInterface from "../Interface/SunAndMoonPanelInterface";
import type ForecastInterface from '../Interface/ForecastInterface'
import Toast from "../Utils/Toast";
import fetchUserLocation from "../Services/FetchUserLocation";
import FetchSunAndMoonPanel from "../Services/FetchSunAndMoonPanel";
import FetchForecast from "../Services/FetchForecast";

type Props = { children: ReactNode };

export default function LocationContextProvider({ children }: Props) {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherInterface | undefined>();
  const [forecast, setForecast] = useState<ForecastInterface | undefined>();
  const [sunAndMoonPanel, setSunAndMoonPanel] = useState<SunAndMoonPanelInterface | undefined>();
  const [location, setLocation] = useState<string | undefined>();

  async function getCurrentWeather(city: string | undefined): Promise<void> {
      const data = await fetchCurrentWeather(city);
      setCurrentWeather(data);
  }

  async function getForecast(city: string | undefined): Promise<void> {
    const data = await FetchForecast(city);
    setForecast(data);
  }

  async function getSunAndMoonPanel(city: string | undefined): Promise<void> {
    const data = await FetchSunAndMoonPanel(city);
    setSunAndMoonPanel(data);
  }

  async function gitWeatherForSpecificLocation(city: string | undefined): Promise<void>{
    try {
      await Promise.all([
        getCurrentWeather(city),
        getSunAndMoonPanel(city),
        getForecast(city),
      ]);
    } catch (error) {
      if (error instanceof Error) {
        const message: string = error.message;
        Toast(message, "❌");
      }
    }
  }

  async function getCompleteWeather(city: string | undefined): Promise<void> {
    city = await fetchUserLocation();
    setLocation(city);
    gitWeatherForSpecificLocation(city);
  }

  const contextProps = {
    currentWeather,
    location,
    setLocation,
    gitWeatherForSpecificLocation,
    sunAndMoonPanel,
    forecast,
  };

  useEffect(() => {
    getCompleteWeather(location);
  }, []);

  return (
    <WeatherContext.Provider value={contextProps}>
      {children}
    </WeatherContext.Provider>
  );
}
