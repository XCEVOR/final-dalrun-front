import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import BlogComment from "../../../components/blog/BlogComment";
import BlogCommentForm from "../../../components/blog/BlogCommentForm";
import BlogPostAuthor from "../../../components/blog/BlogPostAuthor";
import RelatedPost from "../../../components/blog/RelatedPost";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import HeaderDefault from "../../../components/header/HeaderDefault";
import ImageGridTwo from "../../../components/image-grid/ImageGridTwo";
import SocialFour from "../../../components/social/SocialFour";

const BlogDetails = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Moonex - Bog Post Details</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <article className="ptf-single-post">
            {/* <!--Post Header--> */}
            <header className="ptf-single-post__header ptf-single-post__header--style-1">
              <div className="container-xxl">
                <h1 className="ptf-single-post__title">
                  Simple Logo Collections
                </h1>
                <div className="ptf-single-post__meta">
                  <span className="cat">Inspiration</span>
                  <span className="date">Dec 7, 2021</span>
                </div>
              </div>
            </header>

            {/* <!--Post Media--> */}
            <div className="ptf-single-post__media">
              <div className="container-xxl">
                <img
                  src="assets/img/blog/single-post/post-media-1.png"
                  alt="blog post"
                  loading="lazy"
                />
              </div>
            </div>

            {/* <!--Post Wrapper--> */}
            <div className="ptf-single-post__wrapper">
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-8 offset-xl-2">
                    {/* <!--Post Info--> */}
                    <div className="ptf-single-post__info">
                      <a className="author" href="#">
                        <i className="lnil lnil-user"></i>by <span>Admin</span>
                      </a>
                      <a className="view" href="#">
                        <i className="lnil lnil-eye"></i>5,6k Views
                      </a>
                      <a className="comments" href="#">
                        <i className="lnil lnil-comments"></i>3 Comments
                      </a>
                      <a className="report" href="#">
                        <i className="lnil lnil-warning"></i>Report
                      </a>
                    </div>

                    {/* <!--Post Excerpt--> */}
                    <div className="ptf-single-post__excerpt">
                      To mark the first UK show of artist Henri Barande, graphic
                      designer{" "}
                      <span className="has-accent-1">Pavel Murren</span> and
                      German studio Schultzschultz have created The Lodge
                      Wooden.
                    </div>

                    {/* <!--Post Content--> */}
                    <div className="ptf-single-post__content">
                      <p>
                        Today most people get on average 4 to 6 hours of
                        exercise every day, and make sure that everything they
                        put in their mouths is not filled with sugars or
                        preservatives, but they pay no attention to their mental
                        health, no vacations, not even the occasional long
                        weekend. All of this for hopes of one day getting that
                        big promotion.
                      </p>
                      <p>
                        Coventry is a city with a thousand years of history that
                        has plenty to offer the visiting tourist. Located in the
                        heart of Warwickshire.
                      </p>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                      ></div>

                      <ImageGridTwo />

                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                      ></div>
                      <p>
                        The short answer is yes. According to Kross, when you
                        think of yourself as another person, it allows you lorem
                        ispumgive yourself more. Notre dame at sumeobjective,
                        helpful feedback.
                      </p>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{
                          "--ptf-xxl": "6.25rem",
                          "--ptf-md": "3.125rem",
                        }}
                      ></div>
                      {/* <!--Twitter Review--> */}
                      <div className="ptf-twitter-review ptf-twitter-review--style-2">
                        <div className="ptf-twitter-review__header">
                          <div className="ptf-twitter-review__avatar">
                            <img
                              src="assets/img/root/twitter-avatar.png"
                              alt="avatar"
                              loading="lazy"
                            />
                          </div>
                          <div className="ptf-twitter-review__meta">
                            <h6 className="ptf-twitter-review__author">
                              Thiago Alcantara
                            </h6>
                            <div className="ptf-twitter-review__info">
                              <a href="#">@thiago.lfc</a> - 15 Dec, 2022
                            </div>
                          </div>
                          <div className="ptf-twitter-review__icon">
                            <i className="socicon-twitter"></i>
                          </div>
                        </div>
                        <div className="ptf-twitter-review__content">
                          <p>
                            <a href="#">@moonex</a> - a studio with passionate,
                            profressional & full creativity. Much more things
                            that i’m expect. Really awesome & satisfied, alway
                            recommended!
                          </p>
                        </div>
                      </div>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
                      ></div>
                      <h3>Defaulting to Mindfulness</h3>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{
                          "--ptf-xxl": "1.875rem",
                          "--ptf-md": "1.5625rem",
                        }}
                      ></div>
                      <p>
                        Cray post-ironic plaid, Helvetica keffiyeh tousled
                        Carles banjo before they sold out blog photo booth Marfa
                        semiotics Truffaut. Mustache Schlitz next level blog
                        Williamsburg, deep v typewriter tote bag Banksy +1
                        literally.
                      </p>
                      <ul style={{ lineHeight: "2" }}>
                        <li>
                          Welsh novelist Sarah Waters sums it up eloquently
                        </li>
                        <li>
                          In their classic book, Creativity in Business, based
                          on a popular course they co-taught
                        </li>
                        <li>Novelist and screenwriter Steven Pressfield</li>
                      </ul>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.875rem" }}
                      ></div>
                      <p>
                        That immediately brought to mind one of{" "}
                        <a
                          className="text-decoration-underline has-accent-4"
                          href="#"
                        >
                          my fondest
                        </a>{" "}
                        memories, involving my daughter when she was just a
                        toddler of one.
                      </p>
                    </div>

                    {/* <!--Post Footer--> */}
                    <footer className="ptf-single-post__footer">
                      {/* <!--Post Tags--> */}
                      <div className="ptf-post-tags">
                        <a href="#">WordPress</a>
                        <a href="#">Theme</a>
                        <a href="#">Creative</a>
                      </div>
                      {/* <!--Post Socials--> */}
                      <div className="ptf-post-socials">
                        <span>Share on</span>
                        <SocialFour />
                      </div>
                    </footer>

                    {/* <!--About Author--> */}
                    <BlogPostAuthor />
                    {/* End .ptf-about-author */}

                    {/* <!--Related Posts--> */}
                    <div className="ptf-related-posts">
                      <h2 className="ptf-related-posts__title">
                        Related Posts
                      </h2>
                      <div className="ptf-isotope-grid">
                        <div
                          className="row"
                          style={{ "--bs-gutter-y": "2rem" }}
                        >
                          <RelatedPost />
                        </div>
                      </div>
                    </div>
                    {/* End .ptf-related-posts */}

                    {/* <!--Comments--> */}
                    <section className="ptf-page-comments">
                      {/* <!--Comments list--> */}
                      <div className="ptf-page-comments__list">
                        <h2 className="ptf-page-comments__title">
                          03 Comments:
                        </h2>
                        <BlogComment />
                      </div>

                      {/* <!--Comments form--> */}
                      <div className="ptf-page-comments__form">
                        <h2 className="ptf-page-comments__title">
                          Leave a comment:
                        </h2>
                        <BlogCommentForm />
                      </div>
                    </section>

                    {/* <!--Post Navigation--> */}
                    <div className="ptf-post-navigation ptf-post-navigation--style-1">
                      <span>Next Post</span>
                      <Link className="h1 ptf-filled-link" to="/blog-details-sidebar">
                        Minimalist Trends
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      {/* End .main */}

      {/* <!--Footer--> */}
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <Footer />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetails;
