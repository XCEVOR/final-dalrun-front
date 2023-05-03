import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const blogContent = [
  {
    img: "work-1",
    categories: "Product",
    date: "Dec 15, 2021",
    title: "Minimalist Trends",
    comments: "12 Comments",
    author: "Admin",
  },
  // {
  //   img: "work-2",
  //   categories: "Inspiration",
  //   date: "Dec 15, 2021",
  //   title: "How to build photoshoots scene for product impress more",
  //   comments: "12 Comments",
  //   author: "Admin",
  // },
  // {
  //   img: "work-3",
  //   categories: "COMMUNITY",
  //   date: "Dec 7, 2021",
  //   title: "The role of leader in teamwork",
  //   comments: "12 Comments",
  //   author: "Admin",
  // },
  // {
  //   img: "work-4",
  //   categories: "Inspiration",
  //   date: "Dec 15, 2021",
  //   title: "Business Card, small but the most important",
  //   comments: "12 Comments",
  //   author: "Admin",
  // },
  // {
  //   img: "work-5",
  //   categories: "Inspiration",
  //   date: "Nov 7, 2021",
  //   title: "Simple Logos Collection",
  //   comments: "12 Comments",
  //   author: "Admin",
  // },
];

const Review2Row = () => {
  const [reviewList, setReviewList] = useState([]);

  const getAllShoeReviewList = async () => {
    const resp = await axios.get("http://localhost:3000/getAllShoeReviewList", {})
    console.log(resp.data)
    setReviewList(resp.data)
  }

  useEffect(() => {
    getAllShoeReviewList();
  }, [])

  return (
    <>
      {reviewList.map((review, i) => (
        <div className="grid-item" key={i}>
          {/* <!--Blog Post--> */}
          <article className="ptf-post ptf-post--style-3">
            <div className="ptf-post__media">
              <Link className="ptf-work__link" to={`/review-details/${review.shoereviewdetailSeq}`}></Link>
              <img
                src={`assets/img/dalrun-hc/${review.img}.jpg`}
                alt={review.shoereviewSeq}
                loading="lazy"
              />
            </div>
            <div className="ptf-post__content">
              <header className="ptf-post__header">
                <div className="ptf-post__meta">
                  <span className="cat">shoereviewdetailSeq: {review.shoereviewdetailSeq}</span>
                  <span className="date">{review.shoereviewdetailRegdate}</span>
                </div>
                <h3 className="ptf-post__title">
                  <Link to={`/review-details/${review.shoereviewdetailSeq}`}>{review.shoereviewdetailTitle}</Link>
                </h3>
              </header>
              <footer className="ptf-post__footer">
                <div className="ptf-post__info">
                  <Link className="comments" to={`/review-details/${review.shoereviewdetailSeq}`}>
                    {" "}
                    <i className="lnil lnil-comments"></i> {review.shoereviewdetailContent}
                  </Link>
                  <a className="author" href="#">
                    <i className="lnil lnil-user"></i>by
                    <span>{review.memId}</span>
                  </a>
                </div>
              </footer>
            </div>
          </article>
        </div>
      ))}
      {blogContent.map((val, i) => (
        <div className="grid-item" key={i}>
          {/* <!--Blog Post--> */}
          <article className="ptf-post ptf-post--style-3">
            <div className="ptf-post__media">
              <Link className="ptf-work__link" to="/review-details"></Link>
              <img
                src={`assets/img/dalrun-hc/${val.img}.jpg`}
                alt={val.categories}
                loading="lazy"
              />
            </div>
            <div className="ptf-post__content">
              <header className="ptf-post__header">
                <div className="ptf-post__meta">
                  <span className="cat">{val.categories}</span>
                  <span className="date">{val.date}</span>
                </div>
                <h3 className="ptf-post__title">
                  <Link to="/review-details">{val.title}</Link>
                </h3>
              </header>
              <footer className="ptf-post__footer">
                <div className="ptf-post__info">
                  <Link className="comments" to="/review-details">
                    {" "}
                    <i className="lnil lnil-comments"></i> {val.comments}
                  </Link>
                  <a className="author" href="#">
                    <i className="lnil lnil-user"></i>by
                    <span>{val.author}</span>
                  </a>
                </div>
              </footer>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default Review2Row;
