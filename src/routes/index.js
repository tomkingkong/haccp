import React, { Component } from 'react';
import { Route } from 'react-router';

import Summary from '../containers/Summary';
import Processing from '../containers/Processing';
import Packaging from '../containers/Packaging';
import Inventory from '../containers/Inventory';
import Receiving from '../containers/Receiving';
import Ingredients from '../containers/Ingredients';
import Products from '../containers/Products';
import CompanyInfo from '../containers/CompanyInfo';
import Dashboard from '../containers/Dashboard';
import Profile from '../containers/Profile';

import Login from '../containers/Login';
import Signup from '../containers/Signup';
import { Home } from '../components/Home/index.js';
import Navbar from '../components/Navbar';

export class Routes extends Component {

  render() {
	  return (
			<div>
        <Route exact path = '/' component={Home} />
        <Route path = '/' component={Navbar} />
        <Route exact path = '/login' component={Login} />
        <Route exact path = '/signup' component={Signup} />
        <Route exact path = '/profile' component={Profile} />
        <Route exact path = '/dashboard' component={Dashboard} />
        <Route exact path = '/companyinfo' component={CompanyInfo} />
        <Route exact path = '/products' component={Products} />
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

export default Routes;
