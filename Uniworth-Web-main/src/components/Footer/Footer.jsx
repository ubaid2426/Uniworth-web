import React from 'react'
import Logo from '../../Images/SVG/10003.png'
import './Footer.css'
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { FaCreativeCommonsSa } from "react-icons/fa";
// @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Protest+Guerrilla&display=swap')
const Footer = () => {
  return (
    <div className='section'>
      <div className="section-main-1">
        <div className="sec1-1">
            <div className="sec1-1-1"><span>KNOW IT ALL FIRST!</span></div>
            <div className="sec1-1-2"><span>Never Miss Anything From Uniworth By Signing Up To Our Newsletter.</span></div>
        </div>
        <div className="sec1-2">
            <div className="sec1-2-1"><input placeholder='Enter Your Email' type="text" /></div>
            <div className="sec1-2-2"><button>Subcribe</button></div>
        </div>
      </div>
      <div className="section-main-2">
        <div className="sec2-1">
            <div className="sec2-1-1">
            <img alt="Uniworth" src="https://uniworthshop.com/ui/images/icon/logo.svg"/>
                </div>
            <div className="sec2-1-2"><span id='uni-para'>Uniworth is a menswear brand, designed entirely in-house, stand-alone Pakistan’s no. 1 Shirt Brand. From timeless tailoring to premium formal shirts, we present a considered edit of quality, wearable clothes, and accessories bearing the Uniworth name.</span></div>
            <div className="sec2-1-3">
                <ul>
                    <li><a href="#"><FaTwitter /></a></li>
                    <li><a href="#"><FaTiktok /></a></li>
                    <li><a href="#"><FaFacebookF /></a></li>
                    <li><a href="#"><FaInstagram /></a></li>
                </ul>
            </div>
        </div>
        <div className="sec2-2">
            <div className="sec2-2-1"><span>Informations</span></div>
            <div className="sec2-2-2">
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">How to order</a></li>
                    <li><a href="#">Size Guide</a></li>
                    <li><a href="#">Return & Exchange Policy</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li> 
                </ul>
            </div>
        </div>
        <div className="sec2-3">
            <div className="sec2-3-1"><span>Customer Services</span></div>
            <div className="sec2-3-2">
            <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Shipping Policy</a></li>
                    <li><a href="#">Payment Option</a></li>
                    <li><a href="#">FAQ'S</a></li>
                    <li><a href="#">Made to Measure</a></li>
                    <li><a href="#">Made To Measure Store</a></li>
                    <li><a href="#">Track Your Order</a></li>
                    <li><a href="#">Loyalty Card</a></li>
                </ul>
            </div>
        </div>
        <div className="sec2-4">
            <div className="sec2-4-1"><span>Store Information</span></div>
            <div className="sec2-4-2">
            <ul>
                    <li><a href="#"><span id='Info-icons-1'><FaPhoneAlt /></span> <span id='info-head-1'>+92 307 1234567</span></a></li>
                    <li><a href="#"><span id='Info-icons-1'><FaWhatsapp /></span><span id='info-head-1'>+92 307 1234567</span></a></li>
                    <li><a href="#"><span id='Info-icons-1'><MdEmail /></span><span id='info-head-1'>7017889@UOL.edu.pk</span></a></li>
                    <li><a href="#"><span id='Info-icons-1'><IoTimeOutline /></span><span id='info-head-1'>Mon-Sat: (10:00AM To 06:00PM)</span></a></li>
                    
                    <li><a href="#"><span id='Info-icons-1'><ImLocation /></span><button id='info-head-1'>Find our Stores</button></a></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="section-main-3">
        <div className="sec3-1"><span><FaCreativeCommonsSa /></span><span>UNIWORTH DRESS CO. All Rights Reserved.</span></div>
        <div className="sec3-2">
            <div className="sec3-2-1"><span>100% Safe Checkout</span></div>
            <div className="sec3-2-2"><img src={Logo} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
