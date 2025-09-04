import ToastLightTheme from '../Utils/Toast';

export default function fetchUserLocation(): Promise<string> {
  return new Promise((resolve) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          const lat = location.coords.latitude;
          const lon = location.coords.longitude;
          resolve(`${lat},${lon}`);
        },
        (error) => {
          if (error.code === 1) {
            ToastLightTheme("Location access was denied", "❌");
          } else if (error.code === 2) {
            ToastLightTheme("Location information is unavailable", "⚠️");
          } else if (error.code === 3) {
            ToastLightTheme("Request to get location timed out", "⏳");
          } else {
            ToastLightTheme("An unexpected error occurred while getting location", "📍");
          }
          resolve("cairo");
        },
        {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 600000,
        }
      );
    } else {
      resolve("cairo");
    }
  });
}
