export default interface CurrentWeatherInterface {
    location: string;
    time: string;
    icon: string;
    temperature: number;
    feelsLike: number;
    condition: string;
    lat: number;
    lon: number;
    windSpeed: number;
    windDir: string;
    humidity: number;
    pressure: number;
    visibility: number;
    uv: number;
  }