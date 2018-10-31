import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { object } from 'prop-types';

import './Navbar.css';

export class Navbar extends PureComponent {

	render() {
	  return (
	    <div className="navbar">
	      <NavLink className="link" to='/dashboard'>Dashboard</NavLink>
	      <NavLink className="link" to='/plans/receiving'>Receiving</NavLink>
	      <NavLink className="link" to='/plans/inventory'>Inventory</NavLink>
	      <NavLink className="link" to='/plans/processing'>Processing</NavLink>
	      <NavLink className="link" to='/plans/packaging'>Packaging</NavLink>
	      <NavLink className="link" to='/plans/summary'>Summary</NavLink>
	    </div>
	  );
	}	
}

Navbar.propTypes = {
	history: object
};

export default Navbar;