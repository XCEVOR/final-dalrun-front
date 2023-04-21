import React from "react";
import { Link } from "react-router-dom";

const pricingContent = [
  {
    planName: "Nike Vaporfly 3",
    price: "49",
    priceDuration: "X",
    pirceDescriptions: "10% taxed will include after make price",
    pricingFeatures: ["Color", "Size"],
    badge: "",
    badgeClass: "",
    delayAnimation: "0",
  },

];

const Pricing = () => {
  return (
    <>
      {pricingContent.map((val, i) => (
        <div className="col-xl-4 col-lg-6" key={i}>
          {/* <!--Animated Block--> */}
          <div
            // className="ptf-animated-block h-100"
            // data-aos="fade"
            // data-aos-delay={val.delayAnimation}
          >
            {/* <!--Pricing Table--> */}
            <div className="ptf-pricing-table 
              // h-100"
            >
              <div className={val.badgeClass}>{val.badge}</div>
              <div className="ptf-pricing-table__header">
                <h2 
                  // className="ptf-pricing-table__title"
                >{val.planName}</h2>
              </div>
              <div className="ptf-pricing-table__price">
                <span className="currency">$</span>
                <span className="price">{val.price}</span>
                <span className="period">/ {val.priceDuration}</span>
              </div>
              <div className="ptf-pricing-table__description">
                {val.priceDuration}
              </div>
              <div className="ptf-pricing-table__content">
                <ul>
                  {val.pricingFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
              </div>

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
