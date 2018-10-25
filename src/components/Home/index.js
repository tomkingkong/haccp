import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  constructor() {
    super();
  }
	
	handleNextClick = () => {
	  //save the data
		// do something
	}

	render() {
	  return (
	    <div>
	      <h2>Home</h2>
	      <button onClick={this.handleNextClick}>
					Next Page
	      </button>
	    </div>
	  );
	}	
}

Home.propTypes = {

};

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Home);