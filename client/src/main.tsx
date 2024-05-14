import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogInSelectPage from './pages/login/LogInSelectPage.tsx';
import SignUp from './pages/login/SignUp.tsx';
import LogIn from './pages/login/LogIn.tsx';
import LandingPage from './pages/LandingPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/loginselect' element={<LogInSelectPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
