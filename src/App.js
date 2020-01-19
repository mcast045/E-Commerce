import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './LandingPage/landingPage'
import Item from './ItemPage/Component/itempage'
import Header from './Header/header'
import Footer from './Footer/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/item/:id' component={Item} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
