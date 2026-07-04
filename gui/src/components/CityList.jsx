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
    <div className="flex h-full min-h-0 flex-col rounded-3xl border border-slate-200 bg-white shadow-xl">
      <div className="border-b border-slate-100 px-6 py-6">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
          Ciudades registradas
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Selecciona una ciudad para consultar el clima actual.
        </p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
        {loadingCities ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-slate-500">Cargando ciudades...</p>
          </div>
        ) : cities.length === 0 ? (
          <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center">
            <p className="text-sm text-slate-500">No hay ciudades registradas.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {cities.map((city) => {
              const isActive = selectedCity?.id === city.id;

              return (
                <div
                  key={city.id}
                  className={`rounded-2xl border p-4 transition ${
                    isActive
                      ? "border-slate-900 bg-slate-50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => getWeatherByCity(city)}
                      className="flex-1 text-left"
                    >
                      <p className="text-base font-bold text-slate-900">
                        {city.name}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Lat: {city.latitude} | Lon: {city.longitude}
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => deleteCity(city.id)}
                      className="shrink-0 rounded-xl bg-red-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}