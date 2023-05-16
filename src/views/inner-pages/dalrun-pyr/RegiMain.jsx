import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Register from "./Register";
import './css/RegiMain.css';
import logo from './img/dalrun_logo.png'; // 이미지 파일 경로
// import kakao_login from './img/kakao_login.png';

function RegisterComponent() {
    //   //카카오 로그인
    // // 카카오 로그인 함수를 실행시키면 아래에 설정해 놓은 KAKAO_AUTH_URL 주소로 이동한다.
    // // 이동 된 창에서 kakao 계정 로그인을 시도할 수 있으며 로그인 버튼 클릭 시 Redirect URI로 이동하면서 빈 화면과 함게 인가코드가 발급된다.(인가코드는 파라미터 값에 들어가 있다!)
    // const REST_API_KEY = '33861296b5dfb84484e1df231821dd86';
    // const REDIRECT_URI = "http://localhost:9200/kakaocallback";
    // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
  return (
    <div id="content">
      <div className="content_inner">
        <img src={logo} className="logo2" alt="회원가입" />
        <h5>일반 회원 가입</h5>
        <h6>
          <span className="reg_t1">오늘부터,</span>
          <span className="reg_t2">함께 달런달런!</span>
        </h6>
        <p></p>
        <br></br>
        <Link to="/register" className="btnre">
          <span>달런달런 가입하기</span>
        </Link>
        {/* <a href={KAKAO_AUTH_URL}>
                    <img
                        src={kakao_login}
                        className="kakao"
                        alt="kakao"
                    />
                    </a> */}
                    
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default RegisterComponent;