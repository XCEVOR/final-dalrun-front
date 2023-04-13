import React from "react";
import { Link } from "react-router-dom";

const blogContent = [
  {
    img: "post-10",
    cat: "Product",
    date: "Dec 15, 2021",
    title: "Review product BWIB",
  },
  {
    img: "post-2",
    cat: "Inspiration",
    date: "Dec 7, 2021",
    title: " Site inspiration with Swiss style",
  },
  {
    img: "post-3",
    cat: "Community",
    date: "Dec 7, 2021",
    title: "Minimalist Trends",
  },
];

const BlogTwo = () => {
  return (
    <>
      {blogContent.map((val, i) => (
        <div className="col-xl-4 col-lg-4" key={i}>
          <article className="ptf-post ptf-post--style-1">
            <div className="ptf-post__media">
              <Link className="ptf-work__link" to="/blog-details"></Link>
              <img
                src={`assets/img/blog/grid/${val.img}.png`}
                alt="blog"
                loading="lazy"
              />
            </div>
            <div className="ptf-post__content">
              <header className="ptf-post__header">
                <div className="ptf-post__meta">
                  <span className="cat">{val.cat}</span>
                  <span className="date">{val.date}</span>
                </div>
                <h3 className="ptf-post__title">
                  <Link to="/blog-details">{val.title}</Link>
                </h3>
              </header>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default BlogTwo;
