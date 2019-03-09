import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import history from '../history'

export default class App extends React.Component {
    render() {
        return (
          <div>
          <Router history={history}>
              <div>
                <Header />
                <Switch>
                  
                </Switch>
              </div>
          </Router>
          </div>
      );
    }
}

