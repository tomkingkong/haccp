import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from 'prop-types';

export class Summary extends Component {

	render() {
	  return (
	    <div>
	      <h2>Summary</h2>
	      <button>
					Print
	      </button>
	    </div>
	  );
	}	
}

Summary.propTypes = {

};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);