import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor() {
    super();
  }
	
  componentDidMount() {
  }
	
	handleNextClick = () => {
	  //save the data
		// do something
    this.props.history.push('/home');
	}

	render() {
	  return (
	    <div>
	      <h2>Dashboard</h2>
	      <button onClick={this.handleNextClick}>
					Next Page
	      </button>
	    </div>
	  );
	}	
}

Dashboard.propTypes = {

};

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);