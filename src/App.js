import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path={["/", "/about"]}></Route>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}


export default App;
