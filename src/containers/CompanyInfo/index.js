import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

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
	    <div className="signup-container">
	      <h2 className="signup-header">Enter your company details</h2>
	      <form className="signup-form" onSubmit={this.handleSubmit}>
	        <input
	          name="name"
	          value={this.state.name}
	          onChange={this.handleChange}
	          placeholder="company name"
	          />
	        <input
	          name="email"
	          value={this.state.email}
	          onChange={this.handleChange}
	          placeholder="email"
	          />
	        <input
	          name="address"
	          value={this.state.address}
	          onChange={this.handleChange}
	          placeholder="address"
	          />
	        <input
	          name="phone"
	          value={this.state.phone}
	          onChange={this.handleChange}
	          placeholder="phone"
	          />
	        <input
	          name="team_member_1_name"
	          value={this.state.team_member_1_name}
	          onChange={this.handleChange}
	          placeholder="team member name"
	          />
	        <input
	          name="team_member_1_title"
	          value={this.state.team_member_1_title}
	          onChange={this.handleChange}
	          placeholder="team_member_1_title"
	          />
	      <button className="signin-button">
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