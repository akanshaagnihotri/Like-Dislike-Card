import React from 'react';
var styles={
	pic:{
		flex:3
	},
	image:{
		width:450,
		height:250
	}
}

const PicsCard=(props)=>{
	return(
		<div style={styles.pic}>
		<img  style={styles.image} src={props.image}></img>
		</div>
		)
}
export default PicsCard;