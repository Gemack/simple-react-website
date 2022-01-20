import React, { useEffect } from "react";
import "./Features.css";
import { BsHexagon } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = ({ icon, heading, text }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="features">
      <div className="features-icon">
        <BsHexagon color="red" size={55} />
        <div className="inner-icon">{icon}</div>
      </div>
      <div className="features-text">
        <h3>{heading}</h3>
        <p className="text-small">{text}</p>
      </div>
    </div>
  );
};

export default Features;
