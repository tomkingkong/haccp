import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

export class Summary extends Component {

	render() {
	  return (
	    <div>
	      <h2>Summary</h2>
	      <button onClick={() => this.props.history.push('/dashboard')}>
					Print
	      </button>
	    </div>
	  );
	}	
}

Summary.propTypes = {
	history: object
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);