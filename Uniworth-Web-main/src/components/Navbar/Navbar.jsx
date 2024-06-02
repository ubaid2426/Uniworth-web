import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormClose } from "react-icons/gr";
import './Navbar.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Login from '../Login/Login';
// import logo from '.'
const Navbar = (props) => {
   const[toggleMenu, setToggleMenu] = useState(false);
  //  const Navbar = () => {

    const [showLogin, setShowLogin] = useState(false);
  
    const handleLoginClick = () => {
      setShowLogin(true);
    };
  
    const handleLoginClose = () => {
      setShowLogin(false);
    };
  
  return (
    <>
    {/* <Router>
      <Routes>
            <Route path="/login" element={<Login />} />
      </Routes>
    </Router> */}
  <nav className='app__navbar'>
  <ul class="menu cf">
  <li><a href="">Winter</a>
  <ul class="submenu">
      <li><a href="">SeatShirt</a></li>
      <li><a href="">Sweater</a></li>
      <li><a href="">Polo</a></li>
      <li><a href="">Basic tees</a></li>
      <li><a href="">Casual Shirt</a></li>
      <li><a href="">Men Short</a></li>
    </ul>
  </li>
  <li>
    <a href="">Shirt</a>
    <ul class="submenu">
      <li><a href="">formal Shirt</a></li>
      <li><a href="">Plain shirt</a></li>
      <li><a href="">Check Shirt</a></li>
      <li><a href="">Stripe Shirt</a></li>
      <li><a href="">Double Cuff</a></li>
      <li><a href="">The White club</a></li>
    </ul>
  </li>
  <li><a href="">Trousers</a>
  <ul class="submenu">
      <li><a href="">Formal Trouser</a></li>
      <li><a href="">Cotton Trouser</a></li>
      <li><a href="">Mens Chinos</a></li>
      <li><a href="">Straight Fit</a></li>
      <li><a href="">Smart Fit</a></li>
      <li><a href="">Travels</a></li>
    </ul>
  </li>
  <li><a href="">Ethnic</a>
  <ul class="submenu">
      <li><a href="">Suit</a></li>
      <li><a href="">Lapel Pin</a></li>
      <li><a href="">Coat</a></li>
      <li><a href="">Safari Suit</a></li>
    </ul>	
  </li>
  <li><a href="">Active</a>
  <ul class="submenu">
      <li><a href="">Kameez Shalwar</a></li>
      <li><a href="">Kurta Pajama</a></li>
      <li><a href="">Ethnic Combo </a></li>
      <li><a href="">SS Kurta</a></li>
      <li><a href="">Saleem Sheikh</a></li>
      <li><a href="">SS Waitcoat</a></li>
      <li><a href="">Fancy Kammeez</a></li>
    </ul>	
  </li>
  <li><a href="">LoungWear</a>
  <ul class="submenu">
      <li><a href="">Casual Pajama</a></li>
      <li><a href="">Tshirt&PAjama</a></li>
    </ul>	
  </li>
  <li><a href="">Accessories</a>
  <ul class="submenu">
      <li><a href="">UnderGgarmints</a></li>
      <li><a href="">Ties</a></li>
      <li><a href="">Tie Pin</a></li>
      <li><a href="">Belt</a></li>
      <li><a href="">Wallets</a></li>
      <li><a href="">Others</a></li>
    </ul>
  </li>
  <li><a href="">summer</a>
  <ul class="submenu">
      <li><a href="">T-shirts</a></li>
      <li><a href="">Men Shorts</a></li>
      <li><a href="">Casual shirt</a></li>
      <li><a href="">Polo</a></li>
      <li><a href="">Linen shirt</a></li>
      <li><a href="">Others</a></li>
    </ul>	
  </li>
  <li><a href="">Ceremonial</a>
  <ul class="submenu">
      <li><a href="">prince Coats</a></li>
      <li><a href="">Sherwani</a></li>
      <li><a href="">Designer Waistcoats</a></li>
      <li><a href="">Fancy Stole</a></li>
    </ul>	
  </li>
</ul>
        < div className='app__navbar-login'>
  <a href='/login' className='p__opensans' onClick={handleLoginClick}> Log In</a>
  </div>
  {/* {showLogin && <Login onClose={handleLoginClose} />} */}
  <div className='app__navbar-smallscreen'>
 < GiHamburgerMenu color='#000' margin-left='50px' fontSize={40} onClick={() => setToggleMenu(true)} />
{toggleMenu && (
 <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>  
  <GrFormClose color='#000'  fontSize={35} className="overlay__close" onClick={() => setToggleMenu(false)} />
  <ul class="app__navbar-smallscreen_links">
  <li><a href="">Winter-Collection</a>
  <ul class="sub">
      <li><a href="">SeatShirt</a></li>
      <li><a href="">SWeater</a></li>
      <li><a href="">Submenu item</a></li>
      <li><a href="">Submenu item</a></li>
      <li><a href="">Submenu item</a></li>
      <li><a href="">Submenu item</a></li>
    </ul>	
  </li>
  <li>
    <a href="">Shirt</a>
    <ul class="sub">
      <li><a href="">Submenu item</a></li>
      <li><a href="">Submenu item</a></li>
      <li><a href="">Submenu item</a></li>
      <li><a href="">Submenu item</a></li>
    </ul>
  </li>
  <li><a href="">Trousers</a>
  <ul class="sub">
      <li><a href="">Submenu item</a></li>
      <li><a href="">Submenu item</a></li>
      <li><a href="">Submenu item</a></li>
      <li><a href="">Submenu item</a></li>
    </ul>
  </li>
  <li><a href="">Ethnic Wear</a>
  <ul class="sub">
      <li><a href="">Submenu item</a></li>
      <li><a href="">Submenu item</a></li>
      <li><a href="">Submenu item</a></li>
      <li><a href="">Submenu item</a></li>
    </ul>	
  </li>
  <li><a href="">Active Wear</a>
  <ul class="sub">
      <li><a href="">Submenu item</a></li>
      <li><a href="">Submenu item</a></li>
      <li><a href="">Submenu item</a></li>
      <li><a href=""></a></li>
    </ul>	
  </li>
  <li><a href="">LoungWear</a>
  <ul class="sub">
      <li><a href="">Casual Pajama</a></li>
      <li><a href="">T-shirt & PAjama</a></li>
    </ul>	
  </li>
  <li><a href="">Accessories</a>
  <ul class="sub">
      <li><a href="">UnderGgarmints</a></li>
      <li><a href="">Ties</a></li>
      <li><a href="">Tie Pin</a></li>
      <li><a href="">Belt</a></li>
      <li><a href="">Wallets</a></li>
      <li><a href="">Others</a></li>
    </ul>
  </li>
  <li><a href="">summer</a>
  <ul class="sub">
      <li><a href="">T-shirts</a></li>
      <li><a href="">Men Shorts</a></li>
      <li><a href="">Casual shirt</a></li>
      <li><a href="">Polo</a></li>
      <li><a href="">Linen shirt</a></li>
      <li><a href="">Others</a></li>
    </ul>	
  </li>
  <li><a href="">Ceremonial</a>
  <ul class="sub">
      <li><a href="">prince Coats</a></li>
      <li><a href="">Sherwani</a></li>
      <li><a href="">Designer Waistcoats</a></li>
      <li><a href="">Fancy Stole</a></li>
    </ul>	
  </li>
</ul>
 </div>
)
}
  </div>
      </nav>
      </>
)
}

