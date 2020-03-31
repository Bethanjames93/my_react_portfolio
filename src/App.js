import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/about";
import Projects from "./components/pages/projects";
import Contact from "./components/pages/contact";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path={["/", "/about"]}>
            <About />
          </Route>
          <Route exact path="/Projects">
            <Projects />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
            <Footer />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
