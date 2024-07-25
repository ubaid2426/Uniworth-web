import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./screens/home/Home";
import Contact from "./screens/contact/Contact";
import Services from "./screens/services/Service";
import About from "./screens/about/About";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/service">Services</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
