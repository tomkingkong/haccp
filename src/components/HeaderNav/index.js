import React from 'react';

export const HeaderNav = ({ history }) => (
	<nav className="header-nav">
		<h1 className="header-text" onClick={() => history.push('/')}>HACCP Planner</h1>
	</nav>
);