import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import StoreRecommendPhoto from "./StoreRecommendPhoto";

const StoreRecommendPicture = () => {
    let prodParams = useParams();
    console.log("prodParams StoreRecommend1Row: ", prodParams);
    console.log("prodParams.productCode StoreRecommend1Row: ", prodParams.productCode);

    const [recommPictureList, setRecommPictureList] = useState([]);

    const [loading, setLoading] = useState(false);

    const getProductAllRecommPictureList = async (productCode) => {
        const resp = await axios.post("/getProductAllRecommPictureList", null, { params: {"productCode": productCode} });
        console.log(" getProductAllRecommPictureList : ", resp.data);
        setRecommPictureList(resp.data.sort());
    
        setLoading(true);  // 이 코드 전에는 div에 productDetails.productName 등등 적용안됨.
    }

    useEffect(() => {
      getProductAllRecommPictureList(prodParams.productCode);
    }, [prodParams.productCode])
  
    if(loading === false){
      return <div>Loading...</div>
    }
    


    return (
      <>
        <div>

        {recommPictureList.map((pic, index) => (

          <div key={index}>
          {index == 0 ?
            <div>
              {/* <img 
              className="detailimg"
              src={`/dalrun-hc/store/recomproducts/${prodParams.productCode}/${pic}`}
              alt={pic}
              loading="lazy"
              />  */}
            </div>
            :
            <div className="columnimg" >
              <StoreRecommendPhoto 
                    imageSrc={`${process.env.REACT_APP_API_URL}/dalrun-hc/store/recomproducts/${prodParams.productCode}/${pic}`}
                    // title="testestes11"
                    // description="asdfkahjsdflhsdf"
                  />
              {/* <img
                className="detailimg zooming zoomin_pointer"
                src={`/dalrun-hc/store/recomproducts/${prodParams.productCode}/${pic}`}
                alt={pic}
                loading="lazy"
              /> */}
              <div className="ptf-spacer" style={{ "--ptf-xxl": "30.75rem" }}></div>
            </div>
          }
  
        </div>
        ))}

        </div>
      </>
    )



}

export default StoreRecommendPicture;