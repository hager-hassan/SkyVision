import { createContext } from "react"
import type CurrentWeatherInterface from "../Interface/CurrentWeatherInterface"
import type SunAndMoonPanelInterface from '../Interface/SunAndMoonPanelInterface'
import type ForecastInterface from '../Interface/ForecastInterface'

type ContextProps = {
  currentWeather: CurrentWeatherInterface | undefined;
  location: string | undefined;
  setLocation: (location: string) => void;
  gitWeatherForSpecificLocation: (city: string | undefined) => void;
  sunAndMoonPanel: SunAndMoonPanelInterface | undefined;
  forecast: ForecastInterface | undefined
};

export const WeatherContext = createContext<ContextProps | null>(null);
