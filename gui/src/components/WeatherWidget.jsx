import { useCityContext } from "../context/CityContext";

export default function WeatherWidget() {
  const { selectedCity, weatherData, loadingWeather } = useCityContext();

  if (loadingWeather) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow">
        <p>Consultando clima...</p>
      </div>
    );
  }

  if (!selectedCity || !weatherData) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-bold">Clima actual</h2>
        <p className="text-slate-500">Selecciona una ciudad para ver el clima.</p>
      </div>
    );
  }

  const { city, weather } = weatherData;

  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold">{city.name}</h2>

      {weather.icon_url && (
        <img
          src={weather.icon_url}
          alt={weather.description}
          className="mb-4 h-20 w-20"
        />
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        <p><strong>Temperatura:</strong> {weather.temperature} °C</p>
        <p><strong>Sensación térmica:</strong> {weather.feels_like} °C</p>
        <p><strong>Mínima:</strong> {weather.temp_min} °C</p>
        <p><strong>Máxima:</strong> {weather.temp_max} °C</p>
        <p><strong>Humedad:</strong> {weather.humidity}%</p>
        <p><strong>Presión:</strong> {weather.pressure} hPa</p>
        <p><strong>Viento:</strong> {weather.wind_speed} m/s</p>
        <p><strong>Nubosidad:</strong> {weather.cloudiness}%</p>
        <p><strong>Lluvia 1h:</strong> {weather.rain_1h} mm</p>
        <p><strong>Descripción:</strong> {weather.description}</p>
      </div>
    </div>
  );
}