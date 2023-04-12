import React from "react";
import SocialTwo from "../social/SocialTwo";

const BlogPostAuthor = () => {
  return (
    <div className="ptf-about-author">
      <div className="ptf-about-author__avatar">
        <img
          src="assets/img/root/author-avatar.png"
          alt="author"
          loading="lazy"
        />
      </div>
      <div className="ptf-about-author__content">
        <div className="ptf-about-author__header">
          <h6>Eden Hazard</h6>
          <span>Content Editor</span>
        </div>
        <div className="ptf-about-author__text">
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum sed ut perspiciatis
            unde. Lorem ispum dolor sit amet.
          </p>
        </div>
        <div className="has-black-color blog-social">
          <SocialTwo />
          {/* <!--Social Icon--> */}
        </div>
      </div>
    </div>
  );
};

export default BlogPostAuthor;
