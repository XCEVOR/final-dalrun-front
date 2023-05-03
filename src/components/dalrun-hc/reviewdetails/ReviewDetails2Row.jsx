import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ReviewDetails2Row = () => {
  const sampleData = [
    {
      img: "http://localhost:3000/dalrun-hc/review/products/ADID-LIRA/ADID-LIRA.png",
    },
    {
      img: "http://localhost:3000/dalrun-hc/review/products/NBAL-FRFO/NBAL-FRFO.png",
    },
    {
      img: "http://localhost:3000/dalrun-hc/review/products/PUMA-AMSN/PUMA-AMSN.png",
    },
    {
      img: "http://localhost:3000/dalrun-hc/review/products/RBOK-DYAD/RBOK-DYAD.png",
    },
  ];
    const pageDetailSeq = useSelector((state) => state.pageDetailSeq.shoereviewdetailSeq);

    const [singleReview, setSingleReview] = useState([]);
    const getSingleShoeReview = async () => {
        const resp = await axios.post("http://localhost:3000/getSingleShoeReview", null, { params: {"shoereviewdetailSeq": Number(pageDetailSeq)}})
        console.log("`http://localhost:3000/getSingleShoeReview`", resp.data)
        console.log("`http://localhost:3000/getSingleShoeReview`", resp.data.shoereviewdetailContent)
        setSingleReview(resp.data)
    }

    useEffect (() => {
        getSingleShoeReview(pageDetailSeq);
    }, [pageDetailSeq])

    return (
        <div>
            <h1>{pageDetailSeq}</h1>
            <section>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Simple Image--> */}
                  <div className="ptf-simple-image">
                    <a
                      href="https://i.ebayimg.com/images/g/sE4AAOSwCXRicCxv/s-l1600.jpg"
                      rel="nofollow"
                    >
                      <img
                        src={`http://localhost:3000/dalrun-hc/review/${pageDetailSeq}/${pageDetailSeq}-1.png`}
                        alt="work"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h1>{singleReview.shoereviewdetailTitle}</h1><br/>
                  <p className="fz-30 has-black-color">
                    {singleReview.shoereviewdetailContent}
                  </p>
                  <p className="fz-30 has-black-color">
                    Lewis Studio Website is a startup that aims to supply energy
                    (starting with gas) to domestic household acrossthe UK.
                    Create a very simple yet stunning logotype and promo site
                    that sets the brand of Entice Energy apart from the
                    competitors like a fresh take on an already saturated area.
                  </p>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
                ></div>

                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-height": "1px",
                    "--ptf-color": "var(--ptf-color-14)",
                  }}
                ></div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2>Challenge</h2>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.5625rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <p className="fz-18">
                    Create an unconventional yet user-friendly website –
                    innovative, with a clean and simple design that communicates
                    brand values and showcases multi-media content. Site that
                    spreads the message: "Islamic stories your child will love"
                  </p>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.5625rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <ul className="fz-18" style={{ lineHeight: 2 }}>
                    <li>
                      Develop easy-to-find and easy-to-navigate mobile friendly
                      website
                    </li>
                    <li>
                      Showcase each type of content: interactive books, animated
                      stories and picture books, audio stories. Create an
                      experience people want to share with others
                    </li>
                    <li>Persuade to download app and subscribe</li>
                  </ul>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Twitter Review--> */}
                  <div className="ptf-twitter-review ptf-twitter-review--style-3">
                    <div className="ptf-twitter-review__header">
                      <div className="ptf-twitter-review__avatar">
                        <img
                          src="assets/img/root/twitter-avatar.png"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <div className="ptf-twitter-review__meta">
                        <h6 className="ptf-twitter-review__author">
                          Thiago Alcantara
                        </h6>
                        <div className="ptf-twitter-review__info">
                          <a href="#">@thiago.lfc</a> - 15 Dec, 2022
                        </div>
                      </div>
                      <div className="ptf-twitter-review__icon">
                        <i className="socicon-twitter"></i>
                      </div>
                    </div>
                    <div className="ptf-twitter-review__content">
                      <p>
                        The team at <a href="#">@moonexlabs</a> is incredibly
                        dedicated, knowledgeable, and helpful. The finished
                        product was beautiful, and worth every penny. I would
                        absolutely recommend Moonex Labs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2>Solution</h2>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.5625rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <p className="fz-18">
                    Our approach was to present the site as a visual editorial
                    platform with quarterly features based on events and
                    occasions the brand was focused on. Each quarterly focus
                    would be marked by the hero and custom tags that filter
                    content.
                  </p>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Gallery--> */}
                  {/* <ImageGridThree /> */}
                </div>
              </div>
            </section>
        </div>
    )
}

export default ReviewDetails2Row;