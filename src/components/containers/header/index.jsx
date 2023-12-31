import React from "react";
import "./index.css";
import People from "../../../assets/img/people.png";
import Ai from "../../../assets/img/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="submit">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={People} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-img">
        <img src={Ai} alt="Ai" />
      </div>
    </div>
  );
};

export default Header;
