import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { gsap } from "gsap";
import "./styles/App.scss";
import Header from "./components/Header"
import Navigation from './components/Navigation'
// import caseStudies from './pages/caseStudies'

import About from "./pages/About";
import Home from "./pages/Home";
// import ProjectData from './data/ProjectsData'
import Contact from "./pages/contact"

const routes = [
  { path: "/", name: "Home", Component: Home },
  // { path: "/project", name: "caseStudies", Component: caseStudies },
  { path: "/about", name: "about", Component: About },
  
  { path: "/contact", name: "contact", Component: Contact }
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <>
      <Header dimensions={dimensions} />
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path} >
            <Component dimensions={dimensions}  />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;