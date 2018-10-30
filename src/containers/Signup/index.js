import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';

import { setCompanyInfo } from '../../actions';
import { signUp, logIn } from '../../utils/apiCalls';

export class Signup extends Component {
  constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			name: ''
		};
	}
	
	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { email, password, name } = this.state;
		const response =  await signUp({company: this.state});
		if (response.id) {
			await logIn({company: { email, password }})
			this.props.setCompanyInfo(response.id, name, email);
			this.props.history.push('/companyinfo');
		}
	}
	
	goToLogin = () => {
		this.props.history.push('/login');
	}

	render() {
		return (
			<div>
				<h2>Signup</h2>
				<form onSubmit={this.handleSubmit}>
					<TextField
						id="standard-dense"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
						label="Company Name"
						required />
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
					<button>Sign Up</button>
				</form>
				<p>Already have an account: </p>
				<button onClick={this.goToLogin}>Log In</button>
			</div>
		);
	}	
}

Signup.propTypes = {
	history: object,
	setCompanyInfo: func
};

export const mapDispatchToProps = dispatch => ({
	setCompanyInfo: (id, name, email) => dispatch(setCompanyInfo(id, name, email))
});

export default connect(null, mapDispatchToProps)(Signup);