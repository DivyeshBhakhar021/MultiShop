import React from 'react';
import Home from './user/container/Home/Home';
import Header from './user/component/Header/Header';
import Footer from './user/component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Shop from './user/container/Shop/Shop';
import Shop_detail from './user/container/Shop_detail/Shop_detail';
import Shopping_card from './user/container/Page/Shopping_card/Shopping_card';
import Checkout from './user/container/Page/Checkout/Checkout';
import Contact from './user/container/Page/Contact/Contact';

function App() {
  return (
    <>

      <Header />
      <Routes >
        <Route exect path='/' element={<Home />} />
        <Route exect path='/shop' element={<Shop />} />
        <Route exect path='/shopdetail' element={<Shop_detail />} />
        <Route exect path='/shopping_card' element={<Shopping_card />} />
        <Route exect path='/checkout' element={<Checkout />} />
        <Route exect path='/contact' element={<Contact />} />
      </Routes >
      <Footer />
      
      </>

      );
}

      export default App;
