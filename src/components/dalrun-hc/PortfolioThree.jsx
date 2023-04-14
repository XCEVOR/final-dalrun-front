import React from "react";
import { Link } from "react-router-dom";

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
    img: "work-6",
    categorie: "UI/UX",
    title: "Andy Grammer",
  },
];

const PortfolioThree = () => {
  return (
    <>
      {portfolioContent.map((val, i) => (
        <div className="col-lg-6" key={i}>
          <div className=" grid-item filter-1 filter-4 filter-7">
            {/* <!--Portfolio Item--> */}
            <article className="ptf-work ptf-work--style-6">
              <div className="ptf-work__media">
                <img
                  src={`assets/img/home/studio/${val.img}.png`}
                  alt={val.title}
                  loading="lazy"
                />
              </div>
              <Link className="ptf-work__meta" to="/works-showcase">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  style={{ height: "1em" }}
                  viewBox="0 0 17 17"
                >
                  <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                </svg>
                <div className="ptf-work__category">{val.categorie}</div>
                <h4 className="ptf-work__title">{val.title}</h4>
              </Link>
            </article>
          </div>
        </div>
      ))}
    </>
  );
};

export default PortfolioThree;
