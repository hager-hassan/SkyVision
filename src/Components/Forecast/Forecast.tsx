import { useContext } from "react";
import DailyForecastCard from "../DailyForecastCard/DailyForecastCard";
import { WeatherContext } from "../../Context/WeatherContext";

export default function Forecast() {
    const {forecast} = useContext(WeatherContext)!;

  return (
    <section className="mt-7 grid gap-5 lg:grid-cols-2">
        <DailyForecastCard data={forecast?.tomorrow} day="Tomorrow"/>
        <DailyForecastCard data={forecast?.afterTomorrow} day="The Day After Tomorrow"/>
    </section>
  )
}
