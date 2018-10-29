import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';
import { TextField } from '@material-ui/core';

import { getCompanyLogin, getCompanyInfo } from '../../utils/apiCalls';
import { parseCompanyData } from '../../thunks/parseCompanyData';

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
		const query = `?company_email=${this.state.email}&company_password=${this.state.password}`;
		const response = await getCompanyLogin(query);

		const company = response.find(comp=> comp.email === this.state.email);
		if (company.id) {
			const data = await getCompanyInfo(company.id);

			this.props.parseCompanyData(data);
			this.props.history.push('/dashboard');
		}
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
	setCompanyInfo: func,
	parseCompanyData: func
};

export const mapDispatchToProps = dispatch => ({
	parseCompanyData: data => dispatch(parseCompanyData(data))
});

export default connect(null, mapDispatchToProps)(Login);