export interface HourlyForecast {
    icon: string;
    time: string;
    temperature: number;
    condition: string;
}

export default interface ForecastInterface {
    tomorrow: HourlyForecast[];
    afterTomorrow: HourlyForecast[];
}