import { MdLocationSearching } from "react-icons/md";
import { useContext, useRef } from "react";
import { WeatherContext } from "../../Context/WeatherContext";

export default function SearchInput() {
  const { setLocation, getCurrentWeather } = useContext(WeatherContext)!;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const debounceRef = useRef<number | null>(null);

  async function handelGetWeather(event: React.ChangeEvent<HTMLInputElement>): Promise<void> {
    const value = event.target.value.trim();

    if (debounceRef.current){
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = window.setTimeout(() => {
      setLocation(value);
      getCurrentWeather(value);
    }, 800);
  }

  return (
    <div className="relative">
      <label className="absolute start-3 top-1/2 -translate-y-1/2">
        <MdLocationSearching className="text-gray-600 dark:text-slate-800 transition-all duration-300" />
      </label>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search Location"
        className="text-gray-600 dark:text-slate-800 w-full rounded-lg outline-0 border-2 border-white bg-white-transparent dark:bg-white pe-3 ps-7.5 py-2
        placeholder:text-gray-500 dark:placeholder:text-slate-700 sm:bg-transparent sm:text-sm sm:placeholder:text-sm sm:border-gray-400 dark:sm:border-white  sm:py-1.5
        lg:w-xs 2xl:w-sm transition-all duration-300"
        onChange={(event) => {
          if(event.target.value.trim().length >= 1){
            handelGetWeather(event)
          }
        }}
      />
    </div>
  );
}
