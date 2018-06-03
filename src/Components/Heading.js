import React from 'react';
var styles={
	head:{
      flex:1,
      color:" #432067",
      fontSize:20,
      textShadow:"0.5px 0.5px 2px grey",
      textAlign: "center",
      backgroundColor:'#ffffff',
      fontSize:40,
      flex:3
	},
	button:{
      flex:1,
      margin:0,
      padding:0
	},
	topBox:{
		display:"flex",
		flexDirection:"row"
	}

}

class Heading extends React.Component{
	constructor(props){
      super(props);
      this.state={
      	dropdown:true,
      	titles:this.props.title
      }
      this.show=this.show.bind(this);
  }
show(){
	console.log(this.state.dropdown);
	this.setState({dropdown:!this.state.dropdown});
	console.log(this.state.dropdown);
		
}
	
	render(){
		return(
			 <div style={styles.topBox} >
 	<span style={styles.head}>{this.state.titles}</span>
 	<button onClick={this.show} style={styles.button}>show</button>

 	</div>
			)
	}
}
 

 export default Heading;

  
  // //               <md-icon aria-label="Menu " class="material-icons " ng-show="!dropdownShow[$index]">arrow_drop_down</md-icon>
  // //               <md-icon aria-label="Menu " class="material-icons " ng-show="dropdownShow[$index]">arrow_drop_up</md-icon>
  // //             </md-button>