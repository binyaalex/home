import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ServiceList from './components/servicesList/ServiceList'
import Doctors from './components/doctors/Doctors';
import Appointment from './components/appointment/Appointment';

function App() {
  return (
    <div className="PageDad">
      <div className="page">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<ServiceList />} />
              <Route path="/specialists" element={<Doctors />} />
              <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;