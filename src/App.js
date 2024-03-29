import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './store';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Cart from './pages/CartPage';
import Contact from './pages/ContactPage';
import Products from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';
import NotFound from './pages/NotFoundPage';

import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Navbar />
            <SideBar />
            <SideCart />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/cart" component={Cart} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/products" component={Products} />
              <Route path="/products/:id" component={SingleProductPage} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </Router>
        </Provider>
      </>
    )
  }
}

export default App;

