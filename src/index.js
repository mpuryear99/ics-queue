import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import Admin from './components/Admin';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
