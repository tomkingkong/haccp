import React, { Component } from 'react';
class App extends Component {

	handleClick = () => {
		console.log('yes')
	  fetch('')
	    .then(response => response.json())
	    .then(result => console.log(result))
	    .catch(error => console.log(error));
	}
	render() {
	  return (
	    <div className="App">
	      <button onClick={this.handleClick}>Click this button</button>
	    </div>
	  );
	}
}

export default App;
