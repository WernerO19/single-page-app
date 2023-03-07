import React from "react";
import Footer from './components/footer';
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './views/home';
import AboutPage from './views/about';
import Products from './views/product';


function App() {
  return (
    <div className='relative pb-10 min-h-screen'>
     <Router>

     <Header />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route  path="/products" element={<ProductPage />} /> */}
        <Route  path="/products/:id" element={<Products />} />
      </Routes>

      <Footer />
      
     </Router>
    </div>
  );
}

export default App;