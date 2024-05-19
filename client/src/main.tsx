import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogInSelectPage from './pages/login/LogInSelectPage.tsx';
import SignUp from './pages/login/SignUp.tsx';
import LogIn from './pages/login/LogIn.tsx';
import LandingPage from './pages/LandingPage.tsx';
import MainPage from './pages/MainPage.tsx';
import FindPassword from './pages/login/FindPassword.tsx';
import SetNewPassword from './pages/login/SetNewPassword.tsx';
import MeetingUserList from './pages/admin/MeetingUserList.tsx';
import AdminMeetingList from './pages/admin/AdminMeetingList.tsx';
import MessageSetting from './pages/admin/MessageSetting.tsx';
import AllMeetingList from './pages/AllMeetingList.tsx';
import UserMeetingList from './pages/user/UserMeetingList.tsx';
import CreateMeet from './pages/CreateMeet.tsx';
import MeetDetail from './pages/MeetDetail.tsx';
import MeetList from './pages/MeetList.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/loginselect" element={<LogInSelectPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/findpw" element={<FindPassword />} />
          <Route path="/setpw" element={<SetNewPassword />} />
          <Route path="/allmeetinglist" element={<AllMeetingList />} />
          <Route path="/admin/meetinglist" element={<AdminMeetingList />} />
          <Route path="/admin/meetingname/meetinguserlist" element={<MeetingUserList />} />
          <Route path="/admin/meetingname/messagesetting" element={<MessageSetting />} />
          <Route path="/user/meetinglist" element={<UserMeetingList />} />
          <Route path="/user/meetinglist/create-meet" element={<CreateMeet />} />
          <Route path="/user/meetinglist/meet-detail" element={<MeetDetail />} />
          <Route path="/user/meetinglist/meet-list" element={<MeetList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
