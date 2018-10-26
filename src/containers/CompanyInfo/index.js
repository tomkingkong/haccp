import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

// import { CompanyDetails } from '../../components/CompanyDetails';

export class CompanyInfo extends Component {
  constructor() {
    super();
  }
	
	handleNextClick = () => {
	  //save the data
		this.props.history.push('/products');
	}

	render() {
	  return (
	    <div>
	      <h2>Enter your company details</h2>
				{/* <CompanyDetails /> */}
	      <button onClick={this.handleNextClick}>
					Next Page
	      </button>
	    </div>
	  );
	}	
}

CompanyInfo.propTypes = {
	history: object
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyInfo);