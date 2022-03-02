import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404Page from './components/pages/Error404Page';
import AdminPage from './components/pages/AdminPage';
import SchedulerPage from './components/pages/SchedulerPage';
import OverviewPage from './components/pages/OverviewPage';


ReactDOM.render(
  <React.StrictMode>
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/schedule" element={<SchedulerPage />} />
          <Route path="/overview" element={<OverviewPage />} />
          
          {/* Page not found route */}
          <Route path='*' element={<Error404Page />} />
        </Routes>
      </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
