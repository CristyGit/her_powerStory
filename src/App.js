import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
// import { Security, SecureRoute } from "@okta/okta-react";
// import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";

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
import Login from './views/Login';
import Community from './views/Community';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

// const CLIENT_ID = process.env.CLIENT_ID;
// const CALLBACK_PATH = process.env.CALLBACK_PATH;
// const ISSUER = process.env.ISSUER;
// const HOST = process.env.HOST;
// const REDIRECT_URI = `http://${HOST}${CALLBACK_PATH}`;
// const SCOPES = process.env.SCOPES;

// if (!SCOPES || !CLIENT_ID || !CALLBACK_PATH || !ISSUER || !HOST) {
//   throw new Error("All environmental variables must be set");
// }

// const config = {
//   issuer: ISSUER,
//   clientId: CLIENT_ID,
//   redirectUri: REDIRECT_URI,
//   scopes: SCOPES.split(/\s+/),
// };

// const oktaAuth = new OktaAuth(config);

const App = () => {
  // const history = useHistory();
  // const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
  //   history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  // };

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
          <AppRoute exact path="/Community" component={Community} layout={LayoutDefault} />
          <AppRoute exact path="/Login" component={Login} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;