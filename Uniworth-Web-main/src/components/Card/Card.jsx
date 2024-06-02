import React from 'react'
import { MdShoppingCartCheckout } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import './Card.css'
import { IoIosSearch } from "react-icons/io";
// import Shirt from '../Shirt/Shirt';
const Card = (props) => {
  return (
    <>
      <div id="card-main">
<img src={props.background} alt="" />
<div className="hover_card-main">
    <img src={props.background1} alt="where" />
  </div>
  <div className="icons-card">
      <a href="#">
    <MdShoppingCartCheckout />
      </a>
   <a href=""><MdFavoriteBorder /></a>
   <a href=""><IoIosSearch /></a>
    </div>
  <div className="body_card-main">
    
  </div>
</div>
    </>
  )
}

export default Card








