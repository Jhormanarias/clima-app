import { useCityContext } from "../context/CityContext";

export default function WeatherWidget() {
  const { selectedCity, weatherData, loadingWeather } = useCityContext();

  if (loadingWeather) {
    return (
      <div className="flex h-full min-h-0 flex-col rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-xl">
        <div className="border-b border-slate-100 px-6 py-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
            Clima actual
          </h2>
        </div>

        <div className="flex flex-1 items-center justify-center px-6 py-8">
          <p className="text-sm text-slate-600">Consultando clima...</p>
        </div>
      </div>
    );
  }

  if (!selectedCity || !weatherData) {
    return (
      <div className="flex h-full min-h-0 flex-col rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-xl">
        <div className="border-b border-slate-100 px-6 py-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
            Clima actual
          </h2>
        </div>

        <div className="flex flex-1 items-center justify-center px-6 py-8">
          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center">
            <p className="text-slate-600">
              Selecciona una ciudad para ver el clima.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const { city, weather } = weatherData;

  return (
    <div className="flex h-full min-h-0 flex-col rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-xl">
      <div className="border-b border-slate-100 px-6 py-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          {city.name}
        </h2>
        <p className="mt-2 text-sm text-slate-600">{weather.description}</p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6">
        <div className="mb-6 flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
          {weather.icon_url && (
            <img
              src={weather.icon_url}
              alt={weather.description}
              className="h-20 w-20 shrink-0"
            />
          )}

          <div>
            <p className="text-sm text-slate-600">Temperatura actual</p>
            <p className="mt-1 text-4xl font-extrabold tracking-tight text-slate-900">
              {weather.temperature} °C
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-900">
            <p className="text-sm text-slate-600">Sensación térmica</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">
              {weather.feels_like} °C
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-900">
            <p className="text-sm text-slate-600">Humedad</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">
              {weather.humidity}%
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-900">
            <p className="text-sm text-slate-600">Temperatura mínima</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">
              {weather.temp_min} °C
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-900">
            <p className="text-sm text-slate-600">Temperatura máxima</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">
              {weather.temp_max} °C
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-900">
            <p className="text-sm text-slate-600">Presión</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">
              {weather.pressure} hPa
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-900">
            <p className="text-sm text-slate-600">Viento</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">
              {weather.wind_speed} m/s
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-900">
            <p className="text-sm text-slate-600">Nubosidad</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">
              {weather.cloudiness}%
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-900">
            <p className="text-sm text-slate-600">Lluvia 1h</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">
              {weather.rain_1h ?? 0} mm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}