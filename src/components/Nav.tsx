import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import hamburgerMenu from "../assets/hamburger-menu-bars-icon.svg";
import closeIcon from "../assets/xmark-solid-full.svg"

const Nav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  // Track viewport width to switch between desktop/mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false); // close menu if returning to desktop
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <Link to="/">
       <h2 className="brandNameText">Solvalla stall</h2>
      </Link>

      {/* Desktop links */}
      {!isMobile && (
        <div className="navLinks">
          <Link to="/contact">
            <h2>Kontakt</h2>
          </Link>
          <Link to="/tours-and-prices">
            <h2>Turer & priser</h2>
          </Link>
          <Link to="/our-horses">
            <h2>Våra hästar</h2>
          </Link>
        </div>
      )}

      {/* Mobile hamburger */}
      {isMobile && (
        <div className="mobileMenuWrapper">
          <img
            src={menuOpen ? closeIcon : hamburgerMenu}
            alt="Meny"
            className="hamburgerMenu"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          {/* Dropdown menu */}
          {menuOpen && (
            <div className="mobileDropdown">
              <Link to="/contact">
                <h2>Kontakt</h2>
              </Link>
              <Link to="/tours-and-prices">
                <h2>Turer & priser</h2>
              </Link>
              <Link to="/our-horses">
                <h2>Våra hästar</h2>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
