import { useState, useEffect } from "react";
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
      <h2 className="brandNameText">Solvalla stall</h2>

      {/* Desktop links */}
      {!isMobile && (
        <div className="navLinks">
          <h2>Kontakt</h2>
          <h2>Turer & priser</h2>
          <h2>Våra hästar</h2>
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
              <h2>Kontakt</h2>
              <h2>Turer & priser</h2>
              <h2>Våra hästar</h2>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
