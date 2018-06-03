import React from 'react';
import './LikeDislikeCard.css';
import thumbsDown from './../assets/thumbsDown.png';
import thumbsUp from './../assets/thumbsUp.png';

var Styles = {
	mainCard:{
		display:'flex',
		flexDirection:'row',
		flex:1
	},
	leftCard:{
     flex:1
	},
	rightCard:{
     flex:1
	},
	centerCard:{
     flex:1,
     display:'flex',
     alignItems:'center',
     justifyContent:'center'
	},
	images:{
		width:50,
		height:50,
		flex:1 //yaha px nhi likhte
	},
	buttonName:{
		display:'flex',
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center'
	},
	Button:{
		flex:1
	}

}
class LikeDislikeCard extends React.Component{

	constructor(props){
		super(props);
		this.state={
			count:this.props.initialValue
		}
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}
	increment(){
		this.setState({count:this.state.count+1});
	
	}
	decrement(){
		this.setState({count:this.state.count-1})
	}

	render(){
		return(
          <div className="mainCard" style={Styles.mainCard}>
	           <div onClick={this.increment} style={Styles.leftCard}>
	           		<div style={Styles.buttonName}>
		            	<img src={thumbsUp} style={Styles.images}></img>
		            	<h3 style={Styles.Button}>Like</h3>
	            	</div>
	           </div>
	           <div style={Styles.centerCard}>
                 	<h2>{this.state.count}</h2>
	           </div>
	           <div onClick={this.decrement} style={Styles.rightCard}>
	            	<div  style={Styles.buttonName}>
	                  	<img src={thumbsDown} style={Styles.images}></img> 
	                  	<h3 style={Styles.Button}>Dislike</h3>
                  	</div>
	           </div>
          </div>
		)
	}
}

export default LikeDislikeCard;