import React from "react";
import SearchBlog from "../../form/SearchBlog";
import NewsletterThree from "../../newsletter/NewsletterThree";
import Social from "../../social/Social";
import Categories from "./Categories";
import PopularPosts from "./PopularPosts";

const BlogSidebarPost = () => {
  return (
    <>
      {/* <!--Widget--> */}
      <div className="ptf-widget ptf-widget-search">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <h4 className="ptf-widget-title">Search</h4>
          <SearchBlog />
        </div>
      </div>
      {/* <!--Widget--> */}

      <div className="ptf-widget ptf-widget-socials">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <h4 className="ptf-widget-title">Social</h4>
          <Social />
        </div>
      </div>
      {/* <!--Widget--> */}

      <div className="ptf-widget ptf-widget-popular-posts">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <h4 className="ptf-widget-title">Popular Posts</h4>
          <PopularPosts />
        </div>
      </div>
      {/* <!--Widget--> */}

      <div className="ptf-widget ptf-widget-newsletter">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <h4 className="ptf-widget-title">Newsletter</h4>
          <p>Signup to be the first to hear about exclusive deals.</p>
          <NewsletterThree />
        </div>
      </div>
      {/* <!--Widget--> */}

      <div className="ptf-widget ptf-widget-categories">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <h4 className="ptf-widget-title">Categories</h4>
          <Categories />
        </div>
      </div>
    </>
  );
};

export default BlogSidebarPost;
