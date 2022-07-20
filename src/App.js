import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ServiceList from './components/servicesList/ServiceList'
import Specialists from './components/specialists/Specialists';
import Appointment from './components/appointment/Appointment';
import EntranceCleaningHistory from './components/entranceCleaningHistory/EntranceCleaningHistory';
import Home from './components/home/Home';

function App() {
  return (
    <div className="PageDad">
      <div className="page">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServiceList />} />
              <Route path="/specialists" element={<Specialists />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/entrancecleaninghistory" element={<EntranceCleaningHistory />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
