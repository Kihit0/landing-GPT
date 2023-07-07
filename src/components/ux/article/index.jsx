import React from "react";
import "./index.css";

const Article = (props) => {
  const { image, title, createDate, index } = props;

  return (
    <div className="gpt3__blog-container__article">
      <div className="gpt3__blog-container__article-img">
        <img src={image} alt={`article${index}`} />
      </div>
      <div className="gpt3__blog-container__article-content">
        <div>
          <p>{createDate}</p>
          <h4>{title}</h4>
        </div>
        <p>Read full Article</p>
      </div>
    </div>
  );
};

export default Article;
