import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

export class Processing extends Component {
	
	handleNextClick = () => {
	  //save the data
		// do something
		this.props.history.push('/packaging');
	}

	render() {
	  return (
	    <div>
	      <h2>Processing</h2>
	      <button onClick={this.handleNextClick}>
					Next Page
	      </button>
	    </div>
	  );
	}	
}

Processing.propTypes = {
	history: object
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Processing);