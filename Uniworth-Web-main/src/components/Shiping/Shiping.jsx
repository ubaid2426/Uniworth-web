import React from 'react'
import './Shiping.css'
import { FaShippingFast } from "react-icons/fa";
const Shiping = () => {
  return (
    <>
   <div className="extra5"></div>
    <div className='ship-main'>
      <div className="Ship">
        <div className="ship1">
        <img src="https://uniworthshop.com/ui/images/icons/11.png" alt="free shipping"/>
            <span>Free Shipping</span></div>
        <div className="ship2">
        <img src="https://uniworthshop.com/ui/images/icons/12.png" alt="Secure payments"/>
            <span>Secure Payments</span></div>
        <div className="ship3">
        <img src="https://uniworthshop.com/ui/images/icons/13.png" alt="Premium Quality"/>
            <span>Premium Quality</span></div>
      </div>
    </div>
    <div className="extra6"></div>
    </>
  )
}

export default Shiping
