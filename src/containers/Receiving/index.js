import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

export class Receiving extends Component {
  constructor() {
    super();
  }
	
  componentDidMount() {
  }
	
	handleNextClick = () => {
	  //save the data
		// do something
    this.props.history.push('/inventory');

	}

	render() {
	  return (
	    <div>
	      <h2>Receiving</h2>
	      <button onClick={this.handleNextClick}>
					Next Page
	      </button>
	    </div>
	  );
	}	
}

Receiving.propTypes = {
	history: object
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Receiving);