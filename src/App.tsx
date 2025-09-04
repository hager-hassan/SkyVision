import "./App.css";
import Layout from "./Components/Layout/Layout";
import ThemeContextProvider from "./Context/ThemeContextProvider";
import LocationContextProvider from "./Context/WeatherContextProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <LocationContextProvider>
          <Layout />
          <Toaster />
        </LocationContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
