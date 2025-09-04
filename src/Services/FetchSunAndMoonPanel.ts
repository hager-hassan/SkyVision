import axios from "axios";
import type SunAndMoonPanelInterface from '../Interface/SunAndMoonPanelInterface'

const APIKey: string = "2ab58103c8f24b71a21214830252204";

export default async function FetchSunAndMoonPanel(city: string | undefined): Promise<SunAndMoonPanelInterface> {
    try {
        const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${city}&days=3`);

        const panel: SunAndMoonPanelInterface = {
            sunrise: data.forecast.forecastday[0].astro.sunrise,
            sunset: data.forecast.forecastday[0].astro.sunset,
            moonrise: data.forecast.forecastday[0].astro.moonrise,
            moonset: data.forecast.forecastday[0].astro.moonset,
        };

        return panel;
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