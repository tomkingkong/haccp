import React from 'react';
import { object } from 'prop-types';

export const Home = ({ history }) => {

	return (
		<div>
			<h2>Home</h2>
			<button onClick={() => history.push('/signup')}>Sign Up</button>
			<button onClick={() => history.push('/login')}>Log In</button>
		</div>
	);
};

Home.propTypes = {
	history: object
};