import React from "react";
import { TbSquareRoundedNumber1, TbSquareRoundedNumber2, TbSquareRoundedNumber3, TbSquareRoundedNumber4, TbSquareRoundedNumber5 } from "react-icons/tb";
import { FcUp, FcCurrencyExchange, FcPlus } from "react-icons/fc";

import { BiRun } from "react-icons/bi";
const CrewRoleFooter = () => {
  return (
    <>
      <div className="row" style={{ marginTop: '40px', opacity: '0.8' }} >

        {/* <!--Animated Block--> */}

        <div className="col-xl-4 col-lg-6" >
          <div className="ptf-pricing-table h-100">
            <div className="ptf-pricing-table__header">

              <h6>크루 포인트별 혜택</h6>

            </div>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "2rem" }}
            ></div>

            <div className="ptf-pricing-content">

              <h6> <TbSquareRoundedNumber1 style={{ color: '#CBCDCD', marginRight: '10px' }} />0p ~ 3000p </h6>
              <p>
                땅 포인트 1.1<FcUp />배 상승
              </p>


              <h6><TbSquareRoundedNumber2 style={{ color: '#897058', marginRight: '10px' }} />3000p ~ 10000p</h6>
              <p>
                땅 포인트 1.2<FcUp />배 상승
              </p>


              <h6><TbSquareRoundedNumber3 style={{ color: 'green', marginRight: '10px' }} />10000p ~ 30000p</h6>
              <p>
                땅 포인트 1.3<FcUp />배 상승
              </p>

              <h6><TbSquareRoundedNumber4 style={{ color: 'blue', marginRight: '10px' }} />30000p ~ 100000p</h6>
              <p>
                땅 포인트 1.4<FcUp />배 상승
              </p>

              <h6><TbSquareRoundedNumber5 style={{ color: 'gold', marginRight: '10px' }} />100000 p ~ </h6>
              <p>
                땅 포인트 1.5<FcUp />배 상승
              </p>


            </div>

          </div>

        </div>



        <div className="col-xl-4 col-lg-6">
          <div className="ptf-pricing-table h-100">
            <div className="ptf-pricing-table__header">
              <h6>개인 레벨 별 혜택</h6>
            </div>

            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "2rem" }}
            ></div>

            <h6> 걸음마 &nbsp; 0p ~ 500p </h6>
            <p>
              할인율 3%<FcCurrencyExchange /> 적립
            </p>

            <h6> 런니니 &nbsp; 500p ~ 1500p </h6>
            <p>
              할인율 5%<FcCurrencyExchange /> 적립
            </p>

            <h6> 러너 &nbsp; 1500p ~ 3000p </h6>
            <p>
              할인율 8%<FcCurrencyExchange /> 적립
            </p>

            <h6> 마라토너 &nbsp; 10000p ~  </h6>
            <p>
              할인율 15%<FcCurrencyExchange /> 적립 및 무료 배송
            </p>



          </div>

        </div>
        <div className="col-xl-4 col-lg-6">

          <div className="ptf-pricing-table h-100">
            <div className="ptf-pricing-table__header">
              <h6>포인트 적립 방법</h6>
            </div>

            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "2rem" }}
            ></div>
            <table>
              <tbody>
                <tr>
                  <th>회원가입</th>
                  <td><FcPlus />  100 point</td>
                </tr>

                <tr>
                  <th>게시글 작성</th>
                  <td><FcPlus /> 10 point</td>
                </tr>

                <tr>
                  <th>쇼핑몰</th>
                  <td><FcPlus /> 0.1%</td>
                </tr>

                <tr>
                  <th>기록 달성</th>
                  <td><FcPlus /> 50 point</td>
                </tr>


              </tbody>
            </table>



          </div>



        </div>
      </div>


    </>
  );
};

export default CrewRoleFooter;


