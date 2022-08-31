import { Route, Routes } from 'react-router';
import ContinentsPage from './components/ContinentsPage';
import './App.css';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContinentsPage />} />
        <Route path="/:name" element={<Countries />} />
        <Route path="/:name/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
