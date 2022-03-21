import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import main from './Pages/Main/Main';
import residential_address from './Pages/Addresses/Residential/Residential';
import property_address from './Pages/Addresses/Property/Property';
import employment_address from './Pages/Addresses/Employment/Employment';
import resume from './Pages/Resume/Resume';

import store from './Store';

import './index.css';

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/main" component={main} />
        <Route exact path="/1_residential_address" component={residential_address} />
        <Route exact path="/2_property_address" component={property_address} />
        <Route exact path="/3_employment_address" component={employment_address} />
        <Route exact path="/4_resume" component={resume} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
