import React, { useEffect } from "react";
import "./Download.css";
import { SiGoogleearth } from "react-icons/si";
import { GiFireplace, GiEarthWorm } from "react-icons/gi";
import { IconContext } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section id="download">
      <div className="container download" data-aos="zoom-in-up">
        <h2>These are our platforms</h2>
        <p className="text-light">
          You can connect to the sharigan through this platform
        </p>
        <IconContext.Provider value={{ size: "20" }}>
          <div className="platform-icons">
            <div className="platform-icon">
              <SiGoogleearth color={"blue"} /> <p>Hyper-Earth</p>
            </div>
            <div className="platform-icon">
              <GiEarthWorm color={"gray"} /> <p>Earth-Worm</p>
            </div>
            <div className="platform-icon">
              <GiFireplace color={"red"} /> <p>Firestorm</p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Download;
