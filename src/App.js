import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import SimpleCart from './components/cart';
import Home from './components/pages/home';
import Checkout from './components/pages/checkout';
import ProductDetail from './components/pages/ProductDetail';

import './App.css';

export default props => {
  return (
    <BrowserRouter>
      <Header />
      <SimpleCart />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products/:id' component={ProductDetail} />
        <Route exact path='/checkout' component={Checkout} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}