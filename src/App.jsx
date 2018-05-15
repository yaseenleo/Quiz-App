import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/pages/home';
import About from './components/pages/about';
import NavBar from './components/NavBar/customNavBar';
import Contact from './components/pages/contact';

export default class App extends Component {
  render() {
    return (
      
      
      <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>

    </Router>

          );
  }
}


