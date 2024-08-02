
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/home';

import { Header } from './component/header';
import { AboutUs } from './pages/AboutUs';
import { OurProducts } from './pages/our-products';
import { ContactUs } from './pages/contact-us';
import { Footer } from './component/footer';
import Productdetail from './pages/Productdetail';
import ScrollToTop from './component/ScrollToTop/ScrollToTop';
import GoToTop from './component/GoToTop';

function App() {
  const location = useLocation();
  const noNavFooterPaths = ['/productdetail'];

  const hideHeader = noNavFooterPaths.some(path => location.pathname.startsWith(path));

  return (
    <>

      {!hideHeader && <Header />}
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/profile" element={<AboutUs />} />
        <Route path="/our-products" element={<OurProducts />} /> 
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/productdetail/:id/" element={<Productdetail />} />
      </Routes>
      <GoToTop/>
      <Footer/>
    </>
  );
}

export default App;
