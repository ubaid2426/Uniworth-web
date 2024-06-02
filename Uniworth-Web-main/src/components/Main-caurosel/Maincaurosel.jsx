import React from 'react';
import { Carousel } from 'antd';
import './Main-caurosel.css'
import Lap1 from '../../Images/Laptop size/10002.png'
import Lap2 from '../../Images/Laptop size/10004.png'
import Lap3 from '../../Images/Laptop size/10006.png'
import Lap4 from '../../Images/Laptop size/10008.jpg'
import Mob1 from '../../Images/Mobile Size/10001.jpg'
import Mob2 from '../../Images/Mobile Size/10003.jpg'
import Mob3 from '../../Images/Mobile Size/10005.jpg'
import Mob4 from '../../Images/Mobile Size/10007.jpg'
const MainCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  var settings={
    dots: false,
  }

  return (
    <div>
      <main id='main'>
        <Carousel afterChange={onChange} autoplay {...settings} >
          <div>
            <span className='contentStyle_Mobile'>
            <img class="Mobile_Display" src={Mob1} alt="jacket sale"/>
            </span>
            <span className='contentStyle_Desktop'>
            <img class="Desktop_Display" src={Lap1} alt="jacket sale"/>
            </span>
          </div>
          <div>
            <span className='contentStyle_Mobile'>
            <img class="Mobile_Display" src={Mob2} alt="shalwar kameez"/>
            </span>
            <span className='contentStyle_Desktop'>
            <img class="Desktop_Display" src={Lap2} alt="shalwar kameez"/>
            {/* <img class="Desktop_Display" src="https://uniworthdress.com/uploads/slider/3038edf14bc99baacfa9f304ceb1b611.jpg" alt="jacket sale"/> */}
            </span>
          </div>
          <div>
            <span className='contentStyle_Desktop'>
            <img class="Desktop_Display" src={Lap3} alt="formal Shirt"></img>
            {/* <img class="Desktop_Display" src="https://uniworthdress.com/uploads/slider/3038edf14bc99baacfa9f304ceb1b611.jpg" alt="jacket sale"></img> */}
            </span>
            <span className='contentStyle_Mobile'>
            <img class="Mobile_Display" src={Mob3} alt="formal Shirt"/>
            {/* <img class="Mobile_Display" src="https://uniworthdress.com/uploads/slider/f961c5d93378765c1200a42e2f9eb74e.jpg" alt="jacket sale"/> */}
            </span>
          </div>
          <div>
            <span className='contentStyle_Mobile'>
            {/* <img class="Mobile_Display" src="https://uniworthdress.com/uploads/slider/f961c5d93378765c1200a42e2f9eb74e.jpg" alt="jacket sale"/> */}
            {/* <img class="Mobile_Display" src="https://uniworthdress.com/uploads/slider/951343197d9b488c7c469ae416c2f7dd.jpg" alt="formal Shirt"></img> */}
            <img class="Mobile_Display" src={Mob4} alt="jacket"></img>
            </span>
            <span className='contentStyle_Desktop'>
            {/* <img class="Desktop_Display" src="https://uniworthdress.com/uploads/slider/3038edf14bc99baacfa9f304ceb1b611.jpg" alt="jacket sale"></img> */}
            {/* <img class="Desktop_Display" src="https://uniworthdress.com/uploads/slider/fd1a7ccc637a23cbb24bc7a5f5d74d52.jpg" alt="formal Shirt"></img> */}
            <img class="Desktop_Display" src={Lap4} alt="jacket"></img>
            </span>
          </div>
        </Carousel>
      </main>
    </div>
  );
};

export default MainCarousel;
