import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';

import reportWebVitals from './reportWebVitals';
import Admin from './components/Admin/Admin';
import ThreeD from "./components/Admin/Machines/3d_printer"
import CNC from "./components/Admin/Machines/CNC"
import VBS from "./components/Admin/Machines/VBS"
import PVBS from "./components/Admin/Machines/PVBS"
import HBS from "./components/Admin/Machines/HBS"
import CMS from "./components/Admin/Machines/CMS"
import DP from "./components/Admin/Machines/DP"
import GBW from "./components/Admin/Machines/GBW"
import BS from "./components/Admin/Machines/BS"
import DS from "./components/Admin/Machines/DS"
import IS from "./components/Admin/Machines/IS"
import OSS from "./components/Admin/Machines/OSS"
import SS from "./components/Admin/Machines/SS"
import TS from "./components/Admin/Machines/TS"
import WL from "./components/Admin/Machines/WL"
import PL from "./components/Admin/Machines/PL"
import PJ from "./components/Admin/Machines/PJ"
import CNCR from "./components/Admin/Machines/CNCR"
import MCNC from "./components/Admin/Machines/MCNC"





import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
        <Routes>
        <Route path="/" element={<App />} />
        
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/3DPrinter" element={<ThreeD/>} />
        <Route path="/admin/CNC" element={<CNC/>} />
        <Route path="/admin/VBS" element={<VBS/>} />
        <Route path="/admin/PVBS" element={<PVBS/>} />
        <Route path="/admin/HBS" element={<HBS/>} />
        <Route path="/admin/CMS" element={<CMS/>} />
        <Route path="/admin/DP" element={<DP/>} />
        <Route path="/admin/GBW" element={<GBW/>} />
        <Route path="/admin/BS" element={<BS/>} />
        <Route path="/admin/DS" element={<DS/>} />
        <Route path="/admin/IS" element={<IS/>} />
        <Route path="/admin/OSS" element={<OSS/>} />
        <Route path="/admin/SS" element={<SS/>} />
        <Route path="/admin/TS" element={<TS/>} />
        <Route path="/admin/WL" element={<WL/>} />
        <Route path="/admin/PL" element={<PL/>} />
        <Route path="/admin/PJ" element={<PJ/>} />
        <Route path="/admin/CNCR" element={<CNCR/>} />
        <Route path="/admin/MCNC" element={<MCNC/>} />



        </Routes>
      </Router>      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
