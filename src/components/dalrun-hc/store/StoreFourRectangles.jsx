import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const teamContent = [
  {
    delayAnimation: "0",
    img: "work-1",
    title: "Stephan Bowie",
    designation: "CEO Founder",

    routerPath: "/store-details",
  },
  {
    delayAnimation: "100",
    img: "work-2",
    title: "Robert Downey Jr",
    designation: "CO Founder",

    routerPath: "/store-details",
  },
  {
    delayAnimation: "200",
    img: "work-3",
    title: "Laura Lorwence",
    designation: "Project Management",

    routerPath: "/store-details",
  },
  {
    delayAnimation: "300",
    img: "work-4",
    title: "David De Berg",
    designation: "Lead of Technical",

    routerPath: "/store-details",
  },
  {
    delayAnimation: "0",
    img: "work-5",
    title: "Elena Stephan",
    designation: "SEO/Marketing",

    routerPath: "/store-details",
  },
  {
    delayAnimation: "100",
    img: "work-6",
    title: "Andy Robertson",
    designation: "Content Writer",

    routerPath: "/store-details",
  },
  {
    delayAnimation: "200",
    img: "new-member",
    title: "프론트 데이터 <-- | --> 서버 데이터",
    designation: "프론트 데이터 <-- | --> 서버 데이터",

    routerPath: "/store-details",
  },
];



const StoreFourRectangles = () => {
  const [checkbox_DisplayMode, setCheckbox_DisplayMode] = useState(true);  // TEST MODE
  const [productList, setProductList] = useState([]);

  const getProductList = () => {
    axios.get("http://localhost:3000/allProductListDeduplication", {})
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
    <>    <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE
    <div className="fourrectangles-grid fourrectangles-grid-effect">


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
                    src={`http://localhost:3000/dalrun-hc/store/products/${singleproduct.productCode}/${singleproduct.productCode}-01.png`}
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
    <>    <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>DEVELOPER_MODE
      <div className="fourrectangles-grid fourrectangles-grid-effect">
        {/* 프론트 데이터 */}
        {teamContent.map((val, i) => (
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.delayAnimation}
            key={i}
          >
            {/* <!--Team Member--> */}
            <div className="ptf-team-member ptf-team-member--has-effect">
              <div className="ptf-team-member__avatar">
                {/* <div className="shadow-effect"></div> */}
                <Link to={val.routerPath} rel="noopener noreferrer">
                {/* <a href="#"> */}
                  {" "}
                  <img
                    src={`assets/img/dalrun-hc/${val.img}.jpg`}
                    alt={val.title}
                    loading="lazy"
                  />
                {/* </a> */}
                </Link>
              </div>
              <div className="ptf-team-member__content">
                <h6 className="ptf-team-member__name">
                  <a href="#">{val.title}</a>
                </h6>
                <p className="ptf-team-member__function">{val.designation}</p>
              </div>
            </div>
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
                    src={`http://localhost:3000/dalrun-hc/store/products/${singleproduct.productCode}/${singleproduct.productCode}-01.png`}
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

export default StoreFourRectangles;
