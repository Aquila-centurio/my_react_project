import React, { Component } from 'react';
import './App.css';
import Header from "./components/navigate_bar";
import Main from './components/sections/main';
import About from './components/sections/about';
import OurAdvantages from './components/sections/our_advantages';
import Product from './components/sections/product';
import Order from './components/sections/order';
import Reviews from './components/sections/reviews';
import Contacts from './components/sections/contacts';
import Footer from './components/sections/footer';



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
