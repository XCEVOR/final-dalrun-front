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
        <div className="product_id">
          <h1 className="product_id">product_id 서버: {productDetails[0].productId}</h1>
        </div>
        <div className="product_code">
          <h1 className="product_code">product_code 서버: {productDetails[0].productCode}</h1>
        </div>
        <div className="product_category">
          <h1 className="product_category">product_category 서버: {productDetails[0].productCategory}</h1>
        </div>
        <div className="product_name">
          <h1 className="product_name">product_name 서버: {productDetails[0].productName}</h1>
        </div>
        <div className="product_brand">
          <h1 className="product_brand">product_brand 서버: {productDetails[0].productBrand}</h1>
        </div>
        <div className="product_price">
          <h1 className="product_price">product_price 서버: {productDetails[0].productPrice}</h1>
        </div>
        <div className="product_color">
          <button className="sbtn">red</button>
          <button className="sbtn">blue</button>
          <button className="sbtn">green</button>
        </div>
        <div className="product_size">
          <button className="product_size">220</button>
          <button>230</button>
          <button>240</button>
          <button>250</button>
        </div>
        <div className="product_quantity">
          <button>+</button>
          <p>7</p>
          <button>-</button>
        </div>

        <div className="product_cart">
          <button>ADD TO CART</button>
        </div>
        <div className="product_checkout">
          <button>CHECKOUT</button>
        </div>
        <div className="product_description">
          <h1 className="product_description">product_description 서버: {productDetails[0].productDescription}</h1>
        </div>
        <div className="product_description">
          <h1 className="product_description">product_origfile_blob 서버: {productDetails[0].productOrigFile}</h1>
        </div>
      </div>
    );
}

export default StoreDetailsSelection;