import React from "react";
import "./Navbar.css"; // Import your navbar styles here
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    //   {isSignedIn ? <UserButton /> : <Link to="/sign">Profile</Link>}
  };

  return (
    <div className="boxn">
      <div className="top">
        <div className="lef">
          <img src="https://legislative.gov.in/wp-content/themes/sdo-theme/images/emblem.svg"></img>
          <img src="l.svg"></img>
          <a href="https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf">
            <button>Charter</button>
          </a>
        </div>
        <div className="rig">
          {isSignedIn ? (
            <UserButton />
          ) : (
            <Link to="/sign">
              <button className="button-17" role="button">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="bottom">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/feature">Learn</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link to="/games">Games</Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
