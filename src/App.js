import React, { useState } from 'react';
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import { ReactComponent as Squares } from "./components/svg/squares.svg";
import { ReactComponent as Corner } from "./components/svg/corner.svg";
import "./index.css";

import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  // Use location and history hooks to compare current and previous pages, to determine CSS transition type
  const location = useLocation();
  const history = useHistory();
  const [prevPageHistory, setPrevPageHistory] = useState(history);

  // Use index as a proxy to calculate direction
  const routes = ["/about", "/", "/portfolio"];
  const currentPageIndex = routes.indexOf(location.pathname);
  const prevPageIndex = routes.indexOf(prevPageHistory);

  // Slide forward or backwards depending on index, or no transition for same page
  let animationClassNames;
  let transition = true;
  if (currentPageIndex > prevPageIndex) {
    animationClassNames = "slide-forward"
  } else if (currentPageIndex < prevPageIndex) {
    animationClassNames = "slide-backward"
  } else {
    transition = false;
    animationClassNames = "no-change"
  }

  return (
    <div className="page-container">
      <div className="corner">
        <Corner />
      </div>
      <Navbar setPrevPageHistory={setPrevPageHistory}/>
      <div className="content-wrap">
        <TransitionGroup
          className="slide-div my-5"
          childFactory={child => React.cloneElement(child, {
            classNames: animationClassNames
          })}>
          <CSSTransition key={location.key} classNames={animationClassNames} enter={transition} exit={transition} timeout={500}>
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route path="*" component={Home} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <div className="squares">
          <Squares />
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default App;
