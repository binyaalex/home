import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pregnancy from './components/servicesList/Pregnancy'
import Doctors from './components/doctors/Doctors';

function App() {
  return (
    <div className="PageDad">
      <div className="page">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Pregnancy />} />
              <Route path="/specialists" element={<Doctors />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
