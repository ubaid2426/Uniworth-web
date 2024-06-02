import React from 'react'
import './Accessories.css'
import Card from '../Card/Card'
import Access1 from '../../Images/Accessories-Front/10001.webp'
import Access2 from '../../Images/Accessories-Front/10003.webp'
import Access3 from '../../Images/Accessories-Front/10005.webp'
import Access4 from '../../Images/Accessories-Front/10007.webp'
import Access5 from '../../Images/Accessories-Front/10009.webp'
import Access6 from '../../Images/Accessories-Front/10011.webp'
import Access7 from '../../Images/Accessories-back/10002.webp'
import Access8 from '../../Images/Accessories-back/10004.webp'
import Access9 from '../../Images/Accessories-back/10006.webp'
import Access10 from '../../Images/Accessories-back/10008.webp'
import Access11 from '../../Images/Accessories-back/10010.webp'
import Access12 from '../../Images/Accessories-back/10012.webp'
const Accessories = () => {
  return (
    <div>
      <div className="extra11"></div>
       <div className='Access-main'>
        <div className="Access-main-1">
      <Card background={Access1} background1={Access7}/>
      <Card background={Access2} background1={Access8}/>
      <Card background={Access3} background1={Access9}/>
      <Card background={Access4} background1={Access10}/>
      <Card background={Access5} background1={Access11}/>
      <Card background={Access6} background1={Access12}/>
    </div>
    </div>
    <div className="extra11"></div>
    </div>
  )
}

export default Accessories
