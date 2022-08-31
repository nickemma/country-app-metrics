import { Route, Routes } from 'react-router';
import ContinentsPage from './components/ContinentsPage';
import './App.css';
import Countries from './components/Countries';
// import CountriesDetails from './components/CountriesDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContinentsPage />} />
        <Route path="/:name" element={<Countries />} />
        {/* <Route path="/:name/:id" element={<CountriesDetails />} /> */}
      </Routes>
    </div>
  );
}

export default App;
