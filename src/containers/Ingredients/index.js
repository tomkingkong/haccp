import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import IngredientsForm from '../../components/IngredientsForm';

export class Ingredients extends Component {
  constructor() {
    super();
  }
	
	handleNextClick = () => {
	  //save the data
		// do something
    this.props.history.push('/receiving');

	}

	render() {
	  return (
	    <div>
	      <h2>Ingredients</h2>
				<IngredientsForm />
	      <button onClick={this.handleNextClick}>
					Next Page
	      </button>
	    </div>
	  );
	}	
}

Ingredients.propTypes = {
	history: object
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);