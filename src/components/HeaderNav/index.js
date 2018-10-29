import React from 'react';

export const HeaderNav =({ history }) => (
  <nav className="header-nav">
    <h1 className="header-text" onClick={() => history.push('/')}>HACCP Planner</h1>
    <div>
      <button className="signup-login" onClick={() => history.push('/signup')}>Sign Up</button>
      <button className="signup-login" onClick={() => history.push('/login')}>Log In</button>
    </div>
	</nav>
);