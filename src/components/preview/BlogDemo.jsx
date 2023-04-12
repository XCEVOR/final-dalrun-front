import React from "react";
import { Link } from "react-router-dom";

const blogContent = [
  {
    demoImg: "blog-grid",
    routerPath: "/blog-grid",
    title: "Blog Grid",
    delayAnimationTime: "0",
  },
  {
    demoImg: "blog-listing",
    routerPath: "/blog-sidebar",
    title: "Blog Sidebar",
    delayAnimationTime: "100",
  },
  {
    demoImg: "blog-masonry",
    routerPath: "/blog-masonry",
    title: "Blog Masonry",
    delayAnimationTime: "200",
  },
  {
    demoImg: "blog-details",
    routerPath: "/blog-details",
    title: "Blog Details",
    delayAnimationTime: "300",
  },
  {
    demoImg: "blog-details-sidebar",
    routerPath: "/blog-details-sidebar",
    title: "Blog Details Sidebar",
    delayAnimationTime: "0",
  },
  {
    demoImg: "coming-soon1",
    routerPath: "/blog-details-v2",
    title: "Blog Details Version 2",
    delayAnimationTime: "100",
  },
  {
    demoImg: "coming-soon1",
    routerPath: "/blog-details-v3",
    title: "Blog Details Version 3",
    delayAnimationTime: "200",
  },
];

const BlogDemo = () => {
  return (
    <div
      className="row"
      style={{ "--bs-gutter-x": "2.5rem", "--bs-gutter-y": "4.66rem" }}
    >
      {blogContent.map((demo, i) => (
        <div
          className="col-6 col-lg-4 col-xl-3"
          data-aos="fade"
          data-aos-delay={demo.delayAnimationTime}
          key={i}
        >
          <div className="ptf-demo-item">
            <div className="ptf-demo-item__image">
              <Link
                to={demo.routerPath}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`assets/img/root/intro/${demo.demoImg}.png`}
                  alt={demo.title}
                  loading="lazy"
                />
              </Link>
            </div>
            <h5 className="ptf-demo-item__title">
              <Link
                to={demo.routerPath}
                target="_blank"
                rel="noopener noreferrer"
              >
                {demo.title}
              </Link>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogDemo;
