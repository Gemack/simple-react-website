import React from "react";
import "./Feature.css";
import { GiAbstract024 } from "react-icons/gi";
import Features from "./Features";
import { featureList } from "./Data";

const Feature = () => {
  return (
    <section id="feature">
      <div className="container feature">
        <div className="title">
          <GiAbstract024 color="red" size={30} />
          <h2>How core Features</h2>
          <p className="text-small">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            nobis quam, nemo quae modi sapiente non, veniam porro vitae deleniti
            optio vero?
          </p>
        </div>
        <div className="features-content">
          <div className="features-left">
            <GiAbstract024 color="red" size={400} data-aos="slide-up" />
            <span
              style={{
                display: "block",
                textAlign: "center",
                textDecoration: "underline",
                color: "red",
              }}
            >
              Genjustsu
            </span>
          </div>
          <div className="features-right">
            {featureList.map((feature) => (
              <Features
                key={feature.id}
                icon={feature.icon}
                heading={feature.headings}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
