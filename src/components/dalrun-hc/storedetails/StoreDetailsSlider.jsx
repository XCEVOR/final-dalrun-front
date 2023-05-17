import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

import Slider from "react-slick";


const portfolioContent = [
  {
    img: "work-1",
    categorie: "UI/UX",
    title: "Taskly Dashboard",
  },
  {
    img: "work-2",
    categorie: "Product",
    title: "Film & Art Festival",
  },
  {
    img: "work-3",
    categorie: "Branding, Packaging",
    title: "Dark Wishky Wine",
  },
  {
    img: "work-4",
    categorie: "Illustration",
    title: "Swiss Style Poster",
  },
  {
    img: "work-5",
    categorie: "UI/UX",
    title: "Liarch Architecture Firm",
  },
  {
    img: "work-1",
    categorie: "UI/UX",
    title: "Taskly Dashboard",
  },
  {
    img: "work-2",
    categorie: "Product",
    title: "Film & Art Festival",
  },
  {
    img: "work-3",
    categorie: "Branding, Packaging",
    title: "Dark Wishky Wine",
  },
  {
    img: "work-4",
    categorie: "Illustration",
    title: "Swiss Style Poster",
  },
  {
    img: "work-5",
    categorie: "UI/UX",
    title: "Liarch Architecture Firm",
  },
];

const StoreDetailsSlider = () => {
  let prodParams = useParams();
  console.log(" @ StoreDetailsSlider = ", prodParams.productCode);

  const [productList, setProductList] = useState([]);
  const [likeable, setLikeable] = useState([]);
  const [interested, setInterested] = useState([]);

  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    centerPadding: "0",
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };


  const getProductList = async () => {
    const resp = await axios.get("/allProductListDeduplication", {})
    setProductList(resp.data)
    console.log(" @ StoreDetailsSlider === ", prodParams.productCode);

  }

  useEffect (() => {
    getProductList()

  }, [])

  useEffect (() => {
    const filteredProducts1 = productList.filter(  // 같은 카테고리 상품 모음.
    (product) => product.productCategory === (productList.filter((pd) => pd.productCode === prodParams.productCode) )[0].productCategory);
    console.log(" @ filteredProducts1 = ", filteredProducts1);
    setLikeable(filteredProducts1);
    const filteredProducts2 = productList.filter(  // 다른 카테고리 상품 모음.
    (product) => product.productCategory !== (productList.filter((pd) => pd.productCode === prodParams.productCode) )[0].productCategory);
    console.log(" @ filteredProducts2 = ", filteredProducts2);
    setInterested(filteredProducts2);
  }, [productList])



  return (
    <div className="ptf-content-slider swiper-container slide-portfolio">

      <div
        className="ptf-spacer"
        style={{ "--ptf-xxl": "7.75rem" }}
      ></div>

      <div><h5>좋아할 만한 상품들</h5></div>
      <div className="swiper-wrapper">
        <Slider {...settings}>
          {/* <!--Portfolio Item--> */}
          {likeable.map((item, i) => (
            <article className="ptf-work ptf-work--style-3 store_item_hover_effect" key={i}>
              <Link to={`/store-details/${item.productCode}`} rel="noopener noreferrer">
                <div className="product_details_slider">
                  
                    <img className="product_details_slider"
                      // src={`assets/img/dalrun-hc/store/storedetails/555966_338_ss_01.avif`}
                      src={`${process.env.REACT_APP_API_URL}/dalrun-hc/store/products/${item.productCode}/${item.productCode}-01.png`}
                      alt={item.productName}
                      loading="lazy"
                    />
                </div>
                <div className="ptf-work__meta">
                  <div className="ptf-work__category">{item.productName}</div>
                  <h6 className="ptf-work__title">
                    ₩ {item.productPrice}
                  </h6>
                </div>
              </Link>
            </article>
          ))}
        </Slider>
      </div>

      <div
        className="ptf-spacer"
        style={{ "--ptf-xxl": "5.75rem" }}
      ></div>

      <div><h5>관심 있을 상품들</h5></div>
      <div className="swiper-wrapper">
        <Slider {...settings}>
          {/* <!--Portfolio Item--> */}
          {interested.map((item, i) => (
            <article className="ptf-work ptf-work--style-3 store_item_hover_effect" key={i}>
              <Link to={`/store-details/${item.productCode}`} rel="noopener noreferrer">
                <div className="product_details_slider">
                  
                    <img className="product_details_slider"
                      // src={`assets/img/dalrun-hc/store/storedetails/555966_338_ss_01.avif`}
                      src={`${process.env.REACT_APP_API_URL}/dalrun-hc/store/products/${item.productCode}/${item.productCode}-01.png`}
                      alt={item.productName}
                      loading="lazy"
                    />
                </div>
                <div className="ptf-work__meta">
                  <div className="ptf-work__category">{item.productName}</div>
                  <h6 className="ptf-work__title">
                    ₩ {item.productPrice}
                  </h6>
                </div>
              </Link>
            </article>
          ))}
        </Slider>
      </div>

      <div
        className="ptf-spacer"
        style={{ "--ptf-xxl": "7.75rem" }}
      ></div>

    </div>
  );
};

export default StoreDetailsSlider;
