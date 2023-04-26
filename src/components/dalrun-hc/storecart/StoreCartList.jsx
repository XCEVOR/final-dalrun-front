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

  const [likeBtn, setLikeBtn] = useState(false);
  // console.log("console.log(location.state); ", location.state);


  const getCartList = async () => {
    const resp = await axios.post("http://localhost:3000/getUserCartInfoList", null, { params: {"memId": userId} });
    console.log("getProductData: ", resp.data);
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



  return (
    <div>
      <h1>CART</h1>
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
            <img src="assets/img/dalrun-hc/store/storecart/item-1.png" alt="" />
          </div>

          <div className="description">
            <span>Common Projects</span>
            <span>Bball High</span>
            <span>White</span>
          </div>

          <div className="quantity">
            <button className="plus-btn" type="button" name="button">
              <img src="assets/img/dalrun-hc/store/storecart/plus.svg" alt="" />
            </button>
            <input type="text" name="name" defaultValue="1" />
            <button className="minus-btn" type="button" name="button">
              <img src="assets/img/dalrun-hc/store/storecart/minus.svg" alt="" />
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
            <img src="assets/img/dalrun-hc/store/storecart/item-2.png" alt="" />
          </div>

          <div className="description">
            <span>Maison Margiela</span>
            <span>Future Sneakers</span>
            <span>White</span>
          </div>

          <div className="quantity">
            <button className="plus-btn" type="button" name="button">
              <img src="assets/img/dalrun-hc/store/storecart/plus.svg" alt="" />
            </button>
            <input type="text" name="name" defaultValue="1" />
            <button className="minus-btn" type="button" name="button">
              <img src="assets/img/dalrun-hc/store/storecart/minus.svg" alt="" />
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
            <img src="assets/img/dalrun-hc/store/storecart/item-3.png" alt="" />
          </div>

          <div className="description">
            <span>Our Legacy</span>
            <span>Brushed Scarf</span>
            <span>Brown</span>
          </div>

          <div className="quantity">
            <button className="plus-btn" type="button" name="button">
              <img src="assets/img/dalrun-hc/store/storecart/plus.svg" alt="" />
            </button>
            <input type="text" name="name" defaultValue="1" />
            <button className="minus-btn" type="button" name="button">
              <img src="assets/img/dalrun-hc/store/storecart/minus.svg" alt="" />
            </button>
          </div>

          <div className="total-price">$349</div>
        </div>






        {/* <!-- DB 데이터 --> */}
        {cartList.map((item, index) => (
          <div className="item" key={index}>
            <div className="buttons">
              <span className="delete-btn"></span>
              <span
                className={likeBtn ? "like-btn is-active" : "like-btn"}
                onClick={likeBtnClick}
              ></span>
            </div>

            <div className="image" style={{width:160}}>
            <img src={`http://localhost:3000/dalrun-hc/store/products/${item.productCode}/${item.productCode}-01.png`} alt="" />
            </div>

            <div className="description">
              <span>{ item.productName }</span>
              <span>{ item.productSize }</span>
              <span>{ item.productColor }</span>
            </div>

            <div className="quantity">
              <button className="plus-btn" type="button" name="button">
                <img src="assets/img/dalrun-hc/store/storecart/plus.svg" alt="" />
              </button>
              {/* <input type="text" name="name" defaultValue={ item[0].cartProdQuantity } /> */}
              <button className="minus-btn" type="button" name="button">
                <img src="assets/img/dalrun-hc/store/storecart/minus.svg" alt="" />
              </button>
            </div>
            <div>
              <button value={item.productId} onClick={deleteItem}>삭제: {item.productId}</button>
            </div>

            <div className="total-price">₩ { item.productPrice }</div>
          </div>
        ))}


    
      </div>
    </div>
  );
}

export default StoreCartList;