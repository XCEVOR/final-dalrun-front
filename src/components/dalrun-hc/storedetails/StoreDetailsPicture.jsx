import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function StoreDetailsPicture() {
  let prodParams = useParams();
  console.log("StoreDetailsPicture() {: ", prodParams.productCode);

  const [productPictureList, setProductPictureList] = useState([]);
  const [loading, setLoading] = useState(false);

  const productDetailsPictureList = async (productCode) => {
    const resp = await axios.post("http://localhost:3000/getProductAllPictureList", null, { params: {"productCode": productCode} });
    console.log("productDetailsPictureList: ", resp.data);
    setProductPictureList(resp.data);

    setLoading(true);  // 이 코드 전에는 div에 productDetails.productName 등등 적용안됨.
  }

  useEffect(() => {
    productDetailsPictureList(prodParams.productCode);
  }, [prodParams.productCode])

  if(loading === false){
    return <div>Loading...</div>
  }


  return (
    <div>
      <div className="product_productOrigFile">
        <h1 className="product_productOrigFile">product_origfile_blob 서버: {productPictureList[0]}</h1>
      </div>

      {productPictureList.map((pic, index) => (
        <div>
          <p>{index}</p>
          <img
            src={`http://localhost:3000/dalrun-hc/store/products/${prodParams.productCode}/${pic}`}
            alt={pic}
            loading="lazy"
          />
        </div>
      ))}


    </div>
  );
}

export default StoreDetailsPicture;