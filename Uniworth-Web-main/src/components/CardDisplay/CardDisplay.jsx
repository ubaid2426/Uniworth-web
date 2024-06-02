import React from 'react';
import './CardDisplay.css';
import { AiOutlineArrowRight } from "react-icons/ai";
// import url('https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap');
{/* <style>
@import url('https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap');
</style> */}
// import '../../Images/10001.webp';
const CardDisplay = (props) => {
  return (
    <>
    <div className="con-main">
      <a href={props.link}>
      <div className="card" style={{ backgroundImage: `url(${props.background1})` }}> 
        <div className="card1"></div>
        <div className="card2">
          <h2>{props.name}</h2>
          {/* <h2>Winter collection</h2> */}
          {/* <span>{props.lname}</span> */}
        </div>
        <div className="card3">
          <button className='btn' >Shop Now <AiOutlineArrowRight id='arrow' /></button>
        </div>
        </div>
      </a>
      </div>
    </>
  );
};

export default CardDisplay;
