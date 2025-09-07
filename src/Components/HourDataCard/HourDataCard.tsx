import type { HourlyForecast } from '../../Interface/ForecastInterface';

interface HourDataCardProps {
  hourData: HourlyForecast;
}


export default function HourDataCard({ hourData }: HourDataCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 p-3 rounded-xl border-2 border-gray-100 flex items-center justify-center transition-all duration-300">
      <div className="flex flex-nowrap gap-1">
        <div className='flex items-center shrink-0'>
          {hourData ?
          <img src={hourData.icon.replace("http://", "https://")} alt="weather icon" loading="lazy"/>
          :
          <div className="w-15 h-15 rounded-lg bg-gray-300 animate-pulse"></div>
          }
        </div>

        <div className="font-semibold flex flex-col gap-1 justify-center shrink">
            <span className="text-gray-500 dark:text-white text-xs transition-all duration-300">
              {hourData? hourData.time : '--:--'}
            </span>
            <span className="text-gray-500 dark:text-white text-xs transition-all duration-300">
              {hourData ? hourData.temperature : '--'}<sup>°</sup>C
            </span>
            <span className="text-gray-600 dark:text-white text-xs transition-all duration-300 sm:text-sm">
              {hourData ? hourData.condition : '______'}
            </span>
        </div>
      </div>
    </div>
  );
}
