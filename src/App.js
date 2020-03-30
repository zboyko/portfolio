import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
// React Router Import
import { Switch, Route } from 'react-router-dom';
// Import Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import NotFoundPage from './components/pages/NotFoundPage';
// import misc

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/Projects" component={Projects} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;