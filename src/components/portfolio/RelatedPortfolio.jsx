import React from "react";
import { Link } from "react-router-dom";

const portfolioContent = [
  { img: "work-1", categorie: "UI/UX", title: "Taskly Dashboard" },
  { img: "work-2", categorie: "Product", title: "Film & Art Festival" },
  {
    img: "work-3",
    categorie: "Branding, Packaging",
    title: "Dark Wishky Wine",
  },
  { img: "work-4", categorie: "Illustration", title: "Swiss Style Poster" },
  { img: "work-5", categorie: "UI/UX", title: "Liarch Architecture Firm" },
  {
    img: "work-6",
    categorie: "Branding, Packaging, Motion Video",
    title: "FG Print Brand",
  },
];

const RelatedPortfolio = () => {
  return (
    <>
      {portfolioContent.map((val, i) => (
        <div className="col-lg-4" key={i}>
          <div className="grid-item">
            {/* <!--Portfolio Item--> */}
            <article className="ptf-work ptf-work--style-1">
              <div className="ptf-work__media">
                <Link className="ptf-work__link" to="/works-showcase"></Link>
                <img
                  src={`assets/img/portfolio/${val.img}.png`}
                  alt="portfolio"
                  loading="lazy"
                />
              </div>
              <div className="ptf-work__meta">
                <div className="ptf-work__category">{val.categorie}</div>
                <h4 className="ptf-work__title">
                  <Link to="/works-showcase">{val.title}</Link>
                </h4>
              </div>
            </article>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelatedPortfolio;
