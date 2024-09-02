import React from "react";
import "./footer.css"; // Adjust path as necessary
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section about">
          <h3>
            <img src="l.svg" alt="Barber Logo" />
          </h3>
          <p>Accelerator niche market technology business plan infographic.</p>
          <div className="socials">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <Link to={"/about"}>
              <li>
                <a href="#">About Us</a>
              </li>
            </Link>
            <li>
              <a href="#">Services</a>
            </li>
            <Link to={"contact"}>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="footer-section contact">
          <address>
            <p>1174 Farnum Road, New York, NY, 10040</p>
            <p>(+91) 212-569</p>
            <p>(+91) 237-901</p>
            <p>
              Email: <a href="mailto:info@barber.com">info@barber.com</a>
            </p>
            <p>
              Email: <a href="mailto:contact@barber.com">contact@barber.com</a>
            </p>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Barber. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
