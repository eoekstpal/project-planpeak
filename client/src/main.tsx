import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogInSelectPage from './pages/login/LogInSelectPage.tsx';
import SignUp from './pages/login/SignUp.tsx';
import LogIn from './pages/login/LogIn.tsx';
import LandingPage from './pages/LandingPage.tsx';
import MeetingList from './pages/MeetingList.tsx';
import MainPage from './pages/MainPage.tsx';
import FindPassword from './pages/login/FindPassword.tsx';
import SetNewPassword from './pages/login/SetNewPassword.tsx';
import MeetingUserList from './pages/MeetingUserList.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/meetingList" element={<MeetingList />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/loginselect" element={<LogInSelectPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/findpw" element={<FindPassword />} />
          <Route path="/setpw" element={<SetNewPassword />} />
          <Route path="/meetinguserlist" element={<MeetingUserList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
