
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./views/Portfolio";
import ContactInformation from "./views/ContactInformation";

import Home from "./views/Home";
import Resume from "./views/Resume";
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contactinformation">
            <ContactInformation />
          </Route>
          <Route path="/">
            <Home city='Toronto'/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;