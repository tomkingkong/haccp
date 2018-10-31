import React from 'react';
import { object } from 'prop-types';

import './index.css';

export const HeaderNav = ({ history }) => {
	const path = history.location.pathname;
	const shouldLogInOrSignUp = ( 
		path === '/' 
		|| path === '/login'
		|| path === '/signup' );

	const signInLogIn = () => (
		<React.Fragment>
			<button className="signup-login" 
				onClick={() => history.push('/login')}>
				Log In
			</button>
			<button className="signup-login" 
				onClick={() => history.push('/signup')}>
				Sign Up
			</button>
		</React.Fragment>
	)

	const logOut = () => (
		<button className="signup-login" 
			onClick={() => history.replace('/')}>
			Log Out
		</button>
	)

	return (
		<nav className="header-nav">
			<h1 className="header-text" 
				onClick={() => history.push('/')}>
				HACCP Planner</h1>
			<div className="nav-btns">
				{ shouldLogInOrSignUp ? signInLogIn() : logOut() }
			</div>
		</nav>
	)
};

HeaderNav.propTypes = {
	history: object
}