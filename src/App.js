import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import TravelOut from './views/Travel/TravelOut';
import TravelIn from './views/Travel/TravelIn';
import TechIn from './views/Tech/TechIn';
import TechOut from './views/Tech/TechOut';
import FinanceOut from './views/Finance/FinanceOut';
import FinanceIn from './views/Finance/FinanceIn';
import FitnessOut from './views/Fitness/FitnessOut';
import FitnessIn from './views/Fitness/FitnessIn';
import AboutUs from './views/AboutUs';
import ContactUs from './views/ContactUs';
import Login from './views/Auth/Login';
import Community from './views/Community';
import Register from './views/Auth/Register';
import Reset from './views/Auth/Reset';
import Dashboard from './views/Dashboard';
import Profile from './views/Auth/Profile';
import NotFound from "./views/NotFound";

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
          <AppRoute exact path="/TravelOut" component={TravelOut} layout={LayoutDefault} />
            <AppRoute exact path="/TravelIn" component={TravelIn} layout={LayoutDefault} />
          {/*  <AppRoute exact path="/TechOut" component={TechOut} layout={LayoutDefault} />*/}
          {/*<AppRoute exact path="/TechIn" component={TechIn} layout={LayoutDefault} />*/}
          {/*<AppRoute exact path="/FinanceOut" component={FinanceOut} layout={LayoutDefault} />*/}
            {/*<AppRoute exact path="/FinanceIn" component={FinanceIn} layout={LayoutDefault} />*/}
          {/*<AppRoute exact path="/FitnessOut" component={FitnessOut} layout={LayoutDefault} />*/}
            {/*<AppRoute exact path="/FitnessIn" component={FitnessIn} layout={LayoutDefault} />*/}
          <AppRoute exact path="/AboutHer" component={AboutUs} layout={LayoutDefault} />
          <AppRoute exact path="/ContactHer" component={ContactUs} layout={LayoutDefault} />
          <AppRoute exact path="/Community" component={Community} layout={LayoutDefault} />
          <AppRoute exact path="/Login" component={Login} layout={LayoutDefault} />
            <AppRoute exact path="/Register" component={Register} layout={LayoutDefault} />
            <AppRoute exact path="/Reset" component={Reset} layout={LayoutDefault} />
            <AppRoute exact path="/Dashboard" component={Dashboard} layout={LayoutDefault} />
            <AppRoute exact path="/Profile" component={Profile} layout={LayoutDefault} />
            <AppRoute component={NotFound} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;