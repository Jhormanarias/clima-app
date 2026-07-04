import { useState } from "react";
import { useCityContext } from "../context/CityContext";

const initialState = {
  name: "",
  latitude: "",
  longitude: "",
  image: null,
};

export default function CityForm() {
  const { createCity, savingCity, errors } = useCityContext();
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createCity(form);
      setForm(initialState);
      e.target.reset();
    } catch (error) {
      console.error("Error creando ciudad:", error);
    }
  };

  return (
    <div className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white shadow-xl">
      <div className="border-b border-slate-100 px-6 py-8 sm:px-10">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900">
          Registrar ciudad
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500 sm:text-base">
          Agrega una ciudad con su ubicación geográfica e imagen principal en una
          interfaz simple, clara y visual.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 px-6 py-8 sm:px-10 sm:py-10">
        <div>
          <label className="mb-3 block text-center text-base font-semibold text-slate-700">
            Nombre de la ciudad
          </label>
          <input
            type="text"
            name="name"
            placeholder="Ej. Medellín"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-xl text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-300 focus:bg-white focus:ring-4 focus:ring-slate-200"
          />
          {errors?.name && (
            <p className="mt-2 text-sm text-red-500">{errors.name[0]}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-3 block text-center text-base font-semibold text-slate-700">
              Latitud
            </label>
            <input
              type="number"
              step="any"
              name="latitude"
              placeholder="Ej. 6.2442"
              value={form.latitude}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-xl text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-300 focus:bg-white focus:ring-4 focus:ring-slate-200"
            />
            {errors?.latitude && (
              <p className="mt-2 text-sm text-red-500">{errors.latitude[0]}</p>
            )}
          </div>

          <div>
            <label className="mb-3 block text-center text-base font-semibold text-slate-700">
              Longitud
            </label>
            <input
              type="number"
              step="any"
              name="longitude"
              placeholder="Ej. -75.5812"
              value={form.longitude}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-xl text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-slate-300 focus:bg-white focus:ring-4 focus:ring-slate-200"
            />
            {errors?.longitude && (
              <p className="mt-2 text-sm text-red-500">{errors.longitude[0]}</p>
            )}
          </div>
        </div>

        <div>
          <label className="mb-3 block text-center text-base font-semibold text-slate-700">
            Imagen
          </label>

          <label className="block cursor-pointer rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center transition hover:border-slate-400 hover:bg-slate-100">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-slate-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16V8m-4 4h8"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16.5V7a2 2 0 012-2h8l6 6v5.5a2 2 0 01-2 2H6a2 2 0 01-2-2z"
                />
                <circle cx="9" cy="10" r="1.2" />
              </svg>
            </div>

            <p className="mt-5 text-lg font-semibold text-slate-700">
              Haz clic para subir una imagen
            </p>
            <p className="mt-1 text-sm text-slate-400">PNG, JPG o WEBP</p>
          </label>

          {errors?.image && (
            <p className="mt-2 text-sm text-red-500">{errors.image[0]}</p>
          )}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={savingCity}
            className="w-full rounded-2xl bg-slate-950 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[260px]"
          >
            {savingCity ? "Guardando..." : "Guardar ciudad"}
          </button>
        </div>
      </form>
    </div>
  );
}