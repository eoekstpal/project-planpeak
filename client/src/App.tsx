// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <MainPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