export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { GrFormClose } from "react-icons/gr";
// import './Navbar.css';

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   return (
//     <nav className='app__navbar'>
//       <ul className="menu cf">
//         <li>
//           <a href="#">Winter</a>
//           <ul className="submenu">
//             <li><a href="#">SeatShirt</a></li>
//             <li><a href="#">Sweater</a></li>
//             <li><a href="#">Polo</a></li>
//             <li><a href="#">Basic tees</a></li>
//             <li><a href="#">Casual Shirt</a></li>
//             <li><a href="#">Men Short</a></li>
//           </ul>
//         </li>
//         {/* Add similar structure for other categories */}
//         <li>
//           <a href="#">Shirt</a>
//           <ul className="submenu">
//             <li><a href="#">Formal Shirt</a></li>
//             <li><a href="#">Plain Shirt</a></li>
//             <li><a href="#">Check Shirt</a></li>
//             <li><a href="#">Stripe Shirt</a></li>
//             <li><a href="#">Double Cuff</a></li>
//             <li><a href="#">The White Club</a></li>
//           </ul>
//         </li>
//         {/* Add the rest of your menu items similarly */}
//       </ul>

//       <div className='app__navbar-login'>
//         <Link to='/login'>Login</Link>
//       </div>

//       <div className='app__navbar-smallscreen'>
//         <GiHamburgerMenu color='#000' fontSize={27} onClick={() => setToggleMenu(true)} />
//         {toggleMenu && (
//           <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
//             <GrFormClose color='#fff' fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
//             <ul className="app__navbar-smallscreen_links">
//               <li>
//                 <a href="#">Winter-Collection</a>
//                 <ul className="sub">
//                   <li><a href="#">SeatShirt</a></li>
//                   <li><a href="#">Sweater</a></li>
//                   <li><a href="#">Submenu item</a></li>
//                   <li><a href="#">Submenu item</a></li>
//                   <li><a href="#">Submenu item</a></li>
//                   <li><a href="#">Submenu item</a></li>
//                 </ul>
//               </li>
//               {/* Add similar structure for other categories */}
//               <li>
//                 <a href="#">Shirt</a>
//                 <ul className="sub">
//                   <li><a href="#">Submenu item</a></li>
//                   <li><a href="#">Submenu item</a></li>
//                   <li><a href="#">Submenu item</a></li>
//                   <li><a href="#">Submenu item</a></li>
//                 </ul>
//               </li>
//               {/* Add the rest of your menu items similarly */}
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
