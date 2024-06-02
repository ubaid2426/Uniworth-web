import React from 'react'
import CardDisplay from '../CardDisplay/CardDisplay'
import './Maincard.css'
import background1 from  '../../Images/maincard/10001.jpg'
import background2 from'../../Images/maincard/10002.jpg'
import background3 from '../../Images/maincard/10003.jpeg'
const Maincard = () => {
  return (
    <div>
      <div className="maincard">
        <div className="maincard1">
<CardDisplay name='Made To Measure' background1={background3} link="#made to measure"/>
<CardDisplay name='Uniworth Black' background1={background2} link='#uniworth black'/>
<CardDisplay name='Ceremonial' background1={background1} link='#Ceremonial'/>
{/* </main> */}
        </div>
      </div>
    </div>
  )
}

export default Maincard
