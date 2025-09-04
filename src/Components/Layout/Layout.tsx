import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Forecast from "../Forecast/Forecast";
import Navbar from "../Navbar/Navbar";
import SunAndMoonSummary from "../SunAndMoonSummary/SunAndMoonSummary";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="container mt-5 mb-8 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="w-full grid gap-5 mt-7">
            <div className="grid gap-5 xl:grid-cols-2">
              <CurrentWeather />
              <SunAndMoonSummary />
            </div>
            <Forecast/>
        </div>
      </main>
    </>
  );
}
