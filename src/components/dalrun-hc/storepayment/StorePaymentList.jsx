import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

function StoreCartList(props) {
  // const location = useLocation();
  const [userId, setUserId] = useState("user01test");
  const [cartList, setCartList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [itemQuantity, setItemQuantiry] = useState();

  const [totalPaymentAmount, setTotalPaymentAmount] = useState(0);

  const [data, setData] = useState([]);  // 삭제 예정.
  const [sum, setSum] = useState(0);  // 삭제 예정.

  // Component to Component
  const [myData, setMyData] = React.useState("<blank>");
  pullData = setMyData;
  const [pulledOrderName, setPulledOrderName] = useState("<blank>");
  pullOrderNamePackage = setPulledOrderName;
  const [pulledOrderAddress, setPulledOrderAddress] = useState("<blank>");
  pullOrderAddressPackage = setPulledOrderAddress;
  const [pulledOrderPhone, setPulledOrderPhone] = useState("<blank>");
  pullOrderPhonePackage = setPulledOrderPhone;
  const [pulledOrderRequirment, setPulledOrderRequirment] = useState("<blank>");
  pullOrderRequirmentPackage = setPulledOrderRequirment;
  
  const [likeBtn, setLikeBtn] = useState(false);
  // console.log("console.log(location.state); ", location.state);


  const getCartList = async () => {
    const resp = await axios.post("http://localhost:3000/getUserCartInfoList", null, { params: {"memId": userId} });
    console.log("getProductData: ", resp.data);
    setCartList(resp.data);
    let itemPriceArr = resp.data.map(( item ) => ( parseInt(item.productPrice) ))
    console.log(itemPriceArr)
    let totalSum = itemPriceArr.reduce(( accumulativeVal, currentVal, idex ) => {
      console.log("console.log(accumulativeVal, currentVal, idex);")
      console.log(accumulativeVal, currentVal, idex);
      return accumulativeVal + currentVal;
    }, 0)
    console.log("===console.log(accumulativeVal, currentVal, idex);", totalSum)
    setSum(totalSum)  // 삭제 예정.
    setTotalPaymentAmount(totalSum)
    // setItemQuantiry(resp.data.cartProdQuantity);
    

    // console.log("console.log(totalPaymentAmount) 3 : ", setTimeout(() => calcTotalPaymentAmount(), 2000) )
    setLoading(true);  // 이 코드 전에는 div에 productDetails.productName 등등 적용안됨.
  }


  const calcTotalPaymentAmount = () => {  // 번튼으로 활용했던 이제는 죽은 함수.
    let itemPriceArr = cartList.map(( item ) => ( parseInt(item.productPrice) ))
    console.log(itemPriceArr)
    let totalSum = itemPriceArr.reduce(( accumulativeVal, currentVal, idex ) => {
      console.log(accumulativeVal, currentVal, idex);
      return accumulativeVal + currentVal;
    }, 0)
    console.log(totalSum)

    setTotalPaymentAmount(totalSum)

    return totalSum;
  }



  useEffect(() => {
   

    getCartList();
    console.log("console.log(totalPaymentAmount) 1 : ", totalPaymentAmount)  // 삭제 예정.


    // const sum = data.reduce((total, item) => {  // 삭제 예정.
    //   console.log(`Total: ${total}, Item: ${item.productPrice}`);
    //   return total + item.columnName;
    // }, 0);
    // setSum(sum); 
    
  }, [data])

  if(loading === false){
    return <div>Loading...</div>
  }

  console.log(itemQuantity);



  const likeBtnClick = () => {
    setLikeBtn(!likeBtn);
  };


  const deleteItem = async (ev) => {  // 삭제 예정.
    let val = ev.target.value;
    console.log(val);

    const resp = await axios.post("http://localhost:3000/deleteCartItem", null, { params: {"productId": val}});
    console.log("  @ deleteItem = async (ev) => { ", resp.data);
    window.location.reload();
  }



  const writeOrderData = async () => {
    const resp = await axios.post(
      "http://localhost:3000/writeOrderData",
      null,
      {
        params: {
          memId: userId,
          orderName: userId,
          orderAddress: userId,
          orderPhone: userId,
          orderRequirment: userId,
          orderTotalprice: totalPaymentAmount,
          orderQuantity: itemQuantity,
        },
      }
    );
    console.log("  sendOrderData: ", resp.data);

  }



  return (
    <div>
      {/* // Component to Component */}
      <span>{myData}</span>
      <p>{pulledOrderName}</p>
      <p>{pulledOrderAddress}</p>
      <p>{pulledOrderPhone}</p>
      <p>{pulledOrderRequirment}</p>
      <section>
        <h1>ORDER SUMMARY</h1>
        <h1>{sum}</h1>
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
          {cartList.map((item, index) => (
            <div className="item" key={index}>
              {/*               
              <div className="buttons">
                <span className="delete-btn"></span>
                <span
                  className={likeBtn ? "like-btn is-active" : "like-btn"}
                  onClick={likeBtnClick}
                ></span>
              </div>
*/}

              <div className="image" style={{ width: 160 }}>
                <img
                  src={`http://localhost:3000/dalrun-hc/store/products/${item.productCode}/${item.productCode}-01.png`}
                  alt=""
                />
              </div>

              <div className="description">
                <span>{item.productName}</span>
                <span>{item.productSize}</span>
                <span>{item.productColor}</span>
              </div>

              {/* 
              <div className="quantity">
                <button className="plus-btn" type="button" name="button">
                  <img
                    src="assets/img/dalrun-hc/store/storecart/plus.svg"
                    alt=""
                  />
                </button>
                <input type="text" name="name" defaultValue={ item[0].cartProdQuantity } />
                <button className="minus-btn" type="button" name="button">
                  <img
                    src="assets/img/dalrun-hc/store/storecart/minus.svg"
                    alt=""
                  />
                </button>
              </div>

              <div>
                <button value={item.productId} onClick={deleteItem}>
                  삭제: {item.productId}
                </button>
              </div>
*/}

              <div className="total-price">₩ {item.productPrice}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="ptf-single-post__wrapper">
          <div className="container-xxl">
            <div className="row">
              <div className="col-xl-8">
                <h3>TOTAL PAYMENT AMOUNT</h3>
                <button onClick={calcTotalPaymentAmount}>
                  {totalPaymentAmount}결제금액확인test
                </button>
                <Link to="/store-payment">
                  <button onClick={writeOrderData}>
                    {totalPaymentAmount}결제 실행 (주문 데이터)
                  </button>
                </Link>
                <Link to="/store-payment">
                  <button>{totalPaymentAmount}결제 실행</button>
                </Link>
                <h6 defaultValue={totalPaymentAmount}>{totalPaymentAmount}</h6>
                <input
                  defaultValue={totalPaymentAmount}
                  onChange={(e) => e.target.value}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


// Component to Component
var pullData;
StoreCartList.pullData = (myData) => {
  pullData(myData);
};
var pullOrderNamePackage;
StoreCartList.pullOrderNamePackage = (pulledOrderName) => {
  pullOrderNamePackage(pulledOrderName);
};
var pullOrderAddressPackage;
StoreCartList.pullOrderAddressPackage = (pulledOrderAddress) => {
  pullOrderAddressPackage(pulledOrderAddress);
};
var pullOrderPhonePackage;
StoreCartList.pullOrderPhonePackage = (pulledOrderPhone) => {
  pullOrderPhonePackage(pulledOrderPhone);
};
var pullOrderRequirmentPackage;
StoreCartList.pullOrderRequirmentPackage = (pulledOrderRequirment) => {
  pullOrderRequirmentPackage(pulledOrderRequirment);
};


export default StoreCartList;
