import React, { useState } from "react";
import "./Question.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = ({ title, answer }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="container question">
      <div className="question-title">
        <h4>{title}</h4>
        <button className="questioin-icon" onClick={handleClick}>
          {show ? (
            <AiOutlineMinus color="blue" />
          ) : (
            <AiOutlinePlus color="blue" />
          )}
        </button>
      </div>
      <div className="question-answer">
        {show && <p className="text-dark">{answer}</p>}
      </div>
    </div>
  );
};

export default Question;
