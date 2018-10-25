import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
  constructor() {
    super();
  }

	render() {
	  return (
	    <div>
	      <h2>Navbar</h2>
	      
	    </div>
	  );
	}	
}

Navbar.propTypes = {

};

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);