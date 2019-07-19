import "@babel/polyfill";
import "core-js/modules/es6.promise";
import "core-js/modules/es7.array.includes";
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components';
import store from './store';
import history from './history';

require('../styles/bootstrap.min.css');
require('../styles/index.css');

ReactDOM.render(
  <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Provider store={store}>
               <Route exact path={'/'} component={App} />
          </Provider>
        </Switch>
      </Router>
  </BrowserRouter>,
 document.getElementById('root')
);
