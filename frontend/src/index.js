import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import AdSettings from './components/adSettings/AdSettings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="adMarket" element={<AdMarket />} />
      <Route path="contracts" element={<Contracts />} /> */}
      <Route path="adSettings" element={<AdSettings />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
