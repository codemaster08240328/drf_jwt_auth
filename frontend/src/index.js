import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import {Route, Switch, Router} from 'react-router'
import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import configureStore from './store'
const history = createHistory()
const store = configureStore(history)
ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/login/" component={Login} />
        <PrivateRoute path="/" component={App}/>
      </Switch>
    </Router>
  </Provider>
  
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

