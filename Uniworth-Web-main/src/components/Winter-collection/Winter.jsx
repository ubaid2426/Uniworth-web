import React from 'react'
import './Winter.css'
import Card from '../Card/Card'
import Winter1 from '../../Images/Winter-front/10001.webp'
import Winter2 from '../../Images/Winter-front/10003.webp'
import Winter3 from '../../Images/Winter-front/10005.webp'
import Winter4 from '../../Images/Winter-front/10007.webp'
import Winter5 from '../../Images/Winter-front/10009.webp'
import Winter6 from '../../Images/Winter-front/10011.webp'
import Winter7 from '../../Images/Winter-back/10002.webp'
import Winter8 from '../../Images/Winter-back/10004.webp'
import Winter9 from '../../Images/Winter-back/10006.webp'
import Winter10 from '../../Images/Winter-back/10008.webp'
import Winter11 from '../../Images/Winter-back/10010.webp'
import Winter12 from '../../Images/Winter-back/10012.jpg'
const Winter = () => {
  return (
    <div>
      <div className="extra10"></div>
       <div className='Winter-main'>
        <div className="Winter-main-1">
      <Card background={Winter1} background1={Winter7}/>
      <Card background={Winter2} background1={Winter12}/>
      <Card background={Winter3} background1={Winter8}/>
      <Card background={Winter4} background1={Winter9}/>
      <Card background={Winter5} background1={Winter10}/>
      <Card background={Winter6} background1={Winter11}/>
    </div>
    </div>
    <div className="extra10"></div>
    </div>
  )
}

export default Winter
