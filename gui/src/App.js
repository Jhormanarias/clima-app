import logo from './logo.svg';
import { CityProvider } from './context/CityContext';
import CitiesPage from './pages/CitiesPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CityProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/" element={<CitiesPage />} />
            </Routes>
          </BrowserRouter>
        </CityProvider>
      </header>
    </div>
  );
}

export default App;
