import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';

import { setCompanyInfo } from '../../actions';
export class Login extends Component {
  constructor() {
		super();
		this.state = {
			emailInput: '',
			passInput: ''
		};
	}
	
	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	}

	handleSubmit = event => {
		event.preventDefault();
		const { emailInput } = this.state;
 		// fetch company id and set to store
		this.props.setCompanyInfo(1, emailInput);
    this.props.history.push('/dashboard');
	}

	render() {
	  return (
	    <div>
	      <h2>Login</h2>
				<form onSubmit={this.handleSubmit}>
					<input 
						name="emailInput" 
						value={this.state.emailInput}
						onChange={this.handleChange} 
						placeholder="Enter username" />
					<input 
						name="passInput" 
						value={this.state.passInput}
						onChange={this.handleChange} 
						placeholder="Enter password" />
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