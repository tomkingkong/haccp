import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { object } from 'prop-types';

import './Navbar.css';

export class Navbar extends Component {

	render() {
	  return (
	    <div className="navbar">
	      <NavLink className="link" to='/plans/receiving'>Receiving</NavLink>
	      <NavLink className="link" to='/plans/receiving'>Storage</NavLink>
	      <NavLink className="link" to='/plans/receiving'>Processing</NavLink>
	      <NavLink className="link" to='/plans/receiving'>Packaging</NavLink>
	      <NavLink className="link" to='/plans/receiving'>Summary</NavLink>
	    </div>
	  );
	}	
}

Navbar.propTypes = {
	history: object
};

export default Navbar;