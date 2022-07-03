import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './index.css';
import './variables.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import Campaigns from './components/campaigns/Campaigns';
import Contracts from './components/contracts/Contracts';
import AdMarket from './components/adMarket/AdMarket';
import UserTypes from './components/userTypes/UserTypes';
import Landing from './components/landing/Landing';
import SampleAdPage from './components/sampleAdPage/SampleAdPage';
import PlatformProfile from './components/platformProfile/PlatformProfile';
import Placements from './components/placements/Placements';
import PlatformContracts from './components/platformContracts/PlatformContracts';
import PopUp from './components/popUp/PopUp';
import App from './App';
import { useLocation } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
function HeaderView() {
  const location = useLocation();
  return location.pathname
}
root.render(
  <BrowserRouter>
    <App />
    <Header />
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/" element={<Navigate replace to="/landing" />} />
      <Route path="/new-york-times" element={<SampleAdPage />} />
      <Route path="/usertypes" element={<UserTypes />} />
      <Route path="/advertiser/profile" element={<Profile />} />
      <Route path="/advertiser/adMarket" element={<AdMarket />} />
      <Route path="/advertiser/contracts" element={<Contracts />} />
      <Route path="/advertiser/campaigns" element={<Campaigns />} />
      <Route path="/advertiser/profile" element={<Profile />} />
      <Route path="/platform/profile" element={<PlatformProfile />} />
      <Route path="/platform/platforms" element={<Placements />} />
      <Route path="/platform/contracts" element={<PlatformContracts />} />
      {/* <Route path="/platform/campaigns" element={<Offers />} /> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
