import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function StoreDetailsSelection() {
    let prodParams = useParams();
    console.log(prodParams.productCode);
  
    const [productDetails, setProductDetails] = useState();
    const [loading, setLoading] = useState(false);
  
    const productDetailsData = async (productCode) => {
      const resp = await axios.post("http://localhost:3000/getProductData", null, { params: {"productCode": productCode} });
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
      <div className="dalrun_hc">
        <div className="product_productOrigFile">
          <h1 className="product_productOrigFile">product_origfile_blob 서버: {productDetails[0].productOrigFile}</h1>
        </div>
        <div>
          <img
            src={`/assets/img/dalrun-hc/store/storedetails/${productDetails[0].productOrigFile}.png`}
            alt={productDetails[0].productOrigFile}
            loading="lazy"
          />
        </div>

      </div>
    );
}

export default StoreDetailsSelection;