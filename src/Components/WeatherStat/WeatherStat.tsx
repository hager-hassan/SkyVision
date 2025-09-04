type WeatherStatProps = {
  icon: string,
  label: string,
  value: number | string,
  unit?: string,
};

export default function WeatherStat({ icon, label, value, unit }: WeatherStatProps) {

  return (
    <div className="bg-white-transparent dark:bg-black-transparent border-2 border-white dark:border-gray-300 rounded-lg p-3 transition-all duration-300">
      <div>
        <h3 className="text-center text-sm text-gray-600 dark:text-gray-100 transition-all duration-300">
          <span>{icon}</span> {label}
        </h3>
      </div>

      <div className="text-slate-800 dark:text-white font-semibold text-sm text-center mt-1 transition-all duration-300">
        {value !== '--' ?
        <span className="inline-block me-1">{value}</span>
        :
        <span className="inline-block me-1 animate-pulse">{value}</span>
        }
        {unit && <span>{unit}</span>}
      </div>
    </div>
  );
}
