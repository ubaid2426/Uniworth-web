// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card1 from "../Card1/Card1";
import './NewArrival.css'
import background1 from '../../Images/New_Arrivals_front/10002.webp'
import background2 from '../../Images/New_Arrivals_front/10004.webp'
import background3 from '../../Images/New_Arrivals_front/10006.webp'
import background4 from '../../Images/New_Arrivals_front/10008webp.webp'
import background5 from '../../Images/New_Arrivals_front/10010.webp'
import background6 from '../../Images/New_Arrivals_front/10012.webp'
import background14 from '../../Images/New_Arrivals_front/10014.webp'
import background7 from '../../Images/New-Arrival-back/10001.webp'
import background8 from '../../Images/New-Arrival-back/10003.webp'
import background9 from '../../Images/New-Arrival-back/10005.webp'
import background10 from '../../Images/New-Arrival-back/10007.webp'
import background11 from '../../Images/New-Arrival-back/10009.webp'
import background12 from '../../Images/New-Arrival-back/10011.webp'
import background13 from '../../Images/New-Arrival-back/10013.webp'
// import background12 from '../../Images/New-Arrival-back/10011.webp'
import React from "react";
import Slider from "react-slick";
import { IoIosSearch } from "react-icons/io";
import { MdShoppingCartCheckout } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
function Responsive() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    // initialSlide: 0,
    autoplay: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="responsiive">
   
    <div className="res">
          <div className="new"><span>New Arrivals</span><hr id="line"/></div>
    </div>
    <div className="slider-container" id="main">
      <Slider {...settings} id='main1'>
       
        <div id="card">
        <img src={background2} alt="" />
        <div className="hover_card">
            <img src={background8} alt="where" />
          </div>
          <div className="icons">
              <a href="#">
            <MdShoppingCartCheckout />
              </a>
           <a href=""><MdFavoriteBorder /></a>
           <a href=""><IoIosSearch /></a>
            </div>
          <div className="body_card">
            
          </div>
        </div>
        <div id="card">
        <img src={background3} alt="" />
        <div className="hover_card">
            <img src={background9} alt="where" />
            {/* <p>hover function</p> */}
          </div>
          <div className="icons">
              <a href="#">

            <MdShoppingCartCheckout />
              </a>
           <a href=""><MdFavoriteBorder /></a>
           <a href=""><IoIosSearch /></a>
            </div>
          <div className="body_card"></div>
        </div>
        <div id="card">
        <img src={background4} alt="" />
        <div className="hover_card">
            <img src={background10} alt="where" />
            {/* <p>hover function</p> */}
          </div>
          <div className="icons">
              <a href="#">

            <MdShoppingCartCheckout />
              </a>
           <a href=""><MdFavoriteBorder /></a>
           <a href=""><IoIosSearch /></a>
            </div>
          <div className="body_card"></div>
        </div>
        <div id="card">
        <img src={background5} alt="" />
        <div className="hover_card">
            <img src={background11} alt="where" />
            {/* <p>hover function</p> */}
          </div>
          <div className="icons">
              <a href="#">

            <MdShoppingCartCheckout />
              </a>
           <a href=""><MdFavoriteBorder /></a>
           <a href=""><IoIosSearch /></a>
            </div>
          <div className="body_card"></div>
        </div>
        <div id="card">
        <img src={background6} alt="" />
        <div className="hover_card">
            <img src={background12} alt="where" />
            {/* <p>hover function</p> */}
          </div>
          <div className="icons">
              <a href="#">

            <MdShoppingCartCheckout />
              </a>
           <a href=""><MdFavoriteBorder /></a>
           <a href=""><IoIosSearch /></a>
            </div>
          <div className="body_card"></div>
        </div>
        <div id="card">
        <img src={background14} alt="" />
        <div className="hover_card">
            <img src={background13} alt="where" />
            {/* <p>hover function</p> */}
          </div>
          <div className="icons">
              <a href="#">

            <MdShoppingCartCheckout />
              </a>
           <a href=""><MdFavoriteBorder /></a>
           <a href=""><IoIosSearch /></a>
            </div>
          <div className="body_card"></div>
        </div>
        <div id="card">
          {/* <h3>1</h3> */}
          <img src={background1} alt="" />
          <div className="hover_card">
            <img src={background7} alt="where" /> </div>
            <div className="icons">
              <a href="#">

            <MdShoppingCartCheckout />
              </a>
           <a href=""><MdFavoriteBorder /></a>
           <a href=""><IoIosSearch /></a>
            </div>
           
         
          <div className="body_card"></div>
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default Responsive;
