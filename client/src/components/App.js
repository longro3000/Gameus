import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import LandingPage from './LandingPage';
import history from '../history'

export default class App extends React.Component {
    render() {
        return (
          <div>
          <Router history={history}>
              <div>
                <Header />
                <Switch>
                    <Route path='/' exact component={LandingPage} />
                </Switch>
              </div>
          </Router>
          </div>
      );
    }
}

