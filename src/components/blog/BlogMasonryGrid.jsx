import React from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";

const blogContent = [
  {
    img: "post-1",
    cat: "Product",
    date: "Dec 15, 2021",
    title: "Review product BWIB",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam dignissim tortor vitae mattis tempor...`,
  },
  {
    img: "post-2",
    cat: "Inspiration",
    date: "Dec 15, 2021",
    title: "The evolution of Swiss style in Interaction Design",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam dignissim tortor vitae mattis tempor...`,
  },
  {
    img: "post-3",
    cat: "Community",
    date: "Dec 15, 2021",
    title: "Design Trends - Stage 14",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam dignissim tortor vitae mattis tempor...`,
  },
  {
    img: "post-4",
    cat: "Inspiration",
    date: "Dec 15, 2021",
    title: "Site inspiration with Swiss style",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam dignissim tortor vitae mattis tempor...`,
  },
  {
    img: "post-5",
    cat: "Inspiration",
    date: "Dec 15, 2021",
    title: " Contrast in Brand Design",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam dignissim tortor vitae mattis tempor...`,
  },
  {
    img: "post-6",
    cat: "Inspiration",
    date: "Dec 15, 2021",
    title: "Minimalist Trends",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam dignissim tortor vitae mattis tempor...`,
  },
  {
    img: "post-7",
    cat: "Inspiration",
    date: "Dec 15, 2021",
    title: "The role of leader inteamwork",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam dignissim tortor vitae mattis tempor...`,
  },
  {
    img: "post-8",
    cat: "Community",
    date: "Dec 15, 2021",
    title: "Simple Logos Collection",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam dignissim tortor vitae mattis tempor...`,
  },
  {
    img: "post-9",
    cat: "Inspiration",
    date: "Dec 15, 2021",
    title: "  How to build photoshoots scene for product impress more",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam dignissim tortor vitae mattis tempor...`,
  },
  {
    img: "post-10",
    cat: "Product",
    date: "Dec 15, 2021",
    title: "Krown, Clothing & Accessories",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam dignissim tortor vitae mattis tempor...`,
  },
  {
    img: "post-11",
    cat: "Inspiration",
    date: "Dec 15, 2021",
    title: " Graphic in the life",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam dignissim tortor vitae mattis tempor...`,
  },
  {
    img: "post-12",
    cat: "Community",
    date: "Dec 15, 2021",
    title: "UX Process",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam dignissim tortor vitae mattis tempor...`,
  },
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  768: 2,
  500: 1,
};

const BlogMasonryGrid = () => {
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {blogContent.map((item, i) => (
          <div className="grid-item" key={i}>
            {/* <!--Blog Post--> */}
            <article className="ptf-post ptf-post--style-2">
              <div className="ptf-post__media">
                <img
                  src={`assets/img/blog/masonry/${item.img}.png`}
                  alt=""
                  loading="lazy"
                />
                <div className="ptf-post__media__content">
                  <header className="ptf-post__header">
                    <div className="ptf-post__meta">
                      <span className="cat">{item.cat}</span>
                      <span className="date">{item.date}</span>
                    </div>
                    <h3 className="ptf-post__title">{item.title}</h3>
                  </header>
                </div>
              </div>
              {/* End .ptf-post */}
              <div className="ptf-post__content">
                <header className="ptf-post__header">
                  <div className="ptf-post__meta">
                    <span className="cat">{item.cat}</span>
                    <span className="date">{item.date}</span>
                  </div>
                  <h3 className="ptf-post__title">
                    <Link to="/blog-details">{item.title}</Link>
                  </h3>
                </header>
                <div className="ptf-post__excerpt">
                  <p>{item.description}</p>
                </div>
                <footer className="ptf-post__footer">
                  <Link className="ptf-read-more-link" to="/blog-details">
                    Continue
                  </Link>
                </footer>
              </div>
              {/* End .ptf-post__content */}
            </article>
          </div>
        ))}
      </Masonry>
    </>
  );
};

export default BlogMasonryGrid;
