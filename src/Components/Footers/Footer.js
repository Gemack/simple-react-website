import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaChrome,
} from "react-icons/fa";
import { CropFree } from "@material-ui/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer">
        <div className="footer-box">
          <h4>Links</h4>
          <div className="footer-links">
            <a href="#">Support</a>
            <a href="#">About</a>
            <a href="#">Learn</a>
            <a href="#">Hosting</a>
            <a href="#">Messanger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact us</h4>
          <div className="footer-contact">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Abuja Nigeria
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; phone: +2348103948501
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: sharigan@info.com
            </p>
            <p>
              <FaGlobe /> &nbsp; website: www.sharigan.com
            </p>
          </div>
        </div>
        <div className="footer-box">
          <div className="footer-logo">
            <FaChrome color="red" size={33} />
            <span className="logo-text"> SHARIGAN</span>
            <CropFree style={{ color: "red" }} />
          </div>
          <p className="small-text">&copy; Copy 2020. SHARIGAN</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
