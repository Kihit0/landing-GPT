import React from "react";
import "./index.css";

const Feature = (props) => {
  const { title, text } = props;

  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <h2>{title}</h2>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
