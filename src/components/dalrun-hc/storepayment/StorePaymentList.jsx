import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMemo } from "react";
// import { useLocation } from "react-router-dom";

function StoreCartList(props) {
  const [checkbox_DisplayMode, setCheckbox_DisplayMode] = useState(true);  // TEST MODE
  const navigate = useNavigate();

  let storage_memId = "x";
  let storage_memName = "x";
  let storage_memEmail = "x";
  let storage_memPhone = "x";
  let storage_memGrade = "x";
  let storage_memPoint = "x";
  let json_login = localStorage.getItem("login");
  if (json_login === null) {
      storage_memId = "user01test";
      storage_memName = "김멀티";
      storage_memEmail = "user@email.com";
      storage_memPhone = "010-0000-0000";
      storage_memGrade = "러너";
      storage_memPoint = "99999";
  }
  else {
      storage_memId = JSON.parse(json_login).memId;
      storage_memName = JSON.parse(json_login).memberName;
      storage_memEmail = JSON.parse(json_login).email;
      storage_memPhone = JSON.parse(json_login).phone;
      storage_memGrade = JSON.parse(json_login).grade;
      storage_memPoint = JSON.parse(json_login).point;
  }

  // const location = useLocation();
  const [userId, setUserId] = useState(storage_memId);
  const [cartList, setCartList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [itemQuantity, setItemQuantiry] = useState();

  const [totalPaymentAmount, setTotalPaymentAmount] = useState(0);
  const [totalDiscountedAmount, setTotalDiscountedAmount] = useState(0);
  const [fullFullPaymentAmount, setFullFullPaymentAount] = useState(0)
  const [memPoint, setMemPoint] = useState(0);

  const [data, setData] = useState([]);  // 삭제 예정.
  const [sum, setSum] = useState(0);  // 삭제 예정.

  // --------주문상세 데이터를 담기위한 state----------
  const [orderNumber, setOrderNumber] = useState();
  const [orderItems, setOrderItems] = useState([]);
  // ------------------------------------------------

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


  const getCartList = async () => {  // 분기점 형성을 위해 놔둠.
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
    // setTotalPaymentAmount(totalSum)
    // setItemQuantiry(resp.data.cartProdQuantity);


    // console.log("console.log(totalPaymentAmount) 3 : ", setTimeout(() => calcTotalPaymentAmount(), 2000) )
    setLoading(true);  // 이 코드 전에는 div에 productDetails.productName 등등 적용안됨.
  }



  const getCartList2 = async () => {
    const resp = await axios.post("http://localhost:3000/getHashmapUserCartInfoQuantityList", null, { params: {"memId": userId} });
    console.log(" @ getHashmapUserCartInfoQuantityList : ", resp.data);
    setCartList(resp.data);
    // setItemQuantiry(resp.data.cartProdQuantity);

    setLoading(true);  // 이 코드 전에는 div에 productDetails.productName 등등 적용안됨.
  }


  const calcTotalPaymentAmount = () => {  // 버튼으로 활용했던 이제는 죽은 함수.
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
   

    getCartList2();
    console.log("console.log(totalPaymentAmount) 1 : ", totalPaymentAmount)  // 삭제 예정.


    // const sum = data.reduce((total, item) => {  // 삭제 예정.
    //   console.log(`Total: ${total}, Item: ${item.productPrice}`);
    //   return total + item.columnName;
    // }, 0);
    // setSum(sum); 


    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery); document.head.removeChild(iamport);
    }


    
  }, [data])

  
  useEffect (() => {
    // alert(orderNumber)
    if (orderNumber === undefined) return;
    navigate(`/store-payment-confirm/${orderNumber}`);
  }, [orderNumber])

  useMemo (() => {
    if (storage_memGrade === "걸음마") setTotalDiscountedAmount(totalPaymentAmount * 0.97 + 3000)
    else if (storage_memGrade === "런니니") setTotalDiscountedAmount(totalPaymentAmount * 0.95 + 3000)
    else if (storage_memGrade === "러너") setTotalDiscountedAmount(totalPaymentAmount * 0.92 + 3000)
    else if (storage_memGrade === "마라토너") setTotalDiscountedAmount(totalPaymentAmount * 0.85)
  }, [totalPaymentAmount, storage_memGrade])


  if(loading === false){
    return <div>Loading...</div>
  }

  // console.log(itemQuantity);




  const onClickPayment = () => {
    console.log("  const onClickPayment = () => {", totalDiscountedAmount)
    console.log("  const onClickPayment = () => {", pulledOrderName)
    console.log("  const onClickPayment = () => {", pulledOrderPhone)
    console.log("  const onClickPayment = () => {", pulledOrderAddress)
    console.log(process.env.REACT_APP_IAMPORT_MERCHANT_ID); // ENV KEY 출력
    const { IMP } = window;
    IMP.init([[process.env.REACT_APP_IAMPORT_MERCHANT_ID]]); // 결제 상점 아이디 .env
    const paymentdata = {
      pg: "kcp", // PG사 (필수항목)
      pay_method: 'card', // 결제수단 (필수항목)
      merchant_uid: `mid_${new Date().getTime()}`, // merchant_uid (필수항목)
      name: '결제 테스트', // 주문명 (필수항목)
      amount: `${totalDiscountedAmount}`, // 금액 (필수항목)
      custom_data: { name: '부가정보', desc: '세부 부가정보' },
      buyer_name: `${pulledOrderName}`, // 구매자 이름
      buyer_tel: `${pulledOrderPhone}`, // 구매자 전화번호 (필수항목)
      buyer_email: "DALRUN@GMAIL.COM", // 구매자 이메일
      buyer_addr: `${pulledOrderAddress}`,
      buyer_postalcode: "우편번호"
    };
    IMP.request_pay(paymentdata, callback);
  }
  
  const callback = (response) => {
    const {success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status} = response;

    axios.get(`http://localhost:3000/verifyIamport/${imp_uid}`, {})
    .then (function (resp) {
      console.log(" @ verifyIamport resp: ", resp.data);
      console.log(" @ verifyIamport resp: ", resp.data.response.amount);
      if (resp.data.response.amount === totalDiscountedAmount) {
        alert("결제 성공 response")
      }
    })
    .then (function () {
      writeOrderData();
    })
    .catch (function (err) {
      alert(err);
    })

    // if (success) {
    //   alert('결제 성공');
    //   console.log(response);
    //   console.log("imp_uid: ", imp_uid);
    //   console.log("merchant_uid: ", merchant_uid);
    //   console.log("pay_method: ", pay_method);
    //   console.log("paid_amount: ", paid_amount);
    //   console.log("status: ", status);
    // } else {
    //   alert(`결제 실패 : ${error_msg}`);
    // }
  }






  const likeBtnClick = () => {  // 삭제 예정.
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
          orderName: pulledOrderName,
          orderAddress: pulledOrderAddress,
          orderPhone: pulledOrderPhone,
          orderRequirment: pulledOrderRequirment,
          orderTotalprice: totalPaymentAmount,
          orderQuantity: itemQuantity,
        },
      }
    );
    console.log("  sendOrderData: ", resp.data.result);
    setOrderNumber(resp.data.orderNumber);

    // 주문 성공시, 주문상세 데이터 넣기
    const newOrderItems = cartList.productIdList.map((list) => ({
      "orderNumber": resp.data.orderNumber,
      "productId": list.productId,
      "productName": list.cartProdName,
      "productPrice": list.cartProdPrice,
      "productQuantity": list.cartProdQuantity
    }));
    
    if(newOrderItems.length > 0) {
      console.log(newOrderItems);
      setOrderItems((prev) => [...prev, ...newOrderItems]);
      
      console.log(orderItems);
  
      axios.post("http://localhost:3000/writeOrderDetail", newOrderItems)
        .then((resp) => {
          console.log(resp.data);
          setOrderItems([]);
        })
        .catch((err) => console.log(err));
    }
  }




  const PaymentDataDisplay2 = ({ productInfoList, productIdList }) => {
    let tempSum = 0;
    return (
      <div>
        {productInfoList.map((prodInfo) => {
          const matchedProduct = productIdList.find((prodId) => prodId.productId === prodInfo.productId);
          console.log(" @ ", prodInfo.productPrice * matchedProduct.cartProdQuantity)
          tempSum += (prodInfo.productPrice * matchedProduct.cartProdQuantity)
          console.log(tempSum)
          setTotalPaymentAmount(tempSum)
          return (
            <div key={prodInfo.productId}>
              <div className="store_payment_item_container">

                {/*                 
                <div className="buttons">
                  <span className="delete-btn"></span>
                  <span
                    className={likeBtn ? "like-btn is-active" : "like-btn"}
                    onClick={likeBtnClick}
                  ></span>
                </div> 
                */}

                <div className="store_payment_item_description_image" style={{ width: 260 }}>
                  <img
                    src={`http://localhost:3000/dalrun-hc/store/products/${prodInfo.productCode}/${prodInfo.productCode}-01.png`}
                    alt=""
                  />
                </div>

                <div className="store_payment_item_description">
                  {/* <span>{prodInfo.productId}</span> */}
                  <p className="store_payment_item_description_title">{prodInfo.productName}</p>
                  <span className="store_payment_item_description_sizecolor">size: {prodInfo.productSize}</span>
                  <span className="store_payment_item_description_sizecolor">color: {prodInfo.productColor}</span>
                </div>

                <div>
                  <div className="store_payment_item_quantity">
                    <p className="store_payment_item_quantity_text">
                      Qty: {matchedProduct.cartProdQuantity}
                    </p>
                  </div>
                  
                  <div className="store_payment_item_price">
                    <p>₩ {prodInfo.productPrice * matchedProduct.cartProdQuantity}</p>
                  </div>
                </div>
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





  // 주문번호 작성 후 페이지 이동.
  const testSuccessPayment = () => {
    axios.get(`http://localhost:3000/korean`, {})
    .then (function () {
      writeOrderData();
    })
    .catch (function (err) {
      alert(err);
    })
  }


    return checkbox_DisplayMode 
    // USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ 
    ? (
      <>    <input type='checkbox' onClick={() =>(setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE
      <div className="store_payment_list_container">
        
        <section>
          <h5>결제 상품 리스트</h5>

          {/* <div className="shopping-cart"> */}
          <div>

            <PaymentDataDisplay2 productIdList={cartList.productIdList} productInfoList={cartList.productInfoList} />

            {/* <!-- DB 데이터 --> */}
          {/* 
            {cartList.map((item, index) => (
              <div className="item" key={index}>
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

                <div className="total-price">₩ {item.productPrice}</div>
              </div>
            ))}
          */}
          </div>
        </section>

        <section>
          <div className="payment_progress_container">
            <div className="payment_progress_container2">
                  <p className="payment_amount_info">총 상품 가격&emsp;&emsp; ₩ {totalPaymentAmount}</p>
                  <p className="payment_amount_info">택배비&emsp;&emsp; ₩ 3000</p>


                  <h5 className="store_payment_total_title">총 결제 금액</h5>
                  {/* <button onClick={calcTotalPaymentAmount}>
                    {totalPaymentAmount}결제금액확인test
                  </button> */}
                  {/* <Link to="/store-payment">
                    <button onClick={writeOrderData}>
                      {totalPaymentAmount}결제 실행 (주문 데이터)
                    </button>
                  </Link> */}
                  
                  {/* <Link to={`/store-payment-confirm/${orderNumber}`} >
                    <button>{totalPaymentAmount}결제 실행 (링크)</button>
                  </Link> */}

                  {storage_memGrade === "마라토너" 
                    ? <div>
                        <h3 className="store_payment_total_amount_linethrough" >₩ {totalPaymentAmount + 3000}</h3>
                        <h3 className="store_payment_total_amount" >₩ {totalDiscountedAmount}</h3>
                          <p className="store_payment_total_free">"마라토너 등급 무료배송"</p>
                      </div>
                    : <div>
                        <h3 className="store_payment_total_amount_linethrough" >₩ {totalPaymentAmount + 3000}</h3>
                        <h3 className="store_payment_total_amount" >₩ {totalDiscountedAmount}</h3>
                      </div>
                  }
                  
                  {/* <button onClick={testSuccessPayment}>testSuccessPayment</button> */}
                  <button className="store_payment_button" onClick={onClickPayment}>결제</button>


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
        <button onClick={onClickPayment}>결제하기test</button>
        {/* // Component to Component */}
        <span>{myData}</span>
        <p>{pulledOrderName}</p>
        <p>{pulledOrderAddress}</p>
        <p>{pulledOrderPhone}</p>
        <p>{pulledOrderRequirment}</p>
        <section>
          <h1>ORDER SUMMARY</h1>
          <h3>{totalPaymentAmount}</h3>
          {/* <div className="shopping-cart"> */}
          <div>
            {/* <!-- Title --> */}
            <div className="title">Shopping Bag</div>

            <PaymentDataDisplay2 productIdList={cartList.productIdList} productInfoList={cartList.productInfoList} />

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
          {/* 
            {cartList.map((item, index) => (
              <div className="item" key={index}>
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

                <div className="total-price">₩ {item.productPrice}</div>
              </div>
            ))}
          */}
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
                  <button onClick={onClickPayment}>{totalPaymentAmount}결제 실행 (프론트)</button>
                  <Link to="/store-payment-confirm">
                    <button>{totalPaymentAmount}결제 실행 (링크)</button>
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
      </>
    )
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
