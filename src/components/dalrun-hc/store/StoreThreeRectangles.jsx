import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const blogContent = [
  {
    img: "post-1",
    cat: "Product",
    date: "Dec 15, 2021",
    title: "Review product BWIB",
  },
  {
    img: "post-2",
    cat: "Inspiration",
    date: "Dec 7, 2021",
    title: "Contrast in Brand Design",
  },
  {
    img: "post-3",
    cat: "Community",
    date: "Dec 7, 2021",
    title: "The evolution of Swiss style in Interaction Design",
  },
  {
    img: "post-4",
    cat: "Product",
    date: "Dec 15, 2021",
    title: "Site inspiration with Swiss style",
  },
  {
    img: "post-5",
    cat: "Inspiration",
    date: "Dec 7, 2021",
    title: "Minimalist Trends",
  },
  {
    img: "post-6",
    cat: "Community",
    date: "Dec 7, 2021",
    title: "Design Trends - Stage 14",
  },
  {
    img: "post-7",
    cat: "Product",
    date: "Dec 15, 2021",
    title: "Business Card, small but the most important",
  },
  {
    img: "post-8",
    cat: "Inspiration",
    date: "Dec 7, 2021",
    title: "The role of leader in teamwork",
  },
  {
    img: "post-9",
    cat: "Community",
    date: "Dec 7, 2021",
    title: "Simple Logos Collection",
  },
];

const StoreThreeRectangles = () => {
  const [checkbox_DisplayMode, setCheckbox_DisplayMode] = useState(true);  // TEST MODE

  const [productList, setProductList] = useState([]);

  const getProductList = () => {
    axios.get("${process.env.REACT_APP_API_URL}/allProductListDeduplication", {})
    .then (function (resp) {
      console.log("allProductListDeduplication resp: ", resp.data);
      setProductList(resp.data);
    })
    .catch (function (err) {
      alert(err);
    })
  }

  useEffect (function () {
    getProductList();
  }, [])

  return checkbox_DisplayMode 
  // USER_MODE
  ? (
    <>          <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE
    <div className="threerectangles-grid">

        {/* 서버 데이터 */}
        {productList.map((singleproduct, i) => (
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={100}
            key={i}
          >
            {/* <!--Team Member--> */}
            <div className="ptf-team-member ptf-team-member--has-effect">
              <div className="ptf-team-member__avatar products_2">
                {/* <div className="shadow-effect"></div> */}
                <Link to={`/store-details/${singleproduct.productCode}`} rel="noopener noreferrer">
                {/* <a href="#"> */}
                  {" "}
                  <img
                    // src={`assets/img/dalrun-hc/store/storedetails/555966_338_ss_01.avif`}
                    src={`${process.env.REACT_APP_API_URL}/dalrun-hc/store/products/${singleproduct.productCode}/${singleproduct.productCode}-01.png`}
                    alt={singleproduct.productName}
                    loading="lazy"
                  />
                {/* </a> */}
                </Link>
              </div>
              <div className="ptf-team-member__content">
                <h6 className="ptf-team-member__name">
                  <a href="#">{singleproduct.productName}</a>
                </h6>
                <h5>₩ {singleproduct.productPrice}</h5>
                <p className="ptf-team-member__function">{singleproduct.productCategory}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </>
    )


    // DEVELOPER_MODE
    : (
    <>          <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>DEVELOPER_MODE
    <div className="threerectangles-grid">
        {blogContent.map((val, i) => (
          <div className="col-xl-12 col-lg-6" key={i}>
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


        {/* 서버 데이터 */}
        {productList.map((singleproduct, i) => (
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={100}
            key={i}
          >
            {/* <!--Team Member--> */}
            <div className="ptf-team-member ptf-team-member--has-effect">
              <div className="ptf-team-member__avatar">
                {/* <div className="shadow-effect"></div> */}
                <Link to={`/store-details/${singleproduct.productCode}`} rel="noopener noreferrer">
                {/* <a href="#"> */}
                  {" "}
                  <img
                    // src={`assets/img/dalrun-hc/store/storedetails/555966_338_ss_01.avif`}
                    src={`${process.env.REACT_APP_API_URL}/dalrun-hc/store/products/${singleproduct.productCode}/${singleproduct.productCode}-01.png`}
                    alt={singleproduct.productName}
                    loading="lazy"
                  />
                {/* </a> */}
                </Link>
              </div>
              <div className="ptf-team-member__content">
                <h6 className="ptf-team-member__name">
                  <a href="#">{singleproduct.productName}</a>
                </h6>
                <h5>₩ {singleproduct.productPrice}</h5>
                <p className="ptf-team-member__function">{singleproduct.productCategory}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
    )
};

export default StoreThreeRectangles;
