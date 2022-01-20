import React, { useEffect } from "react";
import { GiAbstract032 } from "react-icons/gi";
import "./Faq.css";
import { questions } from "./data";
import Question from "./Question";

import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div>
      <section id="faq">
        <div className="container faq" data-aos="fade-right">
          <div className="title">
            <GiAbstract032 color="red" size={30} />
            <h2>Confused?</h2>
            <p className="text-small">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              nobis quam, nemo quae modi sapiente non, veniam porro vitae
              deleniti optio vero?
            </p>
          </div>
          <div className="questions">
            {questions.map((question) => (
              <Question title={question.title} answer={question.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
