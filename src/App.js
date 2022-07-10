import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pregnancy from './components/servicesList/Pregnancy'

function App() {
  return (
    <div className="PageDad">
      <div className="page">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Pregnancy />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
