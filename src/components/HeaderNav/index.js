import React from 'react';
import { object } from 'prop-types';

import { logOut } from '../../utils/apiCalls';

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

	const handleLogOut = () => (
		<button className="signup-login" 
			onClick={() => {
				logOut();
				history.replace('/')
				}}>
			Log Out
		</button>
	)

	return (
		<nav className="header-nav">
			<h1 className="header-text" 
				onClick={() => history.push('/')}>
				HACCP Planner</h1>
			<div className="nav-btns">
				{ shouldLogInOrSignUp ? signInLogIn() : handleLogOut() }
			</div>
		</nav>
	)
};

HeaderNav.propTypes = {
	history: object
}