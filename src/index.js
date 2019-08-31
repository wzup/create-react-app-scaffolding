import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { connect, Provider } from 'react-redux';
import store from './store';
import Master from './containers/Master';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import ErrorBoundary from './containers/ErrorBoundary';
import Home from './containers/Home';

ReactDOM.render(
  <Provider store={store}>
    <Master>
      <ErrorBoundary>
        <Router>
          <Header title='De Champs' />
          <Switch>
            <Route exact path='/' component={ Home } />
          </Switch>
        </Router>
      </ErrorBoundary>
    </Master>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
