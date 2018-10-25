import React, { Component } from 'react';
import { connect } from 'react-redux';

class Ingredients extends Component {
  constructor() {
    super();
  }
	
  componentDidMount() {
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
	      <button onClick={this.handleNextClick}>
					Next Page
	      </button>
	    </div>
	  );
	}	
}

Ingredients.propTypes = {

};

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);