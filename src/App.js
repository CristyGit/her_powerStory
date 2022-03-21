import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Journey from './views/Journey';
import Coding from './views/Coding';
import Money from './views/Money';
import Fitness from './views/Fitness';
import AboutUs from './views/AboutUs';
import ContactUs from './views/ContactUs';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/Journey" component={Journey} layout={LayoutDefault} />
          <AppRoute exact path="/Coding" component={Coding} layout={LayoutDefault} />
          <AppRoute exact path="/Money" component={Money} layout={LayoutDefault} />
          <AppRoute exact path="/Fitness" component={Fitness} layout={LayoutDefault} />
          <AppRoute exact path="/AboutHer" component={AboutUs} layout={LayoutDefault} />
          <AppRoute exact path="/ContactHer" component={ContactUs} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;