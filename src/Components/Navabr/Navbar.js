import { useState } from "react";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import "./Navbar.css";
import { CropFree } from "@material-ui/icons";
import { FaChrome } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="container navbar">
      <div className="logo">
        <FaChrome color="red" size={33} />
        <span className="logo-text"> SHARIGAN</span>
        <CropFree style={{ color: "red" }} />
      </div>
      <menu className="logo">
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <a href="#">Home</a>{" "}
          </li>
          <li>
            <a href="#feature">Features</a>{" "}
          </li>
          <li>
            <a href="#download"> platform</a>{" "}
          </li>
          <li>
            <a href="#subscribe">Subscribe</a>{" "}
          </li>
          <li className="nav-btn">
            <Button text={"FAQ"} btnClass={"btn-dark"} href={"#faq"} />
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={handleToggle}>
        {showMenu ? (
          <RiCloseLine color="red" size={31} />
        ) : (
          <AiOutlineBars color="red" size={28} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
