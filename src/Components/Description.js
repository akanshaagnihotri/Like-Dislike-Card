import React from 'react';
 var styles={
	des:{
		flex:1
	}
}
const Description=(props)=>{
	return(
      <div style={styles.des}>
      	<p>{props.content}</p>
      </div>
	)
}
export default Description;