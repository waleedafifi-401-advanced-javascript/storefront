import React from 'react';
import Categories from './components/categories';
import Products from './components/products';
import Header from './components/header';
import Footer from './components/footer';
import SimpleCart from './components/cart';

import './App.css';

export default props => {
  return (
    <React.Fragment>
      <Header />
      <Categories />
      <SimpleCart />
      <Products />
      <Footer />
    </React.Fragment>
  );
}