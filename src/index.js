import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageBase from './components/pages/PageBase';
import Error404Page from './components/pages/Error404Page';
import AdminPage from './components/pages/AdminPage';
import SchedulerPage from './components/pages/SchedulerPage';
import OverviewPage from './components/pages/OverviewPage';
import Admin from './components/Admin/Admin';
import TempMachine from "./components/Admin/Machines/TempMachine";
import Portal from "./components/StudentPortal/Portal";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route path="" element={<App />} />
          <Route path="admin" element={<Admin />}>
            <Route path=":machine" element={<TempMachine/>} />
          </Route>
          <Route path="schedule" element={<SchedulerPage />} />
          <Route path="overview" element={<OverviewPage />} />
          <Route path="Portal" element={<Portal/>} />
        </Route>
        
        {/* Page not found route */}
        <Route path='*' element={<Error404Page />} status={404}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
