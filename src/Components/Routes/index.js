import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Content from '../Content';
import Content1 from '../Content1';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Content} path="/home" />
          <Route component={Content1} path="/section2" />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
