import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import { TextField } from '@material-ui/core';
import { putCompanyInfo } from '../../utils/apiCalls';

// import { CompanyDetails } from '../../components/CompanyDetails';

export class CompanyInfo extends Component {
  constructor() {
    super();
    this.state = {
			id: '',
      name: '', 
      email: '',
      address: '',
      phone: '',
      team_member_1_name: '',
      team_member_1_title: ''
    };
	}
	
	componentDidMount = () => {
		const { id, name, email, address, phone, team_member_1_name, team_member_1_title } = this.props.companyInfo;

		this.setState({
			id,
			name, 
			email,
			address,
			phone,
			team_member_1_name,
			team_member_1_title
		});
	}
	
	handleSubmit = async event => {
		event.preventDefault();
		const response = await putCompanyInfo(this.state.id, {company:this.state});
		console.log(response)
		if (response.id) {
			this.props.history.push('/dashboard');
		}
	}

	handleChange = event => {
	  const { name, value } = event.target;
	  this.setState({ [name]: value });
	}

	render() {
	  return (
	    <div>
	      <h2>Enter your company details</h2>
	      <form onSubmit={this.handleSubmit}>
	        <TextField
	          id="standard-dense"
	          name="name"
	          value={this.state.name}
	          onChange={this.handleChange}
	          label="company name"
	          required />
	        <TextField
	          id="standard-dense"
	          name="email"
	          value={this.state.email}
	          onChange={this.handleChange}
	          label="email"
	          required />
	        <TextField
	          id="standard-dense"
	          name="address"
	          value={this.state.address}
	          onChange={this.handleChange}
	          label="address"
	          required />
	        <TextField
	          id="standard-dense"
	          name="phone"
	          value={this.state.phone}
	          onChange={this.handleChange}
	          label="phone"
	          required />
	        <TextField
	          id="standard-dense"
	          name="team_member_1_name"
	          value={this.state.team_member_1_name}
	          onChange={this.handleChange}
	          label="team member name"
	          required />
	        <TextField
	          id="standard-dense"
	          name="team_member_1_title"
	          value={this.state.team_member_1_title}
	          onChange={this.handleChange}
	          label="team_member_1_title"
	          required />
	      <button>
					Next Page
	      </button>
	      </form>
	    </div>
	  );
	}	
}

CompanyInfo.propTypes = {
  history: object
};

const mapStateToProps = ({companyInfo}) => ({
  companyInfo
});

const mapDispatchToProps = dispatch => ({
  // editCompanyInfo: info => dispatch(editCompamnyInfo(info)),
  // addCompanyInfo: info => dispatch(addCompanyInfo(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyInfo);