import React, { useEffect, useState } from "react";
import axios from 'axios';

const StorePaymentUser = (props) => {
  const [checkbox_DisplayMode, setCheckbox_DisplayMode] = useState(true);  // TEST MODE

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

  const [orderName, setOrderName] = useState(storage_memName);
  const [orderAddress, setOrderAddress] = useState('서울특별시 강남구 언주로 508 14층(역삼동, 서울상록빌딩)');
  const [orderPhone, setOrderPhone] = useState(storage_memPhone);
  const [orderRequirment, setOrderRequirment] = useState('빠른배송 부탁드려요~');
  const [productId, setProductId] = useState('TestProductId');
  const [memId, setMemId] = useState('TestMemId');

  const updateUserOrderInfo = () => {
    // if (orderAddress === undefined || orderAddress.trim() === "") {
    //   alert("orderAddress을 입력해 주십시오");
    //   return;
    // }

    axios
      .post("/writeProductInquiry", null, {
        params: {
          orderName: orderName,
          orderAddress: orderAddress,
          orderPhone: orderPhone,
          orderRequirment: orderRequirment,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data === "SUCCESS") {
          alert("성공적으로 등록되었습니다");
          // history('/bbslist');    // bbslist로 이동
        } else {
          alert("등록되지 않았습니다");
        }
      })
      .catch(function (err) {
        alert(err);
      });
  }

  const makeOrderNamePackage = (e) => {
    setOrderName(e.target.value)
    console.log(orderName)
    props.pushOrderNamePackage(e.target.value)
  }
  const makeOrderAddressPackage = (e) => {
    setOrderAddress(e.target.value)
    console.log(orderAddress)
    props.pushOrderAddressPackage(e.target.value)
  }
  const makeOrderPhonePackage = (e) => {
    setOrderPhone(e.target.value)
    console.log(orderPhone)
    props.pushOrderPhonePackage(e.target.value)
  }
  const makeOrderRequirmentPackage = (e) => {
    setOrderRequirment(e.target.value)
    console.log(orderRequirment)
    props.pushOrderRequirmentPackage(e.target.value)
  }

  const pushTest = () => {
      props.pushOrderNamePackage(orderName)
      props.pushOrderAddressPackage(orderAddress)
      props.pushOrderPhonePackage(orderPhone)
      props.pushOrderRequirmentPackage(orderRequirment)
  }

  useEffect(() => {
    pushTest();
  } ,[])

  

  return checkbox_DisplayMode 
  // USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ 
  ? (
    <>    
    {/* <input type='checkbox' onClick={() =>(setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE */}

    {/* <!--Animated Block--> */}
    <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
        <div className="store_payment_info_container">
          <div className="post-comment-form">
            
              <h5 className="store_payment_info_title">주문자 정보 </h5>
            
            <div className="bd-contact-form-wrapper mb-30">
              <form action="#">
                <div className="row">
                  <div className="col-12">
                    <h5 className="fz-16 text-uppercase has-3-color fw-normal store_payment_info_subtitle">
                      이름
                    </h5>
                    <div className="bd-contact-field mb-30">
                      <input
                        type="text"
                        placeholder="orderName"
                        value={orderName}
                        onChange={makeOrderNamePackage}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <h5 className="fz-16 text-uppercase has-3-color fw-normal store_payment_info_subtitle">
                      주소
                    </h5>
                    <div className="bd-contact-field mb-30">
                      <input
                        type="text"
                        placeholder="orderAddress"
                        value={orderAddress}
                        onChange={makeOrderAddressPackage}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <h5 className="fz-16 text-uppercase has-3-color fw-normal store_payment_info_subtitle">
                      전화번호
                    </h5>
                    <div className="bd-contact-field mb-30">
                      <input
                        type="text"
                        placeholder="orderPhone"
                        value={orderPhone}
                        onChange={makeOrderPhonePackage}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <h5 className="fz-16 text-uppercase has-3-color fw-normal store_payment_info_subtitle">
                      배송시 남기고 싶은 말
                    </h5>
                    <div className="bd-contact-field mb-30">
                      <textarea
                        placeholder="orderRequirment"
                        value={orderRequirment}
                        onChange={makeOrderRequirmentPackage}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="bd-contact-field">

                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
        </>
    )


    // DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ 
    : (
      <>    <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>DEVELOPER_MODE
{/* // Component to Component */}
<input
        onChange={(event) => {
          props.pushData(event.target.value);
        }}
      ></input>
      <button onClick={pushTest}>초기값 보내기</button>
      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>

        <div className="post-comment-form">
          <h4>주문자 정보 </h4>
          <span>Your email address will not be published.</span>
          <div className="bd-contact-form-wrapper mb-30">
            <form action="#">
              <div className="row">
                <div className="col-12">
                  <h5 className="fz-16 text-uppercase has-3-color fw-normal">
                    orderName
                  </h5>
                  <div className="bd-contact-field mb-30">
                    <input
                      type="text"
                      placeholder="orderName"
                      value={orderName}
                      onChange={makeOrderNamePackage}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <h5 className="fz-16 text-uppercase has-3-color fw-normal">
                    orderAddress
                  </h5>
                  <div className="bd-contact-field mb-30">
                    <input
                      type="text"
                      placeholder="orderAddress"
                      value={orderAddress}
                      onChange={makeOrderAddressPackage}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <h5 className="fz-16 text-uppercase has-3-color fw-normal">
                    orderPhone
                  </h5>
                  <div className="bd-contact-field mb-30">
                    <input
                      type="text"
                      placeholder="orderPhone"
                      value={orderPhone}
                      onChange={makeOrderPhonePackage}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <h5 className="fz-16 text-uppercase has-3-color fw-normal">
                    orderRequirment
                  </h5>
                  <div className="bd-contact-field mb-30">
                    <textarea
                      placeholder="orderRequirment"
                      value={orderRequirment}
                      onChange={makeOrderRequirmentPackage}
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <div className="bd-contact-field">
                    <button
                      type="submit"
                      // className="theme-btn"
                      onClick={() => updateUserOrderInfo()}
                    >
                      업데이트 저장
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">Address</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
        <p className="fz-20 lh-1p5 has-black-color">
          90 Fairground Rd St FL 3290
          <input></input>
          <br />
          United States
        </p>
      </div>
      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.1875rem" }}></div>
      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="100">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">Email</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
        <p className="fz-20 lh-1p5 has-black-color">
          <a href="mailto:hello@moonex.co">
            hello@moonex.co
            <br />
          </a>
          <a href="mailto:career@moonex.co">career@moonex.co</a>
        </p>
      </div>
      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.1875rem" }}></div>
      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="200">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">Phone</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
        <p className="fz-20 lh-1p5 has-black-color">
          <a href="tel:+5632356565">+56 3235 65 65</a>
        </p>
      </div>
      {/* <!--Spacer--> */}
      <div
        className="ptf-spacer"
        style={{ "--ptf-lg": "4.375rem", "--ptf-md": "2.1875rem" }}
      ></div>
      </>
    )
};

export default StorePaymentUser;
