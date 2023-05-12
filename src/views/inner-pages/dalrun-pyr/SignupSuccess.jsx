import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import "./css/SignupSuccess.css";

const SignupSuccess = () => {
  let [top, setTop] = useState(20);
  let [opacity, setOpacity] = useState(0);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    setTimeout(() => {
      setTop(70);
      setOpacity(1);
    }, 200);
  });

  return (
    <div className="bg">
      <div className="Signup-wrap">
        <div className="Signup-backicon" onClick={handleBack}>
          <i class="bi bi-chevron-left" style={{ fontSize: 30 }}></i>
        </div>
        <div className="Signup-header">회원가입 완료</div>
        <div className="Signup-guidebar">
          <div className="guideline"></div>
          <span>회원가입 완료</span>
          <div className="guideline"></div>
        </div>

        <div className="Signup-Successbox">
          <div
            className="Signup-SuccessMessage"
            style={{ top: top, opacity: opacity }}
          >
            <p>🎉 환영합니다! 포인트 100점을 선물로 드렸으니 확인해보세요. 🎉</p>
            <p>(●'◡'●)</p>
          </div>
          <div
            className="Signup-button"
            style={{ position: "absolute", top: 310, width: "100%" }}
          >
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="btn-colour-1"
              style={{ width: 256 }}
            >
              로그인하러 가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupSuccess;