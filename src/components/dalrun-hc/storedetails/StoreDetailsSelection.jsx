import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function StoreDetailsSelection() {
    let prodParams = useParams();
    console.log(prodParams.productCode);
  
    const [productDetails, setProductDetails] = useState();
    const [itemColorList, setItemColorList] = useState([]);
    const [itemSizeList, setItemSizeList] = useState([]);
    const [loading, setLoading] = useState(false);

    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [selectedItemInfo, setSelectedItemInfo] = useState([{"productCode": "prodParams.productCode", "productColor": "selectedColor", "productSize": "selectedSize"}]);

    const [userOrderData, setUserOrderData] = useState({"orderProductId": selectedItemInfo[0].productId, "orderProductQuantity": selectedQuantity});


    let deduplicateColorList = [];
    let deduplicateSizeList = [];

    const productDetailsData = async (productCode) => {
      const resp = await axios.post("http://localhost:3000/getProductData", null, { params: {"productCode": productCode} });
      console.log("getProductData: ", resp.data);
      setProductDetails(resp.data);


      // 중복 컬러 옵션 이름 제거
      resp.data.forEach(item => {
        deduplicateColorList.push(item.productColor);
      });
      setItemColorList(Array.from(new Set(deduplicateColorList)));
      console.log("  itemColorList: ", itemColorList);

      // 중복 사이즈 옵션 이름 제거
      resp.data.forEach(item => {
        deduplicateSizeList.push(item.productSize);
      });
      setItemSizeList(Array.from(new Set(deduplicateSizeList)));
      console.log(" itemSizeList: ", itemSizeList);

      
      setLoading(true);  // 이 코드 전에는 div에 productDetails.productName 등등 적용안됨.
    }


    const updateProductView = async () => {
      const resp = await axios.post("http://localhost:3000/updateProductView", null, { params: {"productCode": prodParams.productCode} });
      console.log(" updateProductView: ", resp.data);
    }

    const updateProductLike = async () => {
      const resp = await axios.post("http://localhost:3000/updateProductLike", null, { params: {"productCode": prodParams.productCode} });
      console.log(" updateProductLike: ", resp.data);
    }

    const updateProductRecomm = async (eve) => {
      const resp = await axios.post("http://localhost:3000/updateProductRecomm", null, { params: {"productCode": prodParams.productCode, "productRecomm": eve} });
      console.log(" updateProductRecomm: ", resp.data);
    }

  
    useEffect(() => {
      productDetailsData(prodParams.productCode);
    }, [prodParams.productCode])
  
    if(loading === false){
      return <div>Loading...</div>
    }

    const selectColorBtn = (e) => {
      setSelectedColor(e.target.value);
      console.log(selectedColor);
    }
    const selectSizeBtn = (e) => {
      setSelectedSize(e.target.value);
      console.log(selectedSize);
    }
    const selectQuantityMinusBtn = (e) => {
      if (selectedQuantity <= 1) return;
      setSelectedQuantity(selectedQuantity - 1);
      console.log(selectedQuantity);
    }



    const selectProductOptionTest = async () => {
      if(selectedColor === undefined || selectedSize === undefined ){
        alert('제목을 입력해 주십시오');
        return;
    }
      const resp = await axios.post("http://localhost:3000/getSelectedProductInfo", null, { params: {"productCode": prodParams.productCode, "productColor": selectedColor, "productSize": selectedSize} });
      console.log(prodParams.productCode, selectedColor, selectedSize);
      console.log(" @ selectedItemInfo: ", resp.data);
      if (resp.data.length === 0) {alert('색상 & 사이즈를 선택하세요'); return;}
      setSelectedItemInfo(resp.data);
      window.localStorage.setItem("orderProductId", selectedItemInfo[0].productId)
      setUserOrderData({ ...userOrderData, orderProductId: selectedItemInfo[0].productId, orderProductQuantity: selectedQuantity});
      console.log("  selectedItemInfo[0].productId: ", selectedItemInfo[0].productId)
    }



    const addToCart = async () => {
      console.log(" @ console.log(orderProductId): ", userOrderData)
      const resp = await axios.post("http://localhost:3000/addToCart", null, { params: {"cartId": "user01carttest", "cartProdQuantity": userOrderData.orderProductQuantity, "productId": userOrderData.orderProductId, "memId": "user01test", "orderSeq": 33} });
      console.log("  const addToCart = async () => { ", resp.data);
    }




    return (
      <div>
        <button onClick={updateProductView}>VIEW TEST</button>
        <button onClick={updateProductLike}>LIKE TEST</button>
        <button value="1" onClick={(e) => updateProductRecomm(e.target.value)}>RECOMM 1 TEST</button>
        <button value="2" onClick={(e) => updateProductRecomm(e.target.value)}>RECOMM 2 TEST</button>
        <button value="3" onClick={(e) => updateProductRecomm(e.target.value)}>RECOMM 3 TEST</button>

        
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
          <button className="">f-red</button>
          <button className="">f-blue</button>
          <button className="">f-green</button>
          {itemColorList.map((icolor, index) => (
            <button className="product_color" key={index} value={icolor} onClick={selectColorBtn}>{icolor}</button>
          ))}
        </div>
        <div className="product_size">
          <button className="product_size">f-210</button>
          <button className="product_size">f-220</button>
          {itemSizeList.map((isize, index) => (
            <button className="product_size" key={index} value={isize} onClick={selectSizeBtn}>{isize}</button>
          ))}
        </div>
        <div className="product_quantity">
          <button onClick={(e) => setSelectedQuantity(prevQuantity => prevQuantity + 1)}>+</button>
          <p>{selectedQuantity}</p>
          <button onClick={selectQuantityMinusBtn}>-</button>
        </div>

        <div className="product_quantity">
          <p>{selectedColor}//</p>
          <p>{selectedSize}//</p>
          <p>{selectedQuantity}</p>
        </div>

        <div>
          <button onClick={selectProductOptionTest}>상품 ID 체크 테스트</button>
          <p>
            {selectedItemInfo[0].productId}//
            {selectedItemInfo[0].productCode}//
            {selectedItemInfo[0].productColor}//
            {selectedItemInfo[0].productSize}//
          </p>
        </div>

        <div className="product_cart">
            <button onClick={addToCart}>ADD TO CART</button>
        </div>
        <div className="product_cart">
          <Link to="/store-cart" state={{ "orderProductId": userOrderData.orderProductId, "orderProductQuantity": userOrderData.orderProductQuantity }}>
            <button onClick={addToCart}>ADD TO CART & GO</button>
          </Link>
        </div>
        <Link
          className="ptf-btn ptf-btn--primary ptf-btn--block"
          to="/store-cart"
        >
          장바구니
            <p>//ID: {userOrderData.orderProductId}//Qty: {userOrderData.orderProductQuantity}</p>
        </Link>

        <div className="product_checkout">
          <button>CHECKOUT</button>

        </div>
        <Link
          className="ptf-btn ptf-btn--primary ptf-btn--block"
          to="/store-payment"
        >
          바로구매
        </Link>

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