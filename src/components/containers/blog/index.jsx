import React from "react";
import "./index.css";
import { Article } from "../../ux";
import { article1, article2, article3, article4, article5 } from "./imports.js";

const articleData = [
  {
    image: article2,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    createDate: "Sep 26, 2021",
  },
  {
    image: article3,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    createDate: "Sep 26, 2021",
  },
  {
    image: article4,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    createDate: "Sep 26, 2021",
  },
  {
    image: article5,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    createDate: "Sep 26, 2021",
  },
];

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h2 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h2>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
          <Article {...{
            image: article1,
            title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
            createDate: 'Sep 26, 2021',
            index: 0
          }} />
        </div>
        <div className="gpt3__blod-container__groupB">
          {articleData.map((article, index) => {
            return (
              <Article
                {...{
                  image: article.image,
                  title: article.title,
                  createDate: article.createDate,
                  key: index,
                  index
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
