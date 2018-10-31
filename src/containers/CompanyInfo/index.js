import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import { postCompanyInfo } from '../../utils/apiCalls';
import { setCompanyInfo } from '../../actions';


export class CompanyInfo extends Component {
  constructor() {
    super();
    this.state = {
			id: '',
      name: '', 
      address: '',
      phone: '',
      team_member_1_name: '',
      team_member_1_title: ''
    };
	}
	
	componentDidMount = () => {
		const { companyInfo } = this.props;

		this.setState({
			id: companyInfo.id,
			name: companyInfo.name, 
			address: companyInfo.address,
			phone: companyInfo.phone,
			team_member_1_name: companyInfo.team_member_1_name,
			team_member_1_title: companyInfo.team_member_1_title
		});
	}
	
	handleSubmit = async event => {
		event.preventDefault();
		const company = {
			company: {
				name: this.state.name,
				address: this.state.address,
				phone: this.state.phone,
				team_member_1_name: this.state.team_member_1_name,
				team_member_1_title: this.state.team_member_1_title
			}
		};
		const response = await postCompanyInfo(company);
		if (response.id) {
			this.props.setCompanyInfo({...company.company, id: response.id});
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
	          placeholder="team member title"
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

export const mapStateToProps = ({ companyInfo }) => ({
  companyInfo
});

export const mapDispatchToProps = dispatch => ({
  setCompanyInfo: info => dispatch(setCompanyInfo(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyInfo);