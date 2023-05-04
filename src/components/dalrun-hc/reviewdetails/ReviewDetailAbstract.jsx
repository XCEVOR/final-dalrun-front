import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ReviewDetailAbstract = () => {
    const pageDetailSeq = useSelector((state) => state.pageDetailSeq.shoereviewdetailSeq);
    console.log(  "const ReviewDetailAbstract = () => { ", pageDetailSeq)

    const [singleReview, setSingleReview] = useState([]);
    const getSingleShoeReview = async () => {
        const resp = await axios.post("http://localhost:3000/getSingleShoeReview", null, { params: {"shoereviewdetailSeq": Number(pageDetailSeq)}})
        console.log("  const ReviewDetailAbstract = () => { `http://localhost:3000/getSingleShoeReview`", resp.data)
        setSingleReview(resp.data)
    }

    useEffect (() => {
        getSingleShoeReview(pageDetailSeq);
    }, [pageDetailSeq])




    return (
        <div>
            <h1>{pageDetailSeq}</h1>

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
                  AAAAAAAAAA AAAAAAAAAA AAAAAAAAAA AAAAAAAAAA AAAAAAAAAA 
                    Lewis Studio Website is a startup that aims to supply energy
                    (starting with gas) to domestic household acrossthe UK.
                    Create a very simple yet stunning logotype and promo site
                    that sets the brand of Entice Energy apart from the
                    competitors like a fresh take on an already saturated area.
                  </p>
                </div>

                
              </div>
            </section>
        </div>
    )

}

export default ReviewDetailAbstract;