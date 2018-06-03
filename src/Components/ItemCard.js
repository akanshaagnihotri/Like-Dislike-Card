import React from "react";
import './ItemCard.css';
import LikeDislikeCard from './LikeDislikeCard';
import PicsCard from './PicsCard';
import Heading from './Heading';
import Description from './Description';


const ItemCard=(props)=>{
	let {title, image, content, likeCount} = props;
	return(
     <div className="itemCard">
	     <Heading title={title}></Heading>
	     <PicsCard image={image}></PicsCard>
	     <Description content={content}></Description>
	     <LikeDislikeCard initialValue={likeCount}></LikeDislikeCard>
     </div>
   )
}
export default ItemCard;