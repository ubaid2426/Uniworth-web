import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Svg1 from "../../components/svg1/Svg1"
import "./Home.css"
// import AppAssets from '../../core/App_assests'
const Home = () => {
  return (
    <>
          <div className="home-main">
              <div className="home-m-1">
                  {/* <img src="../../assets/Images/10001.jpg" alt="where i am"/> */}
              <Navbar/>
                  <h1>one</h1>
                   <Svg1/>
              </div>
              <div className="home-m-2">
                 {/* <Svg1/> */}
                   <h1>two</h1>
              </div>
              <div className="home-m-3">
                   <h1>thhree</h1>
              </div>
              <div className="home-m-4">
                   <h1>four</h1>
              </div>
              <div className="home-m-5">
                   <h1>five</h1>
              </div>
              <div className="home-m-6">
                   <h1>footer</h1>
              </div>
      </div>
    </>
  )
}

export default Home
