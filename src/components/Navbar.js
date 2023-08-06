import { React, useState } from "react";
import { Link } from "react-router-dom";

// Logo should be a svg file
// https://www.freecodecamp.org/news/use-svg-images-in-css-html/
import logo from "../images/Logo.png";
import "./Navbar.css";

function Navbar() {
  // for mobile hamburger menue
  const [isShown, setIsShown] = useState(false);

  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  // Define MobileMenu component
  const MobileMenu = () => {
    return (
      <nav className={"mobile-menu"}>
         <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      
        <Link to="/" onClick={toggleMobileMenu}>
          Home
        </Link>
        <Link to="/about" onClick={toggleMobileMenu}>
          About
        </Link>
        <Link to="/tours" onClick={toggleMobileMenu}>
          Tours
        </Link>
        <Link to="/support" onClick={toggleMobileMenu}>
          Support us
        </Link>
        <Link to="/contact" onClick={toggleMobileMenu}>
          Contact
        </Link>
      </nav>
    );
  };

  return (
    <div className="topnav">

     

      <div className="menu-right">

      {/* Desktop Menu, which only appears on large screens */}
      <nav className="menu">
        {/* <div className="active-link"> */}
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Tours">Tours</Link>

        <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

        <Link to="/Support">Support us</Link>

      <Link to="/contact">Contact</Link> 
      </nav>

      {/* This hamburger button only shows up on small screens. It is used to open the mobile menu */}
      <button className="show-mobile-menu-button" onClick={toggleMobileMenu}>
        &#8801;
      </button>

      {/* redering the mobile menu and the close button */}
      {isShown && <MobileMenu />}
      {/* close button */}
      {isShown && (
        <button className="close-mobile-menu-button" onClick={toggleMobileMenu}>
          &times;
        </button>
      )}
      




      </div>



    </div>
  );
}

export default Navbar;