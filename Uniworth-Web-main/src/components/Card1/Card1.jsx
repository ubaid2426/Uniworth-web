import React from 'react'
import './Card1.css'
import App from '../../App'
const Card1 = (props) => {
  return (
    <div>
      <div className="container">
        <a href="" >
            <div className="image" style={{ backgroundImage: `url(${props.background})`, className:"image11"}} ></div>
            <div className="name"><span>{props.name}</span></div>
            <div className="price">
                <span>{props.price}</span>
            </div>
            <div className="offprice">
                <span><del>{props.offprice}</del></span>
            </div>
        </a>
      </div>
    </div>
  )
}

export default Card1
