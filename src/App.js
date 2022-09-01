import { Route, Routes } from 'react-router';
import ContinentsPage from './components/ContinentsPage';
import './App.css';
import Countries from './components/Countries';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ContinentsPage />} />
        <Route path="/:name" element={<Countries />} />
        <Route path="/:name/:id" element={<CountryDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
