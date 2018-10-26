import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { object } from 'prop-types';


export class Navbar extends Component {
  constructor() {
    super();
  }

	render() {
	  return (
	    <div className="Navbar">
	      <NavLink to='/receiving'>Receiving</NavLink>
	      <NavLink to='/receiving'>Storage</NavLink>
	      <NavLink to='/receiving'>Processing</NavLink>
	      <NavLink to='/receiving'>Packaging</NavLink>
	      <NavLink to='/receiving'>Summary</NavLink>
	    </div>
	  );
	}	
}

Navbar.propTypes = {
	history: object
};

export default Navbar;