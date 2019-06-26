import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Cart from './pages/CartPage';
import Contact from './pages/ContactPage';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProductPage';
import Default from './pages/DefaultPage';

class App extends Component {
  render() {
    return (
      <>
        {/*Navbar, Sidebar, Cart, Fotter */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route component={Default} />
        </Switch>
      </>
    )
  }
}

export default App;

