import React, { useState } from "react";
import "./navbar.css";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, isSignedIn } = useUser();
  const [menu, setMenu] = useState(false);
  const [language, setLanguage] = useState("english");

  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu); // Use functional update to toggle
    console.log("Menu toggled:", menu); // Debug line
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setMenu(false);
  };

  return (
    <div className="boxn">
      <div className="top">
        <div className="lef">
          <img
            src="https://legislative.gov.in/wp-content/themes/sdo-theme/images/emblem.svg"
            alt="Emblem"
          />
          <img src="l.svg" alt="Logo" />
          <button onClick={toggleMenu} className="ch">
            {language === "english" ? "Language" : "भाषा"}
          </button>
          {menu && (
            <div className="menu">
              <a href="#!" onClick={() => handleLanguageChange("hindi")}>
                हिंदी
              </a>
              <a href="#!" onClick={() => handleLanguageChange("english")}>
                English
              </a>
              <a href="#!" onClick={() => handleLanguageChange("telugu")}>
                తెలుగు
              </a>
            </div>
          )}
        </div>
        <div className="rig">
          {isSignedIn ? (
            <UserButton />
          ) : (
            <Link to="/sign">
              <button className="button-17" role="button">
                {language === "english" ? "Login" : "लॉगिन"}
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="bottom">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">{language === "english" ? "Home" : "होम"}</Link>
          </li>
          <li className="nav-item">
            <Link to="/feature">
              {language === "english" ? "Learn" : "सीखें"}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog">{language === "english" ? "Blog" : "ब्लॉग"}</Link>
          </li>
          <li className="nav-item">
            <Link to="/games">{language === "english" ? "Games" : "खेल"}</Link>
          </li>
          <li className="nav-item">
            <Link to="/tour">{language === "english" ? "Tour" : "यात्रा"}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
