import React, { Component } from 'react';
import { object } from 'prop-types';

export class Login extends Component {
  constructor() {
		super();
		this.state = {
			nameInput: '',
			emailInput: ''
		};
	}
	
	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	}

	handleSubmit = event => {
		event.preventDefault();
    this.props.history.push('/dashboard');
		console.log(this.state.nameInput);
	}

	render() {
	  return (
	    <div>
	      <h2>Login</h2>
				<form onSubmit={this.handleSubmit}>
					<input 
						name="nameInput" 
						value={this.state.nameInput}
						onChange={this.handleChange} 
						placeholder="Enter username" />
					<input 
						name="emailInput" 
						value={this.state.emailInput}
						onChange={this.handleChange} 
						placeholder="Enter username" />
					<button>Log In</button>
				</form>
	    </div>
	  );
	}	
}

Login.propTypes = {
	history: object
};

export default Login;