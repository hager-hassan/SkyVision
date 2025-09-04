import { useContext, useEffect, useState, type ReactNode } from "react";
import { WeatherContext } from "../Context/WeatherContext";
import fetchCurrentWeather from "../Services/FetchCurrentWeather";
import type CurrentWeatherInterface from "../Interface/CurrentWeatherInterface";
import type SunAndMoonPanelInterface from "../Interface/SunAndMoonPanelInterface";
import type ForecastInterface from '../Interface/ForecastInterface'
import ToastLightTheme from "../Utils/ToastLightTheme";
import ToastDarkTheme from "../Utils/ToastDarkTheme";
import fetchUserLocation from "../Services/FetchUserLocation";
import FetchSunAndMoonPanel from "../Services/FetchSunAndMoonPanel";
import FetchForecast from "../Services/FetchForecast";
import { ThemeContext } from "./ThemeContext";

type Props = { children: ReactNode };

export default function LocationContextProvider({ children }: Props) {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherInterface | undefined>();
  const [forecast, setForecast] = useState<ForecastInterface | undefined>();
  const [sunAndMoonPanel, setSunAndMoonPanel] = useState<SunAndMoonPanelInterface | undefined>();
  const [location, setLocation] = useState<string | undefined>();
  const {theme} = useContext(ThemeContext)!;

  async function getCurrentWeather(city: string | undefined): Promise<void> {
    try {
      const data = await fetchCurrentWeather(city);
      setCurrentWeather(data);
    } catch (error) {
      if (error instanceof Error) {
        const message: string = error.message;
        if(theme === 'dark'){
          ToastDarkTheme(message, "❌");
        } else{
          ToastLightTheme(message, "❌");
        }
      }
    }
  }

  async function getForecast(city: string | undefined): Promise<void> {
    const data = await FetchForecast(city);
    setForecast(data);
  }

  async function getSunAndMoonPanel(city: string | undefined): Promise<void> {
    const data = await FetchSunAndMoonPanel(city);
    setSunAndMoonPanel(data);
  }

  async function getCompleteWeather(): Promise<void> {
    try {
      const result: string = await fetchUserLocation();
      setLocation(result);

      await Promise.all([
        getCurrentWeather(result),
        getSunAndMoonPanel(result),
        getForecast(result),
      ]);
    } catch (error) {
      if (error instanceof Error) {
        const message: string = error.message;
        if(theme === 'dark'){
          ToastDarkTheme(message, "❌");
        } else{
          ToastLightTheme(message, "❌");
        }
      }
    }
  }

  const contextProps = {
    currentWeather,
    location,
    setLocation,
    getCurrentWeather,
    sunAndMoonPanel,
    forecast,
  };

  useEffect(() => {
    getCompleteWeather();
  }, []);

  return (
    <WeatherContext.Provider value={contextProps}>
      {children}
    </WeatherContext.Provider>
  );
}
