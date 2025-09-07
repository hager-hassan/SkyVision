import { MapContainer, TileLayer, Marker, Popup, Tooltip  } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useContext } from "react";
import { WeatherContext } from "../../Context/WeatherContext";
import { FaWindowClose } from "react-icons/fa";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

interface currentWeatherProps {
  handleShowAndHideMap: () => void;
}

export default function Map({ handleShowAndHideMap }: currentWeatherProps) {
  const { currentWeather, gitWeatherForSpecificLocation } = useContext(WeatherContext)!;

  const mapIcon = L.icon({
    iconUrl: markerIcon ,
    shadowUrl: markerShadow,
    iconSize: [26, 41],
    iconAnchor: [13, 41],
    popupAnchor: [0, -45],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
  })

  return (
    <section
      className="container h-full flex flex-col items-center justify-center gap-2"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          handleShowAndHideMap();
        }
      }}
    >
      <div 
      className="w-full flex items-center justify-end"
      onClick={() => {handleShowAndHideMap()}}
      >
        <FaWindowClose 
        className="text-white cursor-pointer text-3xl" />
      </div>
      {currentWeather && (
        <MapContainer
          center={[currentWeather.lat, currentWeather.lon]}
          zoom={12}
          scrollWheelZoom={false}
          className="w-full h-100 sm:h-115 xl:h-120 2xl:h-130"
          placeholder={
            <div className="w-full h-80 bg-gray-300 animate-pulse"></div>
          }
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[currentWeather.lat, currentWeather.lon]}
            draggable={true}
            icon={mapIcon}
            eventHandlers={{
              dragend: (event) =>{
                const {lat , lng} = event.target.getLatLng();
                const coords = `${lat},${lng}`;
                gitWeatherForSpecificLocation(coords);
              }
            }}
            >

            <Popup>
              <div className="flex flex-col justify-center w-full">
                <div>
                  <img 
                  src={currentWeather.icon.replace("http://", "https://")} 
                  alt="weather icon"
                  className="!w-10"
                  loading="lazy"/>
                </div>

                <div className="text-xs font-semibold text-gray-600 w-20 flex flex-col gap-1">
                  <p className="whitespace-nowrap !m-0">{currentWeather.condition}</p>
                  <p className="!m-0">{currentWeather.temperature}<sup>°</sup>C</p>
                </div>
              </div>
            </Popup>

            <Tooltip
            direction="center"
            offset={[0, 20]}
            > 
              Drag to check weather in another city
            </Tooltip>
          </Marker>
        </MapContainer>
      )}
    </section>
  );
}
