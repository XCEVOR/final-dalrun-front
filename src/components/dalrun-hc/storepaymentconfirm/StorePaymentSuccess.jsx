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
      <div>
        <section>
          <h1>PAYMENT SUMMARY</h1>

          {/* <div className="shopping-cart"> */}
          <div>
            {/* <!-- Title --> */}
            <div className="title">Shopping Bag</div>



            {/* <!-- DB 데이터 --> */}
          

              <div >

                <div >
                <table>
                  <tbody>
                  <tr>
                    <td>&nbsp;주문번호</td>
                    <td>{orderInfo.orderNumber}</td>
                  </tr>
                  <tr>
                    <td>&nbsp;배송정보</td>
                    <td>{orderInfo.orderPhone}&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>{orderInfo.orderAddress}&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;결제금액</td>
                    <td>43545</td>
                  </tr>
                  </tbody>
                </table>
                  <div>
                  <h5>주문번호</h5><div><h5> {orderInfo.orderNumber}</h5></div>
                  </div>
                  <div></div>
                  <p>{orderInfo.orderAddress}</p>
                  <p>{orderInfo.orderDate}</p>
                  <p>{orderInfo.orderName}</p>
                  <p>{orderInfo.orderPhone}</p>
                  <h6>결제금액: {orderInfo.orderTotalprice}</h6>
                </div>
              </div>

         
          </div>
        </section>

        <section><div><Link to="/store-main"><button>스토어 메인</button></Link></div></section>

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
