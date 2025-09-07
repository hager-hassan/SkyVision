import { useState } from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Forecast from "../Forecast/Forecast";
import Map from "../Map/Map";
import Navbar from "../Navbar/Navbar";
import SunAndMoonSummary from "../SunAndMoonSummary/SunAndMoonSummary";

export default function Layout() {
  const [showMap, setShowMap] = useState<boolean>(false);

  function handleShowAndHideMap(): void {
    setShowMap(!showMap);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5 mb-8 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="w-full grid gap-5 mt-7">
          <div className="grid gap-5 xl:grid-cols-2">
            <CurrentWeather handleShowAndHideMap={handleShowAndHideMap}/>
            <SunAndMoonSummary />
          </div>
          <Forecast />
        </div>

        {showMap && (
          <div
            className="fixed top-0 bottom-0 start-0 end-0 bg-black-transparent
            flex items-center justify-center"
            >
            <Map handleShowAndHideMap={handleShowAndHideMap}/>
          </div>
        )}
      </main>
    </>
  );
}
