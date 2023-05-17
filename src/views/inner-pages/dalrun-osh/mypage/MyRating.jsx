import React, { useRef, useEffect, useState  } from "react";
import RatingImg from "../../../../components/dalrun-sh/RatingImg";
import { useNavigate } from "react-router-dom";

function Rating(){

  const [id, setId] = useState("");
  const [grade, setGrade] = useState("");
  const [point, setPoint] = useState(0);
  const [totalPoint, settotalpoint] = useState(0);

  const history = useNavigate();

  useEffect(()=>{
    const str = localStorage.getItem('login')
    if(str !== null){
        const login = JSON.parse(str);
        setId(login.memId);
        setPoint(login.point);
        settotalpoint(login.totalPoint);        
        setGrade(login.grade);
    }else {
        alert('login을 해주세요.');
        history('/login');
    }
}, [history, setId]);
const onSubmit = (e) => {
  e.preventDefault();

  let formData = new FormData();
  formData.append("memId", id);
  formData.append("point", point);
  formData.append("totalPoint", totalPoint);
  formData.append("grade", grade);

}
  return(
    <div className="members container">
      <br /><br /><br /><br /><br /><br />
      <h4 className="title">내 등급</h4>
      <br />
      <div className="inform outline" />
      <br />
      <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.375rem", "--ptf-md": "1.1875rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-7">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >

                    </div>
                  </div>

                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.75rem" }}
                ></div>

                  <RatingImg />
                  

              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
            </section>
      <div className="store">
        <div>
          {id}님의 등급은 '{grade}' 입니다.
        </div>            
        <br />
        {/* <div>
          {id}님의 누적 포인트는 '{totalPoint}' 입니다.
        </div>             */}
        <br />
        <div>
          {id}님의 포인트는 '{point}' 입니다.
        </div>            
        <br />      
        <div className="inform outline" />
        <br />            


        <div>
        걸음마: 이제 막 가입한 아기러너! 누적 포인트 : 1 ~ 500, 혜택 : 상품 구매시 할인율 3%
        <br /><br />
        런니니: 누적 포인트 : 500 ~ 1,500, 혜택 : 상품 구매시 할인율 5%
        <br /><br />
        러너: 누적 포인트 : 1,500 ~ 3,000, 혜택 : 상품 구매시 할인율 8% 
        <br /><br />
        마라토너: 누적 포인트 : 10,000~   , 혜택 : 상품 구매시 할인율 10%, 무료 배송
        <br /><br />

        </div>
        <br /><br />
      </div>
    </div>
    )
}

export default Rating;