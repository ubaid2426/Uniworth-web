import React from 'react'
import './Svg.css'
const Svg = (props) => {
  return (
    <div>
        <div class="bottom" data-negative="false">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 1000 100" preserveAspectRatio="none">
          <path class="elementor-shape-fill" d="M738,99l262-93V0H0v5.6L738,99z" fill={props.main}></path>
          </svg>
     </div>
    </div>
  )
}

export default Svg
