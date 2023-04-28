import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

function StoreCartList() {
  // const location = useLocation();
  const [userId, setUserId] = useState("user01test");
  const [cartList, setCartList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [itemQuantity, setItemQuantiry] = useState();

  const [totalPaymentAmount, setTotalPaymentAmount] = useState(0);

  const [likeBtn, setLikeBtn] = useState(false);
  // console.log("console.log(location.state); ", location.state);


  const getCartList = async () => {
    const resp = await axios.post("http://localhost:3000/getHashmapUserCartInfoQuantityList", null, { params: {"memId": userId} });
    console.log(" @ getHashmapUserCartInfoQuantityList : ", resp.data);
    setCartList(resp.data);
    // setItemQuantiry(resp.data.cartProdQuantity);

    setLoading(true);  // 이 코드 전에는 div에 productDetails.productName 등등 적용안됨.
  }

  useEffect(() => {
    getCartList();
  }, [])

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
    window.location.reload();
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
    return (
      <div>
        {productInfoList.map((prodInfo) => {
          const matchedProduct = productIdList.find((prodId) => prodId.productId === prodInfo.productId);
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
    );
  };


  return (
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
                <button onClick={calcTotalPaymentAmount}>{totalPaymentAmount}결제금액확인test</button>
                <Link to="/store-payment"><button>{totalPaymentAmount}결제 페이지 이동</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default StoreCartList;
