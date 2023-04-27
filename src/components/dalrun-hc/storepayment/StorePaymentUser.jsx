import React, { useEffect, useState } from "react";
import axios from 'axios';

const Address = () => {
  const [orderName, setOrderName] = useState('제프 베이조스');
  const [orderAddress, setOrderAddress] = useState('Amazon Headquarters 410 Terry Ave. N Seattle, WA 98109');
  const [orderPhone, setOrderPhone] = useState('1-206-266-1000');
  const [orderRequirment, setOrderRequirment] = useState('빠른배송');
  const [productId, setProductId] = useState('TestProductId');
  const [memId, setMemId] = useState('TestMemId');

  const updateUserOrderInfo = () => {
    // if (orderAddress === undefined || orderAddress.trim() === "") {
    //   alert("orderAddress을 입력해 주십시오");
    //   return;
    // }

    axios
      .post("http://localhost:3000/writeProductInquiry", null, {
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


  return (
    <>
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
                      onChange={(e) => setOrderName(e.target.value)}
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
                      onChange={(e) => setOrderAddress(e.target.value)}
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
                      onChange={(e) => setOrderPhone(e.target.value)}
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
                      onChange={(e) => setOrderRequirment(e.target.value)}
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
  );
};

export default Address;
