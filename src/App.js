import { Route, Routes } from 'react-router';
import ContinentsPage from './components/ContinentsPage';
import Countries from './components/Countries';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContinentsPage />} />
        <Route path="/ContinentsPage/:idName" element={<Countries />} />
      </Routes>
    </div>
  );
}

export default App;
