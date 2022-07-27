import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ServiceList from './components/servicesList/ServiceList'
import Specialists from './components/specialists/Specialists';
import Appointment from './components/appointment/Appointment';
import EntranceCleaningHistory from './components/entranceCleaningHistory/EntranceCleaningHistory';
import Home from './components/home/Home';
import MarketPlace from './components/marketPlace/MarketPlace';
import Contact from './components/contact/Contact';

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
              <Route path="/marketplace" element={<MarketPlace />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
