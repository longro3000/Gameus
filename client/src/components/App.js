import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import '../style/css/style.css';
import '../style/vendors/css/normalize.css';
import '../style/vendors/css/grid.css';

import Header from './Header';
import LandingPage from './LandingPage';
import GamePage from './GamePage';

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
                    <Route path='/game/:id' exact component={GamePage} />
                </Switch>
              </div>
          </Router>
          </div>
      );
    }
}

