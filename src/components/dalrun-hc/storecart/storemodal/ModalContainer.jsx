import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const zoomIn = keyframes`
  0% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1.0);
  }
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  padding: 20px;
  max-width: 1200px;
  position: relative;
  animation: ${zoomIn} 0.2s ease-in-out;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  font-size: 48px;
`;

const BodyWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalContainer = ({ modal_cartid, modal_productid, modal_productcode, modal_productcolor, modal_productsize, modal_quantity, onClose }) => {
  const modalRef = useRef();

  const [productDetails, setProductDetails] = useState();
  const [itemColorList, setItemColorList] = useState([]);
  const [itemSizeList, setItemSizeList] = useState([]);
  const [isProdId, setIsProdId] = useState(modal_productid === undefined ? false : true);
  const [loading, setLoading] = useState(false);

  const [selectedColor, setSelectedColor] = useState(modal_productcolor);
  const [selectedSize, setSelectedSize] = useState(modal_productsize);
  const [selectedQuantity, setSelectedQuantity] = useState(Number(modal_quantity));
  const [selectedProdId, setSelectedProdId] = useState(modal_productid);
  const [selectedItemInfo, setSelectedItemInfo] = useState([{"productCode": "prodParams.productCode", "productColor": "selectedColor", "productSize": "selectedSize"}]);

  const [userOrderData, setUserOrderData] = useState({"orderProductId": selectedItemInfo[0].productId, "orderProductQuantity": selectedQuantity});

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);


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
    setSelectedColor(deduplicateColorList[0])


    // 중복 사이즈 옵션 이름 제거
    resp.data.forEach(item => {
      deduplicateSizeList.push(item.productSize);
    });
    setItemSizeList(Array.from(new Set(deduplicateSizeList)));
    console.log(" itemSizeList: ", itemSizeList);
    setSelectedSize(deduplicateSizeList[0])

    
    setLoading(true);  // 이 코드 전에는 div에 productDetails.productName 등등 적용안됨.
  }

  useEffect(() => {
    productDetailsData(modal_productcode);
  }, [modal_productcode])

  if(loading === false){
    return <div>Loading...</div>
  }


  const selectColorBtn = (e) => {
    setSelectedColor(e.target.value);
    console.log(" @console.log(selectedColor) ", selectedColor)
    console.log(" @console.log(selectedSize) ", selectedSize)
    const filteredProducts = productDetails.filter(
      (product) =>
        product.productColor === selectedColor && product.productSize === selectedSize
    );
    console.log(" @const filteredProducts = productDetails[0].filter(", filteredProducts);
    if (filteredProducts.length === 0) {alert("이미 품절되었습니다. 다른 옵션을 선택해 주세요."); return;}
    console.log("(filteredProducts.productId)", (filteredProducts[0].productId))
    setSelectedProdId(filteredProducts[0].productId)
    setIsProdId(true)
  }
  const selectSizeBtn = (e) => {
    setSelectedSize(e.target.value);
    console.log(" @console.log(selectedColor) ", selectedColor)
    console.log(" @console.log(selectedSize) ", selectedSize)
    const filteredProducts = productDetails.filter(
      (product) =>
        product.productColor === selectedColor && product.productSize === selectedSize
    );
    console.log(" @const filteredProducts = productDetails[0].filter(", filteredProducts);
    if (filteredProducts.length === 0) {alert("이미 품절되었습니다. 다른 옵션을 선택해 주세요."); return;}
    console.log("(filteredProducts.productId)", (filteredProducts[0].productId))
    setSelectedProdId(filteredProducts[0].productId)
  }
  const selectQuantityMinusBtn = (e) => {
    if (selectedQuantity <= 1) return;
    setSelectedQuantity(selectedQuantity - 1);
    console.log("console.log(selectedQuantity);", selectedQuantity);
    setIsProdId(true)
  }


  const ProductTable = () => {  // TEST CODE 상품 필터
    console.log(" @console.log(productDetails) ", productDetails)
    console.log(" @console.log(selectedColor) ", selectedColor)
    console.log(" @console.log(selectedSize) ", selectedSize)
    const filteredProducts = productDetails.filter(
      (product) =>
        product.productColor === selectedColor && product.productSize === selectedSize
    );
    console.log(" @const filteredProducts = productDetails[0].filter(", filteredProducts);
  }


  const selectProductOptionTest = async () => {
    if(selectedColor === undefined || selectedSize === undefined ){
      alert('제목을 입력해 주십시오');
      return;
    }
    const resp = await axios.post("http://localhost:3000/getSelectedProductInfo", null, { params: {"productCode": modal_productcode, "productColor": modal_productcolor, "productSize": modal_productsize} });
    
    console.log(" @ selectedItemInfo: ", resp.data);
    if (resp.data.length === 0) {alert('색상 & 사이즈를 선택하세요'); return;}
    setSelectedProdId(resp.data[0].productId);
    console.log("  setSelectedProdId(: ", selectedProdId)
    setSelectedItemInfo(resp.data);
    console.log("  setSelectedItemInfo(: ", selectedItemInfo)
    // window.localStorage.setItem("orderProductId", selectedItemInfo[0].productId)
    setUserOrderData({ ...userOrderData, orderProductId: selectedItemInfo[0].productId, orderProductQuantity: selectedQuantity});
    console.log("  selectedItemInfo[0].productId: ", selectedItemInfo[0].productId)
  }


  const updateCartItem = async () => {
    if (isProdId === false) {alert("상품 옵션 선택"); return;}
    console.log(" @ console.log(userOrderData): ", userOrderData)
    const resp = await axios.post("http://localhost:3000/updateCartItem", null, { params: {"cartId": modal_cartid, "cartProdName": productDetails[0].productName, "cartProdPrice": productDetails[0].productPrice , "cartProdQuantity": selectedQuantity, "productId": selectedProdId, "memId": "user01test", "orderSeq": 33} });
    console.log("  const addToCart = async () => { ", resp.data);
    // showToast("success");
    setIsProdId(false)
    onClose();
    window.location.reload();
  }




  return (
    <div>
      <ModalWrapper>
        <BodyWrapper />
        <ModalContent ref={modalRef}>
          <CloseButton onClick={onClose}>×</CloseButton>
          {/* <h2>Modal Title</h2>
          <p>Modal Content</p>
          <p>{modal_cartid}</p>
          <p>{modal_productid}</p>
          <p>{modal_productcode}</p>
          <p>{modal_productcolor}</p>
          <p>{modal_productsize}</p>
          <p>{modal_quantity}</p> */}
            
            <div className="cart_modal_container">
              {/* <Toast
                toastlist={addCartModal}
                position="top-right"
                setAddCartModal={setAddCartModal}
              /> */}
              
              {/* <div className="product_id">
                <h1 className="product_id">product_id 서버: {productDetails[0].productId}</h1>
              </div> */}
              {/* <div className="product_code">
                <h1 className="product_code">product_code 서버: {productDetails[0].productCode}</h1>
              </div> */}
              {/* <div className="product_category">
                <h1 className="product_category">{productDetails[0].productCategory}</h1>
              </div> */}

              
                <div className="cart_modal_title">
                  <h1 className="cart_modal_title">{productDetails[0].productName}</h1>
                </div>
                <div className="cart_modal_text_container">
                  {/* <div className="product_brand">
                    <h1 className="product_brand">{productDetails[0].productBrand}</h1>
                  </div> */}
                  {/* <div className="product_price">
                    <h1 className="product_price">₩ {productDetails[0].productPrice}</h1>
                  </div> */}
                  <div>
                  <div className="product_color">
                    {itemColorList.map((icolor, index) => (
                      <button className="cart_modal_button" key={index} value={icolor} onClick={selectColorBtn}>{icolor}</button>
                    ))}
                  </div>
                  <div className="product_size">
                    {itemSizeList.map((isize, index) => (
                      <button className="cart_modal_button" key={index} value={isize} onClick={selectSizeBtn}>{isize}</button>
                    ))}
                  </div>
                  <div className="product_quantity">
                    <button className="cart_modal_button" onClick={(e) => setSelectedQuantity(prevQuantity => prevQuantity + 1)}>+</button>
                    <p className="cart_modal_quantity_num">{selectedQuantity}</p>
                    <button className="cart_modal_button" onClick={selectQuantityMinusBtn}>-</button>
                  </div>
                  {/* <div>{selectedProdId}</div> */}
                  </div>
                  
                  <div className="image" style={{ width: 220 }}>
                    <img
                      src={`http://localhost:3000/dalrun-hc/store/products/${productDetails[0].productCode}/${productDetails[0].productCode}-01.png`}
                      alt=""
                    />
                  </div>

                </div>


              <div
                className="ptf-btn ptf-btn--primary ptf-btn--block"
                onClick={updateCartItem}
              >
                주문 수정
                  {/* <p>{userOrderData.productId}//ID: {selectedProdId}//Qty: {userOrderData.orderProductQuantity}</p> */}
              </div>

            </div>
        </ModalContent>
      </ModalWrapper>
    </div>
  );
};

export default ModalContainer;
