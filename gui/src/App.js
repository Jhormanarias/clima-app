import logo from './logo.svg';
import './App.css';
import { CityProvider } from './context/CityContext';
import CitiesPage from './pages/CitiesPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CityProvider>
          <CitiesPage />
        </CityProvider>
      </header>
    </div>
  );
}

export default App;
