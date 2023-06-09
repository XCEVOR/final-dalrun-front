import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

import ModalButton from "./storemodal/ModalButton";
import ModalContainer from "./storemodal/ModalContainer";
import { useMemo } from "react";

function StoreCartList() {
  const [checkbox_DisplayMode, setCheckbox_DisplayMode] = useState(true);  // TEST MODE

  let storage_memId = "x";
  let storage_memEmail = "x";
  let json_login = localStorage.getItem("login");
  if (json_login === null) {
      storage_memId = "user01test";
      storage_memEmail = "user@email.com";
  }
  else {
      storage_memId = JSON.parse(json_login).memId;
      storage_memEmail = JSON.parse(json_login).email;
  }

  // const location = useLocation();
  const [userId, setUserId] = useState(storage_memId);
  const [cartList, setCartList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [itemQuantity, setItemQuantiry] = useState();

  const [totalPaymentAmount, setTotalPaymentAmount] = useState(0);

  const [likeBtn, setLikeBtn] = useState(false);
  // console.log("console.log(location.state); ", location.state);
  const [delStatus, setDelStatus] = useState(false);


  const getCartList = async () => {
    const resp = await axios.post("http://localhost:3000/getHashmapUserCartInfoQuantityList", null, { params: {"memId": userId} });
    console.log(" @ getHashmapUserCartInfoQuantityList : ", resp.data);
    setCartList(resp.data);
    // setItemQuantiry(resp.data.cartProdQuantity);

    setLoading(true);  // 이 코드 전에는 div에 productDetails.productName 등등 적용안됨.
  }

  useEffect(() => {
    getCartList();
  }, [totalPaymentAmount])

  useMemo (() => {
    getCartList();
    setDelStatus(false)
  }, [delStatus])

  if(loading === false){
    return <div>Loading...</div>
  }

  console.log(itemQuantity);



  const likeBtnClick = () => {
    setLikeBtn(!likeBtn);
  };


  const deleteItem = async (ev) => {
    let val = ev.target.value;
    console.log(val);

    const resp = await axios.post("http://localhost:3000/deleteCartItem", null, { params: {"productId": val}});
    console.log("  @ deleteItem = async (ev) => { ", resp.data);
    alert("선택한 상품이 삭제 되었습니다.")
    setDelStatus(true)
    // window.location.reload();
  }


  
  const calcTotalPaymentAmount = () => {
    
    cartList.map((item) => (
      setTotalPaymentAmount(totalPaymentAmount + parseInt(item.productPrice))
    ))
    cartList.map((item) => (
      console.log(parseInt(item.productPrice))
    ))

    let itemPriceArr = cartList.map(( item ) => ( parseInt(item.productPrice) ))
    console.log(itemPriceArr)
    let totalSum = itemPriceArr.reduce(( accumulativeVal, currentVal, idex ) => {
      console.log(accumulativeVal, currentVal, idex);
      return accumulativeVal + currentVal;
    }, 0)
    console.log(totalSum)

    setTotalPaymentAmount(totalSum)
  }



  
  // function CartDataDisplayTest({ cartData }) {
  //   return (
  //     <div>
  //       {cartData.productIdList.map((product) => {
  //         const matchedProduct = cartData.productInfoList.find((info) => info.productId === product.productId);
  //         if (!matchedProduct) return null;
  //         return (
  //           <div key={product.productId}>
  //             <p>Quantity: {product.cartProdQuantity}</p>
  //             <p>Product ID: {product.productId}</p>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // }

  // const CartDataDisplay = ({ productIdList, productInfoList }) => {
  //   return (
  //     <div>
  //       {productIdList.map((product) => {
  //         const productInfo = productInfoList.find((info) => info.productId === product.productId);
  //         return (
  //           <div key={product.productId}>
  //             <p>Product ID: {product.productId}</p>
  //             <p>Product Code: {productInfo.productCode}</p>
  //             <p>Product Name: {productInfo.productName}</p>
  //             <p>Product Price: {productInfo.productPrice}</p>
  //             <p>Product Size: {productInfo.productSize}</p>
  //             <p>Cart Product Quantity: {product.cartProdQuantity}</p>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // };

  const CartDataDisplay2 = ({ productInfoList, productIdList }) => {
    let tempSum = 0;
    console.log("  console.log(productInfoList) ", productInfoList)
    console.log("  console.log(productIdList) ", productIdList)
    return checkbox_DisplayMode 
    // USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ 
    ? (
      <>    
      {/* <input type='checkbox' onClick={() =>(setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE */}
      <div>
        {/* <ModalButton ></ModalButton> */}
        {productInfoList.map((prodInfo) => {
          const matchedProduct = productIdList.find((prodId) => prodId.productId === prodInfo.productId);
          console.log(" @ ", prodInfo.productPrice * matchedProduct.cartProdQuantity)
          tempSum += (prodInfo.productPrice * matchedProduct.cartProdQuantity)
          console.log(tempSum)
          setTotalPaymentAmount(tempSum)
          return (
            <div key={matchedProduct.cartId}>
              <div className="item">
                <div className="store_cart_description_photo">
                  <img
                    src={`http://localhost:3000/dalrun-hc/store/products/${prodInfo.productCode}/${prodInfo.productCode}-01.png`}
                    alt=""
                  />
                </div>

                <div className="store_cart_description">
                  <p className="store_cart_description_title">{prodInfo.productName}</p>
                  <div className="store_cart_description_div">
                  <span className="store_cart_description_options">사이즈: </span>
                  <span className="store_cart_description_selected">{prodInfo.productSize}</span>
                  <p className="store_cart_description_options">컬러: </p>
                  <span className="store_cart_description_selected">{prodInfo.productColor}</span>
                  
                  </div>

                </div>

                <div className="store_cart_description_div">
                  <p className="store_cart_description_quantity">QTY: </p>
                  <span className="store_cart_description_quantity_num">{matchedProduct.cartProdQuantity}</span>
                </div>
                <div className="store_cart_description_quantity_amount">₩ {prodInfo.productPrice * matchedProduct.cartProdQuantity}</div>
                
                <div>
                  <ModalButton 
                    modal_cartid={matchedProduct.cartId} 
                    modal_productid={prodInfo.productId} 
                    modal_productcode={prodInfo.productCode}
                    modal_productcolor={prodInfo.productColor}
                    modal_productsize={prodInfo.productSize}
                    modal_quantity={matchedProduct.cartProdQuantity}
                  >
                  </ModalButton>
                  <button className="store_cart_del_btn" value={prodInfo.productId} onClick={deleteItem}>
                    삭제
                  </button>
                  {/* <span value={prodInfo.productId} onClick={deleteItem} className="delete-btn"></span> */}
                </div>

                
              </div>



            </div>
          );
        })}
      </div>
      </>
    )


    // DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ 
    : (
      <>    <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>DEVELOPER_MODE
      <div>
        {productInfoList.map((prodInfo) => {
          const matchedProduct = productIdList.find((prodId) => prodId.productId === prodInfo.productId);
          console.log(" @ ", prodInfo.productPrice * matchedProduct.cartProdQuantity)
          tempSum += (prodInfo.productPrice * matchedProduct.cartProdQuantity)
          console.log(tempSum)
          setTotalPaymentAmount(tempSum)
          return (
            <div key={prodInfo.productId}>
              <div className="item">
                <div className="buttons">
                  <span className="delete-btn"></span>
                  <span
                    className={likeBtn ? "like-btn is-active" : "like-btn"}
                    onClick={likeBtnClick}
                  ></span>
                </div>

                <div className="image" style={{ width: 160 }}>
                  <img
                    src={`http://localhost:3000/dalrun-hc/store/products/${prodInfo.productCode}/${prodInfo.productCode}-01.png`}
                    alt=""
                  />
                </div>

                <div className="description">
                  <span>{prodInfo.productId}</span>
                  <span>{prodInfo.productName}</span>
                  <span>{prodInfo.productSize}</span>
                  <span>{prodInfo.productColor}</span>
                </div>

                <div className="quantity">
                  <button className="plus-btn" type="button" name="button">
                    <img
                      src="assets/img/dalrun-hc/store/storecart/plus.svg"
                      alt=""
                    />
                  </button>
                  <input
                    type="text"
                    name="name"
                    defaultValue={matchedProduct.cartProdQuantity}
                  />
                  <button className="minus-btn" type="button" name="button">
                    <img
                      src="assets/img/dalrun-hc/store/storecart/minus.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div>
                  <button value={prodInfo.productId} onClick={deleteItem}>
                    삭제: {prodInfo.productId}
                  </button>
                </div>

                <div className="total-price">₩ {prodInfo.productPrice * matchedProduct.cartProdQuantity}</div>
              </div>

              {/* 
              <p>Product ID: {prodInfo.productId}</p>
              <p>Product Code: {prodInfo.productCode}</p>
              <p>Product Name: {prodInfo.productName}</p>
              <p>Product Price: {prodInfo.productPrice}</p>
              <p>Product Size: {prodInfo.productSize}</p>
              <p>Cart Product Quantity: {matchedProduct.cartProdQuantity}</p>
              <p>Cart Product cartProdName: {matchedProduct.cartProdName}</p> 
              */}

            </div>
          );
        })}
      </div>
      </>
    )
  };


  return checkbox_DisplayMode 
  // USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ 
  ? (
    <>    <input type='checkbox' onClick={() =>(setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE
    <div>
      <section>
      <h1>CART</h1>
      <div className="ptf-single-post__wrapper">
        <div className="container-xxl">
          <div className="store_cart_row">
            <div className="col-xl-12">
              <div>
              <CartDataDisplay2 productIdList={cartList.productIdList} productInfoList={cartList.productInfoList} />
              </div>
            </div>
          </div>
        </div>
      </div>
        
        

      </section>

      <section>
            <div className="store_cart_checkout_div">
              <div className="store_cart_checkout_div2">
                <h1>TOTAL AMOUNT</h1>
                <h3>₩ {totalPaymentAmount}</h3>
                {/* <button onClick={calcTotalPaymentAmount}>{totalPaymentAmount}결제금액확인test</button> */}
                
                  <Link to="/store-payment"><div><button className="store_cart_checkout_button">결제 페이지 이동</button></div></Link>
              </div>
            </div>
      </section>

    </div>
    </>
  )


  // DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ 
  : (
    <>    <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>DEVELOPER_MODE
    <div>
      <section>
        <h1>CART</h1>
        {/* <CartDataDisplayTest cartData={cartList} /> */}
        {/* <CartDataDisplay productIdList={cartList.productIdList} productInfoList={cartList.productInfoList} /> */}
        <CartDataDisplay2 productIdList={cartList.productIdList} productInfoList={cartList.productInfoList} />


        {/* <div className="shopping-cart"> */}
        <div>
          {/* <!-- Title --> */}
          <div className="title">Shopping Bag</div>

          {/* <!-- Product #1 --> */}
          <div className="item">
            <div className="buttons">
              <span className="delete-btn"></span>
              <span
                className={likeBtn ? "like-btn is-active" : "like-btn"}
                onClick={likeBtnClick}
              ></span>
            </div>

            <div className="image">
              <img
                src="assets/img/dalrun-hc/store/storecart/item-1.png"
                alt=""
              />
            </div>

            <div className="description">
              <span>Common Projects</span>
              <span>Bball High</span>
              <span>White</span>
            </div>

            <div className="quantity">
              <button className="plus-btn" type="button" name="button">
                <img
                  src="assets/img/dalrun-hc/store/storecart/plus.svg"
                  alt=""
                />
              </button>
              <input type="text" name="name" defaultValue="1" />
              <button className="minus-btn" type="button" name="button">
                <img
                  src="assets/img/dalrun-hc/store/storecart/minus.svg"
                  alt=""
                />
              </button>
            </div>

            <div className="total-price">$549</div>
          </div>

          {/* <!-- Product #2 --> */}
          <div className="item">
            <div className="buttons">
              <span className="delete-btn"></span>
              <span
                className={likeBtn ? "like-btn is-active" : "like-btn"}
                onClick={likeBtnClick}
              ></span>
            </div>

            <div className="image">
              <img
                src="assets/img/dalrun-hc/store/storecart/item-2.png"
                alt=""
              />
            </div>

            <div className="description">
              <span>Maison Margiela</span>
              <span>Future Sneakers</span>
              <span>White</span>
            </div>

            <div className="quantity">
              <button className="plus-btn" type="button" name="button">
                <img
                  src="assets/img/dalrun-hc/store/storecart/plus.svg"
                  alt=""
                />
              </button>
              <input type="text" name="name" defaultValue="1" />
              <button className="minus-btn" type="button" name="button">
                <img
                  src="assets/img/dalrun-hc/store/storecart/minus.svg"
                  alt=""
                />
              </button>
            </div>

            <div className="total-price">$870</div>
          </div>

          {/* <!-- Product #3 --> */}
          <div className="item">
            <div className="buttons">
              <span className="delete-btn"></span>
              <span
                className={likeBtn ? "like-btn is-active" : "like-btn"}
                onClick={likeBtnClick}
              ></span>
            </div>

            <div className="image">
              <img
                src="assets/img/dalrun-hc/store/storecart/item-3.png"
                alt=""
              />
            </div>

            <div className="description">
              <span>Our Legacy</span>
              <span>Brushed Scarf</span>
              <span>Brown</span>
            </div>

            <div className="quantity">
              <button className="plus-btn" type="button" name="button">
                <img
                  src="assets/img/dalrun-hc/store/storecart/plus.svg"
                  alt=""
                />
              </button>
              <input type="text" name="name" defaultValue="1" />
              <button className="minus-btn" type="button" name="button">
                <img
                  src="assets/img/dalrun-hc/store/storecart/minus.svg"
                  alt=""
                />
              </button>
            </div>

            <div className="total-price">$349</div>
          </div>

          {/* <!-- DB 데이터 --> */}
          {/* {cartList.map((item, index) => ( item.map(first => (<div>{first.productId}</div>))
            
            // <div className="item" key={index}>
            //   <div className="buttons">
            //     <span className="delete-btn"></span>
            //     <span
            //       className={likeBtn ? "like-btn is-active" : "like-btn"}
            //       onClick={likeBtnClick}
            //     ></span>
            //   </div>

            //   <div className="image" style={{ width: 160 }}>
            //     <img
            //       src={`http://localhost:3000/dalrun-hc/store/products/${item.productCode}/${item.productCode}-01.png`}
            //       alt=""
            //     />
            //   </div>

            //   <div className="description">
            //     <span>{item.productName}</span>
            //     <span>{item.productSize}</span>
            //     <span>{item.productColor}</span>
            //   </div>

            //   <div className="quantity">
            //     <button className="plus-btn" type="button" name="button">
            //       <img
            //         src="assets/img/dalrun-hc/store/storecart/plus.svg"
            //         alt=""
            //       />
            //     </button>
            //     <input type="text" name="name" defaultValue={ item[0].cartProdQuantity } />
            //     <button className="minus-btn" type="button" name="button">
            //       <img
            //         src="assets/img/dalrun-hc/store/storecart/minus.svg"
            //         alt=""
            //       />
            //     </button>
            //   </div>
            //   <div>
            //     <button value={item.productId} onClick={deleteItem}>
            //       삭제: {item.productId}
            //     </button>
            //   </div>

            //   <div className="total-price">₩ {item.productPrice}</div>
            // </div>
          ))} */}
        </div>
      </section>

      <section>
        <div className="ptf-single-post__wrapper">
          <div className="container-xxl">
            <div className="row">
              <div className="col-xl-8">
                <h1>CHECK OUT</h1>
                <h3>₩ {totalPaymentAmount}</h3>
                <button onClick={calcTotalPaymentAmount}>{totalPaymentAmount}결제금액확인test</button>
                <Link to="/store-payment"><button>{totalPaymentAmount}결제 페이지 이동</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  )
}

export default StoreCartList;
