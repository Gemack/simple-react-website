import React, { useEffect } from "react";
import { FaChrome } from "react-icons/fa";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import "./Header.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section id="header">
      <div className=" header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>the world's largest</span>
            <span>gathering of the </span>
            <span>uchiha clan globally</span>
          </h1>
          <p className="text-small text-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            nobis quam, nemo quae modi sapiente non, veniam porro vitae deleniti
            optio vero?
          </p>
          <div className="header-cta">
            <Button text={"Join Us"} btnClass={"btn-red"} href={"#"} />
            <Button text={"Our origin"} btnClass={"btn-dark"} href={"#faq"} />
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <FaChrome color="red" size={500} />
        </div>
        <div className="header-right-tab">
          <FaChrome color="red" size={300} />
        </div>
        <div className="header-right-mobile">
          <FaChrome color="red" size={200} />
        </div>
      </div>
    </section>
  );
};

export default Header;
