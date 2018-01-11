import React from 'react'
import PropTypes from 'prop-types'

const Counter = props => 
	<table className="App-intro App">
	  <tbody>
	    <tr>
	      <td>Clicks:</td>
	      <td>{props.numberClicked}</td>
	    </tr>
	  </tbody>
	</table>;

export default Counter;