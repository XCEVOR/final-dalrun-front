import React from "react";
import SearchBlog from "../../form/SearchBlog";
import NewsletterThree from "../../newsletter/NewsletterThree";
import Social from "../../social/Social";

import PopularPosts from "./PopularPosts";

const BlogSidebarPost = () => {
  return (
    <>
      <div className="ptf-widget ptf-widget-popular-posts">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <h4 className="ptf-widget-title">인기 대회</h4>
          <PopularPosts />
        </div>
      </div>
      {/* <!--Widget--> */}

   
      {/* <!--Widget--> */}

     
    </>
  );
};

export default BlogSidebarPost;
