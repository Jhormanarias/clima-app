import CityForm from "../components/CityForm";
import CityList from "../components/CityList";
import WeatherWidget from "../components/WeatherWidget";

export default function CitiesPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <CityForm />
          <CityList />
        </div>
        <WeatherWidget />
      </div>
    </div>
  );
}