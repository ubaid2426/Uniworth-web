import React from 'react'
import './Shirt.css'
import Card from '../Card/Card'
import Shirt1 from '../../Images/Shirt-Front/10002.webp'
import Shirt2 from '../../Images/Shirt-Front/10004.webp'
import Shirt3 from '../../Images/Shirt-Front/10006.webp'
import Shirt4 from '../../Images/Shirt-Front/10008.webp'
import Shirt5 from '../../Images/Shirt-Front/10010.webp'
import Shirt6 from '../../Images/Shirt-Front/10012.webp'
import Shirt7 from '../../Images/Shirt-back/10003.webp'
import Shirt8 from '../../Images/Shirt-back/10005.webp'
import Shirt9 from '../../Images/Shirt-back/10007.webp'
import Shirt10 from '../../Images/Shirt-back/10009.webp'
import Shirt11 from '../../Images/Shirt-back/10011.webp'
import Shirt12 from '../../Images/Shirt-back/10013.webp'
const Shirt = () => {
  return (
    <>
    
      <div className="extra2"></div>
    <div className='Shirt-main'>
        <div className="Shirt-main-1">
      <Card background={Shirt1} background1={Shirt7}/>
      <Card background={Shirt2} background1={Shirt8}/>
      <Card background={Shirt3} background1={Shirt9}/>
      <Card background={Shirt4} background1={Shirt10}/>
      <Card background={Shirt5} background1={Shirt11}/>
      <Card background={Shirt6} background1={Shirt12}/>
    </div>
    </div>
    <div className="extra3"></div>
    </>
  )
}

export default Shirt
