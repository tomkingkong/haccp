import React from 'react';
import { object } from 'prop-types';

export const HeaderNav = ({ history }) => (
	<nav className="header-nav">
		<h1 className="header-text" onClick={() => history.push('/')}>HACCP Planner</h1>
	</nav>
);

HeaderNav.propTypes = {
	history: object
}