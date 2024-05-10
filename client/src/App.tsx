// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import SideNavCont from './layouts/SideNavCont';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="content">
          <h1>사이드바 없이 가득찬 레이아웃</h1>
        </div>
        <SideNavCont></SideNavCont>
      </main>
      <Footer />
    </>
  );
}

export default App;
