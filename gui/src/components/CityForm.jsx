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
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">Registrar ciudad</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name[0]}</p>}
        </div>

        <div>
          <input
            type="number"
            step="any"
            name="latitude"
            placeholder="Latitud"
            value={form.latitude}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
          {errors.latitude && <p className="mt-1 text-sm text-red-500">{errors.latitude[0]}</p>}
        </div>

        <div>
          <input
            type="number"
            step="any"
            name="longitude"
            placeholder="Longitud"
            value={form.longitude}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
          {errors.longitude && <p className="mt-1 text-sm text-red-500">{errors.longitude[0]}</p>}
        </div>

        <div>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
          {errors.image && <p className="mt-1 text-sm text-red-500">{errors.image[0]}</p>}
        </div>

        <button
          type="submit"
          disabled={savingCity}
          className="w-full rounded-lg bg-slate-900 px-4 py-3 text-white"
        >
          {savingCity ? "Guardando..." : "Guardar ciudad"}
        </button>
      </form>
    </div>
  );
}