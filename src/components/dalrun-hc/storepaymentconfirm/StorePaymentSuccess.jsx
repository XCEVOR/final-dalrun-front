import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

function StorePaymentConfirm() {
  const [checkbox_DisplayMode, setCheckbox_DisplayMode] = useState(true);  // TEST MODE

  let orderParams = useParams();
  console.log(" console.log(prodParams) ", orderParams);
  console.log(" console.log(prodParams) ", Number(orderParams.ordernumber));
  const [loading, setLoading] = useState(false);

  const [orderInfo, setOrderInfo] = useState([]);

  const getOrder = async (ordNum) => {
    const resp = await axios.post("http://localhost:3000/getOrderInfo", null, { params: {"orderNumber": ordNum} });
    console.log(" @ getHashmapUserCartInfoQuantityList : ", resp.data);
    setOrderInfo(resp.data);
    setLoading(true);
  }



  useEffect(() => {
    getOrder(orderParams.ordernumber);
  }, [orderParams.ordernumber])

  // if(loading === false){
  //   return <div>Loading...</div>
  // }









    return checkbox_DisplayMode 
    // USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ 
    ? (
      <>    <input type='checkbox' onClick={() =>(setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE
      <div className="store_payment_success_container">
        <section>
          <h2 className="store_payment_success_top_title">주문이 정상적으로 완료되었습니다.</h2>
          <div className="store_payment_success_container">

            <div>
              <div className="ptf-animated-block" data-aos="fade">
                {/* <!--FAQ--> */}
                <div className="">

                  <div className="">
                      <div className="store_payment_success_subtitle">
                        <div className="store_payment_success_subtitle_1">
                          <h6>주문번호</h6>
                        </div>
                        <div className="store_payment_success_subtitle_2">
                          <p>{orderInfo.orderNumber}</p>
                        </div>
                      </div>
      
                      <div className="store_payment_success_shipping">
                        <div className="store_payment_success_shipping_1">
                          <h6>배송정보</h6>
                        </div>
                        <div className="store_payment_success_shipping_2">
                          <p>{orderInfo.orderName}</p>
                          <p>{orderInfo.orderPhone}</p>
                          <p>{orderInfo.orderAddress}</p>
                        </div>
                      </div>
  
                    {/* End .ptf-faq__item */}
                  </div>
                </div>
              </div>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "5.625rem" }}
              ></div>
            </div>

          </div>

        </section>

        <section>
          <div className="store_payment_success_to_main_div">
            <Link to="/store-main"><button className="store_payment_success_to_main">스토어 메인</button></Link>
           </div>
        </section>

      </div>
    </>
    )


    // DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ 
    : (
      <>    <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>DEVELOPER_MODE
      
      </>
    )
}





export default StorePaymentConfirm;
