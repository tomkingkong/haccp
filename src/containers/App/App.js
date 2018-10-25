import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Summary from '../../containers/Summary';
import Processing from '../../containers/Processing';
import Packaging from '../../containers/Packaging';
import Inventory from '../../containers/Inventory';
import Receiving from '../../containers/Receiving';
import Ingredients from '../../containers/Ingredients';
import Dashboard from '../../containers/Dashboard';
import Profile from '../../containers/Profile';

import Login from '../../components/Login';
import Home from '../../components/Home/index.js';
import Navbar from '../../components/Navbar';

class App extends Component {

  render() {
	  return (
			<div>
        <Route path = '/' component={Navbar} />
        <Route exact path = '/' component={Home} />
        <Route exact path = '/login' component={Login} />
        <Route exact path = '/profile' component={Profile} />
        <Route exact path = '/dashboard' component={Dashboard} />
        <Route exact path = '/ingredients' component={Ingredients} />
        <Route exact path = '/receiving' component={Receiving} />
        <Route exact path = '/inventory' component={Inventory} />
        <Route exact path = '/packaging' component={Packaging} />
        <Route exact path = '/processing' component={Processing} />
        <Route exact path = '/summary' component={Summary} />
			</div>
	  );
  }
}

export default App;
