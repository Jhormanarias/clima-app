import { useCityContext } from "../context/CityContext";

export default function CityList() {
  const {
    cities,
    selectedCity,
    loadingCities,
    getWeatherByCity,
    deleteCity,
  } = useCityContext();

  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">Ciudades registradas</h2>

      {loadingCities ? (
        <p>Cargando ciudades...</p>
      ) : cities.length === 0 ? (
        <p>No hay ciudades registradas.</p>
      ) : (
        <div className="space-y-3">
          {cities.map((city) => (
            <div
              key={city.id}
              className={`flex items-center justify-between rounded-xl border p-4 ${
                selectedCity?.id === city.id ? "border-slate-900 bg-slate-50" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => getWeatherByCity(city)}
                className="flex-1 text-left"
              >
                <p className="font-semibold">{city.name}</p>
                <p className="text-sm text-slate-500">
                  Lat: {city.latitude} | Lon: {city.longitude}
                </p>
              </button>

              <button
                type="button"
                onClick={() => deleteCity(city.id)}
                className="ml-4 rounded-lg bg-red-500 px-3 py-2 text-sm text-white"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}