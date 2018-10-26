import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

export class Products extends Component {
  constructor() {
    super();
  }
	
	handleNextClick = () => {
	  //save the data
		// do something
    this.props.history.push('/ingredients');

	}

	render() {
	  return (
	    <div>
	      <h2>Products</h2>
	      <button onClick={this.handleNextClick}>
					Next Page
	      </button>
	    </div>
	  );
	}	
}

Products.propTypes = {
	history: object
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Products);