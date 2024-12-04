import React, { Component } from 'react';
import './App.css';
import Header from "./components/navigate_bar";
import Main from './components/sections/main/main';
import About from './components/sections/about/about';
import OurAdvantages from './components/sections/advantages/our_advantages';
import Product from './components/sections/product/product';
import Order from './components/sections/order/order';
import Reviews from './components/sections/reviews/reviews';
import Contacts from './components/sections/contacts/contacts';
import Footer from './components/sections/footer/footer';
import Galery from './components/sections/galery/Galery';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <Main />
          <About />
          <OurAdvantages />
          <Product />
          <Galery/>
          <Order />
          <Reviews />
          <Contacts />
          <Footer />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
