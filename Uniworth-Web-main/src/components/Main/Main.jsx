import React from 'react'
import CardDisplay from '../CardDisplay/CardDisplay'
import './Main.css'
// import background1 from '../../Images/10001.webp'
import background1 from  '../../Images/10001.webp'
import background2 from'../../Images/10002.jpg'
import background3 from '../../Images/10003.jpg'
import background4 from '../../Images/10004.jpg'
import background5 from '../../Images/10005.jpg'
import background6 from '../../Images/10006.jpg'
const Main = () => {
  return (
    <div>
      <div className="extra"></div>
      <div className="con">
        <div className="con1">
        {/* <main className='joker'> */}

{/* <CardDisplay name='Winter Collection' background1='background1'/> */}
<CardDisplay name='Winter Collection' background1={background1} link="#Winter_collection"/>
<CardDisplay name='Formal Shirt' background1={background2} link='#Formal Shirt'/>
<CardDisplay name='Mens Shawls' background1={background3} link='Mens Shawls'/>
<CardDisplay name='Ethnic' background1={background4} link='Ethnics'/>
<CardDisplay name='Accessories' background1={background5} link='Accessories'/>
<CardDisplay name='Trousers' background1={background6} link='Trousers'/>
{/* </main> */}
        </div>
      </div>
      <div className="extra1"></div>
    </div>
  )
}

export default Main
