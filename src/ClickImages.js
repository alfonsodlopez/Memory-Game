import React from 'react';
import { PropTypes } from 'prop-types'
import Minion from './Minion'
	//Iterate through our list of images

const ClickImages = props => {
	return <div>
		{props.malifaux.map(minion => {
			return (<Minion 
				key = {minion.id}
				id= {minion.id} 
	  			clicked={minion.clicked}
	  			changeClickState={() => props.toggleClickedState(minion.id)}
	  			image = {minion.image}
	  		/>) }
			)
		    /*create element groups with size 3, result looks like:
		    [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]*/
			.reduce(function(r, element, index) {
		        index % props.groupSize === 0 && r.push([]);
		        r[r.length - 1].push(element);
		        return r;
		    }, [])
		    .map(function(rowContent) {
		        // surround every group with 'row'
		        return (
		        <div className="row" key={Math.floor(Math.random() * 1000000)}>
		        	{rowContent}
		        </div>
		        )
		    })
		}	
	</div>
}

/*ClickImages.propTypes = {
	id: PropTypes.number.isRequired,
	clicked: PropTypes.bool.isRequired,
	toggleClickedState: PropTypes.func.isRequired,
}*/

export default ClickImages;