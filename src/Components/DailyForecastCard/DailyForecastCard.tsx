import { useRef } from "react";
import type { HourlyForecast } from '../../Interface/ForecastInterface';
import HourDataCard from "../HourDataCard/HourDataCard";

interface DailyForecastCardProps {
  data: HourlyForecast[] | undefined;
  day: string;
}

export default function DailyForecastCard({ data, day }: DailyForecastCardProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startY = 0;
  let scrollTop = 0;

  const onMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    startY = e.pageY - (scrollRef.current?.offsetTop || 0);
    scrollTop = scrollRef.current?.scrollTop || 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const y = e.pageY - (scrollRef.current?.offsetTop || 0);
    const walk = (y - startY)
    if (scrollRef.current) scrollRef.current.scrollTop = scrollTop - walk;
  };

  const onMouseUpOrLeave = () => {
    isDown = false;
  };

  return (
    <section className="bg-white-transparent dark:bg-black-transparent border-2 border-white 
    dark:border-gray-300 px-3 py-5 rounded-xl cursor-grab transition-all duration-300">
      <header className="mb-3">
        <h4 className="text-gray-600 dark:text-gray-100 text-xs 2xl:text-sm transition-all duration-300">{day} Forecast</h4>
      </header>

      <div
        ref={scrollRef}
        className="py-3 pe-4 grid gap-5 grid-cols-[repeat(auto-fit,minmax(140px,1fr))] overflow-y-scroll h-85 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] xl:grid-cols-3"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUpOrLeave}
        onMouseLeave={onMouseUpOrLeave}
      >
        {data?.map((hour: HourlyForecast, index) => (
          <HourDataCard key={index} hourData={hour} />
        ))}
      </div>
    </section>
  );
}
