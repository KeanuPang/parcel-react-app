import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Redirect from="/index.html" to="/" />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
