import React, { Component } from 'react';
import { object, func } from 'prop-types';

import { signUp, logIn } from '../../utils/apiCalls';

import './index.css';

export class Signup extends Component {
  constructor() {
		super();
		this.state = {
			password: '',
			email: ''
		};
	}
	
	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;
		const userInfo = {user: { email, password }};
		const response =  await signUp(userInfo);
		if (response.id) {
			await logIn(userInfo);
			this.props.history.push('/companyinfo');
		}
	}
	
	goToLogin = () => {
		this.props.history.push('/login');
	}

	render() {
		return (
			<div className="signup">
				<h2>Signup</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
						placeholder="Email"
						/>
					<input
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						placeholder="Password"
						/>
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

export default Signup;