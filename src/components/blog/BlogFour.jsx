import React from "react";
import { Link } from "react-router-dom";

const blogContent = [
  {
    img: "post-4",
    cat: "Product",
    date: "Dec 15, 2021",
    title: "ite inspiration with Swiss style",
    delayAnimation: "0",
  },
  {
    img: "post-3",
    cat: "Inspiration",
    date: "Dec 7, 2021",

    title: "The evolution of Swiss style in Interaction Design",
    delayAnimation: "100",
  },
];

const BlogFour = () => {
  return (
    <>
      {blogContent.map((val, i) => (
        <div className="col-md" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.delayAnimation}
          >
            <div>
              {/* <!--Blog Post--> */}
              <article
                className="ptf-post ptf-post--style-1"
                style={{ "--ptf-post-header-indent": "3.125rem" }}
              >
                <div className="ptf-post__media">
                  <Link className="ptf-work__link" to="/blog-details"></Link>
                  <img
                    src={`assets/img/blog/grid/${val.img}.png`}
                    alt=""
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
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogFour;
