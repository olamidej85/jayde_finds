import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from "./components/cartContext";
import NavBar from './components/navBar';
import HomePage from './components/homePage';
import SalesPage from './components/salesPage';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';
import AboutPage from './components/aboutPage';
import ContactPage from './components/contactPage';
import Delivery from './components/delivery';
import Return from './components/return';
import Payments from './components/payments';
import ProductDetailPage from './components/productDetailPage'; 
import CartPage from "./components/cartPage";

function App() {
  return (
     <CartProvider>
      <ScrollToTop />
      <NavBar/>
      <Routes>
          <Route path="/" element={<HomePage />} /> 
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/salesPage" element={<SalesPage />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/return" element={<Return />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} /> 
           <Route path="/cartPage" element={<CartPage />} />
      </Routes>
      <Footer />
      </CartProvider>
  
  );
}

export default App;
