import React from 'react';
var styles={
	formbody:{
     width:400,
     height:400,
     border:"1px solid grey"
	},
	heading:{
		color:"blue"

	},
	field:{
		color:"blue",
		textShadow:"0.2px 0.2px 0.2px grey"
	},
	margin:{
		margin:20
	}
}

class InputForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			title:"kgkgjhgj",
			image:"",
			content:"",
			likeCount:0
		}
		this.submit=this.submit.bind(this);
	}
     submit(){
     	console.log("done");
     	this.setState({
     		title:this.state.title,
     		image:this.state.image,
     		content:this.state.content,
     		likeCount:this.state.likeCount
     	})
     	
     }
	render(){
		return(
           		<div style={styles.formbody}>
           			<h1 style={styles.heading}>Generate Ur Card</h1>
          			<div style={styles.margin}>
          				<span style={styles.field} >Enter Title</span>
          				<input onChange={(event)=>this.setState({title:event.target.value})} value={this.state.title}/>
          			</div>
            		 <div style={styles.margin}>
            		 	<span style={styles.field}> Enter Your Pic </span>
            		 	<input  onChange={(event)=>this.setState({image:event.target.value})} value={this.state.image}/>
            		</div>
              		<div style={styles.margin}>
              			<span style={styles.field}> Enter your Description</span>
              			<input  onChange={(event)=>this.setState({content:event.target.value})} value={this.state.content}/>
              		</div>
               		<div style={styles.margin}>
               			<span style={styles.field}> Enter Minimum likes</span>
               			<input  onChange={(event)=>this.setState({likeCount:event.target.value})} value={this.state.likeCount}/>
               		</div>
              		<button onClick={()=>this.props.submitFunc({title:this.state.title,image:this.state.image,content:this.state.content, likeCount:this.state.likeCount})}>Create Card</button>
           		</div>

			)
	}
}

export default InputForm;