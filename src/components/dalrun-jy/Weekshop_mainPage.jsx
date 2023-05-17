import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Slider from "react-slick";
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



//////////////////////////////////////////////////////
//////////// 주석 처리 다 해제하시고 사용하시면 됩니다.//
//////////////////////////////////////////////////////

const Weekshop_mainPage = () => {

  const [productList,setProductList] = useState([]);


  // 호찬님 구현 부탁드려요
  const getPopularProduct = async () => {
    const resp = await axios.post("http://localhost:3000/getProductAllPictureList", null, { params: {"productCode": "RECOMMEND"} });
    console.log("productDetailsPictureList: ", resp.data);
    setProductList(resp.data.sort());

  }

  useEffect(() => {
   getPopularProduct();
  }, []);

  useEffect(() => {

  });

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {productList.map((recomm, i) => (

          <div className="grid-item" key={i}>

            {/* <!--Blog Post--> */}
            <article className="ptf-post ptf-post--style-2">
              <Link to={`/store-recommend/${recomm.substring(3, 12)}`} rel="noopener noreferrer">
                <div className="ptf-post__media">
                  <img
                    src={`http://localhost:3000/dalrun-hc/store/products/RECOMMEND/${recomm}`}

                    // src={`assets/img/blog/masonry/${item.img}.png`}

                    //src={`http://localhost:3000/dalrun-hc/store/products/${code}/${pic}`}

                    loading="lazy"
                  />
                  <div className="ptf-post__media__content">
                    <header className="ptf-post__header">
                      <div className="ptf-post__meta">
                        {/* <span className="cat">{recomm.cat}</span> */}
                        {/* <span className="date">{recomm.date}</span> */}

                        {/* <span className="cat">{item.productCategory}</span>
                        <span className="date">{item.productRegiDate}</span> */}
                        
                      </div>
                      <h3 className="ptf-post__title">
                        {/* <Link to=`/store-details/${item.productCode}`>{item.productName}</Link> */}
                        </h3>


                    </header>
                  </div>
                </div>
              </Link>
              {/* End .ptf-post */}
              
              {/* End .ptf-post__content */}
            </article>
          </div>
        ))}
      </Masonry>
    </>
  );
};
export default Weekshop_mainPage;
