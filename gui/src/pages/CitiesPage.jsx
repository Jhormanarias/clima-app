import CityForm from "../components/CityForm";
import CityList from "../components/CityList";
import WeatherWidget from "../components/WeatherWidget";

export default function CitiesPage() {
  return (
    <main className="h-dvh overflow-hidden bg-slate-100 p-4 md:p-6">
      <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="min-h-0">
          <CityForm />
        </div>

        <div className="grid min-h-0 grid-rows-2 gap-4">
          <div className="min-h-0">
            <CityList />
          </div>

          <div className="min-h-0">
            <WeatherWidget />
          </div>
        </div>
      </div>
    </main>
  );
}