import type { HourlyForecast } from '../../Interface/ForecastInterface';

interface HourDataCardProps {
  hourData: HourlyForecast;
}


export default function HourDataCard({ hourData }: HourDataCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 p-3 rounded-xl border-2 border-gray-100 flex items-center justify-center transition-all duration-300">
      <div className="flex flex-wrap gap-1">
        <div>
          <img src={hourData.icon} alt="weather icon" className="text-center" />
        </div>

        <div className="font-semibold flex flex-col gap-1 justify-center">
            <span className="text-gray-500 dark:text-white text-xs transition-all duration-300">{hourData.time}</span>
            <span className="text-gray-500 dark:text-white text-xs transition-all duration-300">{hourData.temperature}<sup>°</sup>C</span>
            <span className="text-gray-600 dark:text-white text-sm transition-all duration-300">{hourData.condition}</span>
        </div>
      </div>
    </div>
  );
}
