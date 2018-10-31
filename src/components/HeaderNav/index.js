import React from 'react';
import { object } from 'prop-types';

import './index.css';

export const HeaderNav = ({ history }) => (
	<nav className="header-nav">
		<h1 className="header-text" 
			onClick={() => history.push('/')}>
			HACCP Planner</h1>
		<div className="nav-btns">
			<button 
				className="signup-login" 
				onClick={() => history.push('/login')}>
				Log In</button>
			<button 
				className="signup-login" 
				onClick={() => history.push('/signup')}>
				Sign Up</button>
		</div>
	</nav>
);

HeaderNav.propTypes = {
	history: object
}