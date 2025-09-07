import axios from "axios";
import type CurrentWeatherInterface from '../Interface/CurrentWeatherInterface'

const APIKey: string = "2ab58103c8f24b71a21214830252204";

export default async function fetchCurrentWeather(city: string | undefined): Promise<CurrentWeatherInterface> {

    try {
        const { data } = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}`);

        const location: string = `${data.location.name}, ${data.location.country}`;
        const time: string = data.current.last_updated.split(' ')[1];
        const weather: CurrentWeatherInterface = {
            location: location,
            time: time,
            icon: data.current.condition.icon,
            temperature: data.current.temp_c,
            feelsLike: data.current.feelslike_c,
            condition: data.current.condition.text,
            lat: data.location.lat,
            lon: data.location.lon,
            windSpeed: data.current.wind_kph,
            windDir: data.current.wind_dir,
            humidity: data.current.humidity,
            pressure: data.current.pressure_mb,
            visibility: data.current.vis_km,
            uv: data.current.uv
        };

        return weather;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.error?.message || error.message);
        } else if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("Something went wrong!");
        }
    }
}