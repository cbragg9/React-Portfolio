import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

class App extends React.Component {


  render() {
    return (
      <Router>
        <div className="page-container">
          <Navbar />
          <div className="content-wrap">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }

}

export default App;
