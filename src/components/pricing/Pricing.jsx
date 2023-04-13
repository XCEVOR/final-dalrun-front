import React from "react";
import { Link } from "react-router-dom";

const pricingContent = [
  {
    planName: "BASIC PLAN",
    price: "49",
    priceDuration: "Month",
    pirceDescriptions: "10% taxed will include after make price",
    pricingFeatures: ["Full Design & Development", "Installation"],
    badge: "",
    badgeClass: "",
    delayAnimation: "0",
  },
  {
    planName: "PREMIUM PLAN",
    price: "69",
    priceDuration: "Month",
    pirceDescriptions: "10% taxed will include after make price",
    pricingFeatures: [
      "Full Design & Development",
      "Installation",
      "Support Lifetime",
    ],
    badge: "Popular",
    badgeClass: "badge",
    delayAnimation: "100",
  },
  {
    planName: "ULTIMATE PLAN",
    price: "99",
    priceDuration: "Month",
    pirceDescriptions: "10% taxed will include after make price",
    pricingFeatures: [
      "Full Design & Development",
      "Installation",
      "Support Lifetime",
      "SEO/Marketing Include",
    ],
    badge: "",
    badgeClass: "",
    delayAnimation: "200",
  },
];

const Pricing = () => {
  return (
    <>
      {pricingContent.map((val, i) => (
        <div className="col-xl-4 col-lg-6" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block h-100"
            data-aos="fade"
            data-aos-delay={val.delayAnimation}
          >
            {/* <!--Pricing Table--> */}
            <div className="ptf-pricing-table h-100">
              <div className={val.badgeClass}>{val.badge}</div>
              <div className="ptf-pricing-table__header">
                <h4 className="ptf-pricing-table__title">{val.planName}</h4>
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
              <div className="ptf-pricing-table__action">
                {/* <!--Button--> */}
                <Link
                  className="ptf-btn ptf-btn--primary ptf-btn--block"
                  to="/contact"
                >
                  Start My Project Now
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
