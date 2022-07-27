import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ServiceList from './components/servicesList/ServiceList'
import Specialists from './components/specialists/Specialists';
import Appointment from './components/appointment/Appointment';
import EntranceCleaningHistory from './components/entranceCleaningHistory/EntranceCleaningHistory';
import Home from './components/home/Home';
import MarketPlace from './components/marketPlace/MarketPlace';
import MyProfile from './components/myProfile/MyProfile';
import SpecialistAccount from './components/specialistAccount/SpecialistAccount';
import PaidServices from './components/paidServices/PaidServices';
import MyAdresses from './components/myAddresses/MyAdresses';

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
              <Route path="/myprofile" element={<MyProfile />} />
              <Route path="/specialistAccount" element= {<SpecialistAccount />} />
              <Route path="/paidservices" element= {<PaidServices />} />
              <Route path="/myadresses" element= {<MyAdresses />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
