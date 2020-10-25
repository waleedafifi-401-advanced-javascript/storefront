import React from 'react';
import Categories from './components/categories';
import Products from './components/products';
import Header from './components/header';
import Footer from './components/footer';

import './App.css';

export default props => {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}