import React from 'react';
import PropTypes from 'prop-types';


const Minion = props =>
	<div 
		className="image-container col-md-3 mr-0"
		id={props.id} 
	  	onClick={() => {
	  		props.changeClickState('clicked', props.id)}
	  	}
		>
	  	<img 
	  		className="image-responsive"
	  		src={props.image}
	  		alt=""
	    />
    </div>

export default Minion;