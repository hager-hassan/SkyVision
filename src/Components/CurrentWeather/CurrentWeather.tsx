import { useContext } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { WeatherContext } from "../../Context/WeatherContext";
import WeatherStat from "../WeatherStat/WeatherStat";

export default function CurrentWeather() {
  const context = useContext(WeatherContext);

  const currentWeather = context?.currentWeather;

  return (
    <section>
      <div className="px-3 py-5 bg-white-transparent dark:bg-black-transparent border-2 border-white 
      dark:border-gray-300 rounded-xl transition-all duration-300">
        <div className="flex items-center justify-between">
          <header>
            <span className="text-gray-600 dark:text-gray-100 text-xs 2xl:text-sm">Current Weather</span>
            <h2 className="flex items-center gap-1 text-slate-800 dark:text-white font-semibold text-sm 2xl:text-base">
              <HiOutlineLocationMarker />
              {currentWeather ? (
                <span>{currentWeather.location}</span>
              ) : (
                <span className="animate-pulse">loading..</span>
              )}
            </h2>
          </header>

          <div className="text-slate-800 dark:text-white font-semibold text-sm 2xl:text-base">
            <span className="inline-block pe-1">Updated at</span>
            {currentWeather ? (
              <span>{currentWeather.time}</span>
            ) : (
              <span className="animate-pulse">--:--</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 sm:gap-4">
          <div>
            {currentWeather ? (
              <img
                src={currentWeather.icon.replace("http://", "https://")}
                alt="weather icon"
                loading="lazy"
                className="w-15 sm:w-17"
              />
            ) : (
              <div className="w-15 h-15 rounded-lg bg-gray-300 animate-pulse sm:w-17 sm:h-17"></div>
            )}
          </div>

          <div className="text-slate-800 dark:text-white text-lg pe-2 sm:pe-0 2xl:text-xl transition-all duration-300">
            {currentWeather ?
            <span>{currentWeather.temperature}<sup>°</sup>C</span>
            :
            <span className="animate-pulse">--<sup>°</sup>C</span>
            }
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-gray-600 dark:text-gray-100 text-xs 2xl:text-sm transition-all duration-300">
              {currentWeather ?
              <span>{currentWeather.condition}</span>
              :
              <span className="animate-pulse">loading..</span>
              }
            </div>

            <div className="text-gray-700 dark:text-gray-200 text-xs 2xl:text-sm transition-all duration-300">
              {currentWeather ?
              <span>Feels Like {currentWeather.feelsLike}<sup>°</sup>C</span>
              :
              <span className="animate-pulse">Feels Like --<sup>°</sup>C</span>
              }
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="underline text-xs text-gray-700 dark:text-white cursor-pointer transition-all duration-300
          hover:text-gray-500 dark:hover:text-gray-300 2xl:text-sm">
            View on map
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-5 grid-cols-[repeat(auto-fit,minmax(145px,1fr))] sm:grid-cols-3">
        <WeatherStat icon="💨"  label="Wind Speed" value={currentWeather ? currentWeather.windSpeed : '--'} unit="km/h"/>
        <WeatherStat icon="🧭" label="Wind Direction" value={currentWeather ? currentWeather.windDir  : '--'}/>
        <WeatherStat icon="💧" label="Humidity" value={currentWeather ? currentWeather.humidity  : '--'} unit="%"/>
        <WeatherStat icon="🌡️" label="Pressure" value={currentWeather ? currentWeather.pressure  : '--'} unit="hPa"/>
        <WeatherStat icon="🌤️" label="Visibility" value={currentWeather ? currentWeather.visibility  : '--'} unit="km"/>
        <WeatherStat icon="☀️" label="UV" value={currentWeather ? currentWeather.uv : '--'}/>
      </div>
    </section>
  );
}
