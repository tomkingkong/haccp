import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';
import { TextField } from '@material-ui/core';

import { getCompanyLogin } from '../../utils/apiCalls';
import { setCompanyInfo } from '../../actions';

export class Login extends Component {
  constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		};
	}
	
	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	}

	handleSubmit = async event => {
		event.preventDefault();
		await getCompanyLogin(this.state);
		// this.props.setCompanyInfo();
    this.props.history.push('/dashboard');
	}

	render() {
	  return (
	    <div>
	      <h2>Login</h2>
				<form onSubmit={this.handleSubmit}>
					<TextField
						id="standard-dense"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
						label="Email"
						required />
					<TextField
						id="outlined-password-input"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						label="Password"
						type="password"
						variant="outlined"
						required />
					<button>Log In</button>
				</form>
	    </div>
	  );
	}	
}

Login.propTypes = {
	history: object,
	setCompanyInfo: func
};

export const mapDispatchToProps = dispatch => ({
	setCompanyInfo: (id, name) => dispatch(setCompanyInfo(id, name))
});

export default connect(null, mapDispatchToProps)(Login);