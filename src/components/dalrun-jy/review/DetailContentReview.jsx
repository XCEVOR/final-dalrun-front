import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import axios from 'axios';


const DetailContentReview = () => {

  const params = useParams();

  const [shoerdList, setShoerdList] = useState([]);


  function getAllShoedetailList(srSeq) {
    axios.get("http://localhost:3000/getAllShoedetailList", { params: { 'srSeq': srSeq } })
      .then(function (resp) {
        setShoerdList(resp.data);  // 글의 총수

      }).catch(function (err) {
        alert(err);
      })
  }


  useEffect(() => {

    getAllShoedetailList(params.srSeq);

  }, []);


  useEffect(() => {
    console.log(shoerdList);

  }, [shoerdList])

  return (
    <>

      {shoerdList.map((item, i) => (
        <div className="grid-item" key={i} >
          {/* <!--Blog Post--> */}
          <article className="ptf-post ptf-post--style-3">
            {(i % 2 === 0) ? <>
              <div className="ptf-post__media" >
                <img
                 src={`http://localhost:3000/dalrun-hc/review/${item.srSeq}/${item.srimage}`}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="ptf-post__content">
                <div className="ptf-post__excerpt">
                  <p>{item.srcomment}</p>
                </div>

              </div></>
              : <>

                <div className="ptf-post__content">
                  <div className="ptf-post__excerpt">
                    <p>{item.srcomment}</p>
                  </div>

                </div>

                <div className="ptf-post__media" >
                  <img
                    src={`http://localhost:3000/dalrun-hc/review/${item.srSeq}/${item.srimage}`}
                    alt=""
                    loading="lazy"
                  />
                </div>
              </>

            }
      
          </article>
        </div>
      ))}

    </>
  );
};

export default DetailContentReview;
