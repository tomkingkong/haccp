import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

export class Packaging extends Component {
	
	handleNextClick = () => {
	  //save the data
		// do something
		this.props.history.push('/summary');
	}

	render() {
	  return (
	    <div>
	      <h2>Packaging</h2>
	      <button onClick={this.handleNextClick} >
					Next Page
	      </button>
	    </div>
	  );
	}	
}

Packaging.propTypes = {
	history: object
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Packaging);