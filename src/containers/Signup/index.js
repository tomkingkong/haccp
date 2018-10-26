import React, { Component } from 'react';
import { object } from 'prop-types';

export class Signup extends Component {
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
    this.props.history.push('/companyinfo');
		console.log(this.state.nameInput);
	}

	logIn = () => {
		this.props.history.push('/login');
	}

	render() {
	  return (
	    <div>
	      <h2>Signup</h2>
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
					<button>Sign Up</button>
				</form>
				<button onClick={this.logIn}>Log In</button>
	    </div>
	  );
	}	
}

Signup.propTypes = {
	history: object
};

export default Signup;