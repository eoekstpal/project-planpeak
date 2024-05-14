// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import MainPage from './pages/MainPage';
import { Outlet, Route, Routes } from 'react-router-dom';
import MeetingList from './pages/MeetingList';

function App() {
  return (
    <>
      <Header></Header>
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
