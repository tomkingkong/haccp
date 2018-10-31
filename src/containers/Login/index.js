import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';

import { logIn, getCompanyInfo, putCompanyInfo } from '../../utils/apiCalls';
import { parseCompanyData } from '../../thunks/parseCompanyData';

import './index.css';
export class Login extends Component {
  constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			passwordType: 'password'
		};
	}
	
	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	}

	handleSubmit = async event => {
		event.preventDefault();
		const company = await logIn({company: this.state});
		console.log(company)
		if (company.id) {
			const compData = await putCompanyInfo(company.id, {company:{name:'Lucas'}});
			const data = await getCompanyInfo(company.id);
			console.log(data)
			console.log(compData)
			// this.props.parseCompanyData(data);
			// this.props.history.push('/dashboard');
		}
	}

	toggleVisibility = () => {
		const { passwordType } = this.state;
		let changeType;
		changeType = passwordType === 'password' ? 'text' : 'password';
		this.setState({ passwordType: changeType });
	}

	render() {
	  return (
	    <div className="login">
	      <h2>Login</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						placeholder="Enter your email"
						name="email"
						type="text"
						value={this.state.email}
						onChange={this.handleChange}
						/>
					<input
						id="toggleVisibility"
						placeholder="Enter your password"
						name="password"
						type={this.state.passwordType}
						value={this.state.password}
						onChange={this.handleChange}
						/>
						<label className="pass-toggle">
							<input type="checkbox" onClick={this.toggleVisibility}/> 
							Show Password
						</label>
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