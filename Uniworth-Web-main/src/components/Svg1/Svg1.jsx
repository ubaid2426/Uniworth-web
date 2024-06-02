import React from 'react'
import './Svg1.css'
const Svg1 = (props) => {
  if ('bottom-1'==true){
    <style>

      background='transparent';
      background-color: rgba(255, 255, 255, 0.5);
      position='relative';
      {/* transform:'rotate(180deg)'; */}
      {/* top='90px' */}
    </style>
  }
  return (
    <div>
        <div class={('bottom-1')?true:false} data-negative="false">
          <svg id='svg1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path class="elementor-shape-fill" d="M738,99l262-93V0H0v5.6L738,99z" fill={props.main}></path>
          </svg>
     </div>
    </div>
  )
}

export default Svg1;
