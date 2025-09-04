import { useContext } from "react";
import moonCurve from "../../assets/images/moonCurve.png";
import sunCurve from "../../assets/images/sunCurve.png";
import { WeatherContext } from "../../Context/WeatherContext";

export default function SunAndMoonSummary() {
  const { sunAndMoonPanel } = useContext(WeatherContext)!;

  return (
    <section className="bg-white-transparent dark:bg-black-transparent border-2 border-white 
    dark:border-gray-300 rounded-xl px-3 py-5 h-full overflow-hidden transition-all duration-300">
      <header className="mb-5">
        <h2 className="text-gray-600 dark:text-gray-100 text-xs 2xl:text-sm transition-all duration-300">Sun & Moon Panel</h2>
      </header>

      <div className="xl:flex w-full h-full justify-center xl:-translate-y-5">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between xl:flex-col xl:justify-center xl:items-center xl:gap-10 xl:h-full">
          <div className="flex items-center gap-3 xl:gap-5">
            <div className="flex flex-col gap-1.5">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-100 w-20.5 xl:w-25 xl:text-base transition-all duration-300">
                ☀️ <span>Sunrise</span>
              </div>
              <div className="text-xs text-center font-semibold text-slate-800 dark:text-white transition-all duration-300">
                {sunAndMoonPanel ? (
                  <span>{sunAndMoonPanel.sunrise}</span>
                ) : (
                  <span className="animate-pulse">-- : -- __</span>
                )}
              </div>
            </div>

            <div>
              <img src={sunCurve} alt="sun curve" className="w-20 xl:w-30 2xl:w-35" />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-200 xl:text-base transition-all duration-300">
                🌥️ <span>Sunset</span>
              </div>
              <div className="text-xs text-center font-semibold text-slate-800 dark:text-white transition-all duration-300">
                {sunAndMoonPanel ? (
                  <span>{sunAndMoonPanel.sunset}</span>
                ) : (
                  <span className="animate-pulse">-- : -- __</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 xl:gap-5">
            <div className="flex flex-col gap-1.5">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-200 w-20.5 xl:w-25 xl:text-base transition-all duration-300">
                🌘 <span>Moonrise</span>
              </div>
              <div className="text-xs text-center font-semibold text-slate-800 dark:text-white transition-all duration-300">
                {sunAndMoonPanel ? (
                  <span>{sunAndMoonPanel.moonrise}</span>
                ) : (
                  <span className="animate-pulse">-- : -- __</span>
                )}
              </div>
            </div>

            <div>
              <img src={moonCurve} alt="moon curve" className="w-20 xl:w-30 2xl:w-35" />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-200 xl:text-base transition-all duration-300">
                🌑 <span>Moonset</span>
              </div>
              <div className="text-xs text-center font-semibold text-slate-800 dark:text-white transition-all duration-300">
                {sunAndMoonPanel ? (
                  <span>{sunAndMoonPanel.moonset}</span>
                ) : (
                  <span className="animate-pulse">-- : -- __</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
