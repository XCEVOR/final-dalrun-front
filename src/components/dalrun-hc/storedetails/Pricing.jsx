import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const frontContent = [
  {
    planName: "front-end Nike Vaporfly 3",
    price: "49",
    priceDuration: "X",
    pirceDescriptions: "10% taxed will include after make price",
    pricingFeatures: ["Color", "Size"],
    badge: "",
    badgeClass: "",

    productId: "id010",
    productCode: "SH-NV7",
    productCategory: "shoe",
    productBrand: "nike",
    productName: "front-end Nike Vaporfly 11",
    productPrice: "265000",
    productColor: "blue",
    productSize: "200",
    productDescription: "qweertsfghgfdh",
  },

];

const Pricing = () => {
  let prodParams = useParams();
  console.log(prodParams.productCode);

  const [productDetails, setProductDetails] = useState();
  const [loading, setLoading] = useState(false);

  const productDetailsData = async (productCode) => {
    const resp = await axios.post("/getProductData", null, { params: {"productCode": productCode} });
    console.log("getProductData: ", resp.data);
    setProductDetails(resp.data);

    setLoading(true);  // 이 코드 전에는 div에 productDetails.productName 등등 적용안됨.
  }

  useEffect(() => {
    productDetailsData(prodParams.productCode);
  }, [prodParams.productCode])

  if(loading === false){
    return <div>Loading...</div>
  }

  return (
    <>
      {frontContent.map((frontVal, i) => (
        <div className="col-xl-4 col-lg-6" key={i}>
          {/* <!--Animated Block--> */}
          <div
            // className="ptf-animated-block h-100"
            // data-aos="fade"
            // data-aos-delay={frontVal.delayAnimation}
          >
            {/* <!--Pricing Table--> */}
            <div className="ptf-pricing-table 
              // h-100"
            >
              <div className={frontVal.badgeClass}>{frontVal.badge}</div>
              <div className="ptf-pricing-table__header">
                <h2 
                  // className="ptf-pricing-table__title"
                >프론트: {frontVal.productName}</h2>
                <h2>서버: {productDetails[0].productName}</h2>
              </div>
              <div className="ptf-pricing-table__price">
                <span className="currency">$</span>
                <span className="price">{frontVal.price}</span>
                <span className="period">/ {frontVal.priceDuration}</span>
              </div>
              <div className="ptf-pricing-table__description">
                {frontVal.priceDuration}
              </div>
              <div className="ptf-pricing-table__content">
                <ul>
                  {frontVal.pricingFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

{/*               
                {productDetails.map((p, i) => (
                  <div>
                    
                    <button>{}</button>
                  </div>
                ))} */}

              <div className="ptf-pricing-table__action">
                {/* <!--Button--> */}
                <Link
                  className="ptf-btn ptf-btn--primary ptf-btn--block"
                  to="/store-cart"
                >
                  장바구니
                </Link>
              </div>
              <div className="ptf-pricing-table__action">
                {/* <!--Button--> */}
                <Link
                  className="ptf-btn ptf-btn--primary ptf-btn--block"
                  to="/store-checkout"
                >
                  바로구매
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pricing;
