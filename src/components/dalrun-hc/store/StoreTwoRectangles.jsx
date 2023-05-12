import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

import ImageOverlay from "./imageoverlay/ImgOverlay";



const testimonialContent = [
  {
    avatar: "twitter-avatar",
    name: "Thiago Alcantara",
    email: "@thiago.lfc",
    hightlightText: "@moonex",
    date: "15 Dec, 2022",
    description: `a studio with passionate, profressional &
    full creativity. Much more things that i’m expect. Really
    awesome & satisfied, alway recommended!`,

    img: "work-1",
    categorie: "UI/UX",
    title: "Taskly Dashboard",

    routerPath: "/store-details",
  },
  {
    avatar: "twitter-avatar-2",
    name: "Laura Lowrence",
    email: "@laura.cubichotel",
    hightlightText: "@awesome",
    date: "24 Dec, 2022",
    description: ` I don’t know what else to say, this is something that you
    haven’t seen before. Unique design, impressive & outstanding
    support.`,

    img: "work-2",
    categorie: "Product",
    title: "Film & Art Festival",

    routerPath: "/store-details",
  },
  {
    avatar: "comment-avatar-1",
    name: "Laura Lowrence",
    email: "@laura.cubichotel",
    hightlightText: "@design",
    date: "24 Dec, 2022",
    description: ` This is something that you
    haven’t seen before. Unique design, impressive & outstanding
    support. I don’t know what else to say, `,

    img: "work-3",
    categorie: "Branding, Packaging",
    title: "Dark Wishky Wine",

    routerPath: "/store-details",
  },
  // {
  //   avatar: "twitter-avatar",
  //   name: "Thiago Alcantara",
  //   email: "@thiago.lfc",
  //   hightlightText: "@moonex",
  //   date: "15 Dec, 2022",
  //   description: `a studio with passionate, profressional &
  //   full creativity. Much more things that i’m expect. Really
  //   awesome & satisfied, alway recommended!`,

  //   img: "work-4",
  //   categorie: "UI/UX",
  //   title: "Taskly Dashboard",

  //   routerPath: "/store-details",
  // },
  // {
  //   avatar: "twitter-avatar-2",
  //   name: "Laura Lowrence",
  //   email: "@laura.cubichotel",
  //   hightlightText: "@awesome",
  //   date: "24 Dec, 2022",
  //   description: ` I don’t know what else to say, this is something that you
  //   haven’t seen before. Unique design, impressive & outstanding
  //   support.`,

  //   img: "work-5",
  //   categorie: "Product",
  //   title: "Film & Art Festival",

  //   routerPath: "/store-details",
  // },
  // {
  //   avatar: "comment-avatar-1",
  //   name: "Laura Lowrence",
  //   email: "@laura.cubichotel",
  //   hightlightText: "@design",
  //   date: "24 Dec, 2022",
  //   description: ` This is something that you
  //   haven’t seen before. Unique design, impressive & outstanding
  //   support. I don’t know what else to say, `,

  //   img: "work-6",
  //   categorie: "Branding, Packaging",
  //   title: "Dark Wishky Wine",

  //   routerPath: "/store-details",
  // },
];

const StoreTwoRectangles = () => {
  const [checkbox_DisplayMode, setCheckbox_DisplayMode] = useState(true);  // TEST MODE

  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };



  const [productRecomm, setProductRecomm] = useState([]);

  const getProductRecomm = async () => {
    const resp = await axios.post("http://localhost:3000/getProductRecomm", null, {});
    console.log("  getProductRecomm console.log(resp.data); ", resp.data);
    setProductRecomm(resp.data)
  }

  useEffect (() => {
    getProductRecomm();
  }, [])


  return checkbox_DisplayMode 
  // USER_MODE
  ? (
    <>          <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE
      <div>
        
        <Slider {...settings} className="arrow-none">
          {productRecomm.map((recomm, i) => (
            <div className="swiper-slide" key={i}>


              {/* <!--Portfolio Item--> */}
              <article className="ptf-work ptf-work--style-6">


                <div>
                  <div className="image-container">
                    <Link to={`/store-details/${recomm.productCode}`} rel="noopener noreferrer">
                    <img className="background-image"
                      src={`http://localhost:3000/dalrun-hc/store/products/${recomm.productCode}/${recomm.productCode}-01.png`}
                      // src={`assets/img/home/studio/${val.img}.png`}
                      // alt={val.title}
                      loading="lazy"
                    />
                    <img
                      className="overlay-image"
                      src="assets/img/dalrun-hc/store/dalrun_award_05.png"
                      alt="Overlay"
                    />

                      {/* {val.name} */}
                    </Link>
                  </div>
                </div>

  
              </article>


  
            </div>
          ))}
        </Slider>
      </div>
    </>
    )


    // DEVELOPER_MODE
    : (
    <>          <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>DEVELOPER_MODE
      <div>
        <ImageOverlay />
        <Slider {...settings} className="arrow-none">
          {productRecomm.map((recomm, i) => (
            <div className="swiper-slide" key={i}>


              {/* <!--Portfolio Item--> */}
              <article className="ptf-work ptf-work--style-6">


                <div>
                  <div className="image-container">
                    <Link to={`/store-details/${recomm.productCode}`} rel="noopener noreferrer">
                    <img className="background-image"
                      src={`http://localhost:3000/dalrun-hc/store/products/${recomm.productCode}/${recomm.productCode}-01.png`}
                      // src={`assets/img/home/studio/${val.img}.png`}
                      // alt={val.title}
                      loading="lazy"
                    />
                    <img
                      className="overlay-image"
                      src="assets/img/dalrun-hc/store/dalrun_award_05.png"
                      alt="Overlay"
                    />

                      {/* {val.name} */}
                    </Link>
                  </div>
                </div>
                <div className="image-container">
                  <img
                    className="background-image"
                    src="assets/img/dalrun-hc/store/storedetails/ADID-LIRA-01.png"
                    alt="Background"
                  />
                  <img
                    className="overlay-image"
                    src="assets/img/dalrun-hc/store/dalrun_award_05.png"
                    alt="Overlay"
                  />
                </div>

  
              </article>


  
            </div>
          ))}
        </Slider>
        <Slider {...settings} className="arrow-none">
          {testimonialContent.map((val, i) => (
            <div className="swiper-slide" key={i}>


              {/* <!--Portfolio Item--> */}
              <article className="ptf-work ptf-work--style-6">


                <div className="ptf-work__media">
                  <Link to={val.routerPath} rel="noopener noreferrer">
                  <img
                    src={`assets/img/dalrun-hc/${val.img}.jpg`}
                    // src={`assets/img/home/studio/${val.img}.png`}
                    alt={val.title}
                    loading="lazy"
                  />

                    {val.name}
                  </Link>
                </div>

  
              </article>


  
            </div>
          ))}
        </Slider>
      </div>
    </>
    )
};

export default StoreTwoRectangles;
