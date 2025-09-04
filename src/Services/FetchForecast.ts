import axios from "axios";
import type ForecastInterface from '../Interface/ForecastInterface'
import type {HourlyForecast} from '../Interface/ForecastInterface'

const APIKey: string = "2ab58103c8f24b71a21214830252204";
interface HourData {
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
}


export default async function FetchForecast(city: string | undefined): Promise<ForecastInterface>{
    try {
        const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${city}&days=3`); 

        const tomorrow: HourlyForecast[] = data.forecast.forecastday[1].hour.map((hour: HourData, index: number) =>{
            const timeStr = index.toString().padStart(2, "0");
            const time = `${timeStr}:00`;
            return({
                icon: hour.condition.icon,
                time: time,
                temperature: hour.temp_c,
                condition: hour.condition.text
            });
        });

        const afterTomorrow: HourlyForecast[] = data.forecast.forecastday[2].hour.map((hour: HourData, index: number) =>{
            const timeStr = index.toString().padStart(2, "0");
            const time = `${timeStr}:00`
            return({
                icon: hour.condition.icon,
                time: time,
                temperature: hour.temp_c,
                condition: hour.condition.text
            });
        });

        const forecast: ForecastInterface = {
            tomorrow: tomorrow,
            afterTomorrow: afterTomorrow,
        }

        return forecast;
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
