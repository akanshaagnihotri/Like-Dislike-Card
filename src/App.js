import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemCard from './Components/ItemCard';
import InputForm from './Components/InputForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      cardData :[
        {
          title:"Shubhi",
          image:"https://images8.alphacoders.com/603/thumb-1920-603827.jpg",
          content:"Sexy Bitch",
          likeCount:50000000
        },
        {
          title:"Pulkit",
          image:"https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/22852099_1865399766820723_7276523862475393413_n.jpg?_nc_cat=0&oh=57d12e30e00963802badcf9a20c1a0ce&oe=5B337CF7",
          content:"Hot as hell",
          likeCount:1000000000
        },
        {
          title:"Dishu",
          image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201406/deepika_650_060314071149.jpg",
          content:":-p Scholar Naina",
          likeCount:-400  
        },
      ]
    }
    this.submitFunction = this.submitFunction.bind(this);
  }
  submitFunction(obj){
    let currentDataArr = this.state.cardData;
    currentDataArr.push(obj);
    this.setState({cardData:currentDataArr});
  }
  render() {
  	return (
    	<div style={{display:"flex", flexDirection:"row",flexWrap:"wrap"}}>
      <InputForm submitFunc={this.submitFunction}></InputForm>
    	{
    		this.state.cardData.map((individual,index)=>{
    			let {title,image,content,likeCount} = individual;
    			return(<ItemCard key={title+index} title={title} image={image} content={content} likeCount={likeCount} />)
    		})
    	}
      </div>
     
    );
  }
}
export default App;
