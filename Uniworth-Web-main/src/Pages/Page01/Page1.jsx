import React from 'react'
import MainCarousel from '../../components/Main-caurosel/Maincaurosel'
import Navbar from '../../components/Navbar/Navbar'
import Main from '../../components/Main/Main'
import Responsive from '../../components/NewArrival/Responsive'
import ActiveWear from '../../components/ActiveWear/ActiveWear'
import Shiping from '../../components/Shiping/Shiping'
import BrowseMore from '../../components/BrowseMore/BrowseMore'
import Maincard from '../../components/Maincard/Maincard'
import Footer from '../../components/Footer/Footer'
import Svg from '../../components/SVG/Svg'
import Svg1 from '../../components/Svg1/Svg1'
// import Login from '../../components/Login/Login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Page1 = () => {
    const color1='#ccc';
    const color2='#fff';
    const color3='#F9F9F9';
  return (
    <>
      {/* <Navbar/> */}
         <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      </Router>
      
  <MainCarousel/>
   <Svg main={color1} /> 
    <Main/>
   
    <Svg1 main={color1} />
    <Responsive/>
 
    <ActiveWear/>
    <Svg main={color1}/>
      <BrowseMore/>
      <Svg1 main={color1} clr={true}/>
   {/* <Shiping/> */}
   <Maincard/>
   <Svg main={color3}/>
      <Footer/>
    </>
  )
}

export default Page1
