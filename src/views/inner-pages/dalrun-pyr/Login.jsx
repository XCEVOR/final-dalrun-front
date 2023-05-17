import React, { useEffect, useState } from "react";

import { useCookies } from "react-cookie";
import {useNavigate, Link} from "react-router-dom";

import axios from "axios";

import './css/Login.css';
import logo from './img/dalrun_logo.png';

import kakao_login from './img/kakao_login.png';
import FindRegi from "./FindRegi";


function Login(){
    const history = useNavigate();

    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [cookies, setCookies, removeCookies] = useCookies('id'); //쿠키 hook
    const [saveId, setSaveId] = useState(false);

     //카카오 로그인
    // 카카오 로그인 함수를 실행시키면 아래에 설정해 놓은 KAKAO_AUTH_URL 주소로 이동한다.
    // 이동 된 창에서 kakao 계정 로그인을 시도할 수 있으며 로그인 버튼 클릭 시 Redirect URI로 이동하면서 빈 화면과 함게 인가코드가 발급된다.(인가코드는 파라미터 값에 들어가 있다!)
    const REST_API_KEY = '33861296b5dfb84484e1df231821dd86';
    const REDIRECT_URI = "http://localhost:9200/kakaocallback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const idChange = (e) => setId(e.target.value);
    const pwdChange = (e) => setPwd(e.target.value);

    const checkHandler = () => {          
        setSaveId(!saveId);          
        if(!saveId === true && id !== ""){            
            setCookies("memId", id);
        }else{            
            setCookies("memId", '');
        }
    }

    const gotoHome = () =>{
        history("/mainPage");
    }

    const gotoFindPassword = () => {
        history("/findPassword")
    }

    function login(){
        axios.post("/login", null, {params:{'memId':id, 'password':pwd}})
            .then(function(res){
                if(res.data !== null && res.data !== ""){
                    alert('환영합니다😊');
                    localStorage.setItem("login", JSON.stringify(res.data));
                    localStorage.setItem("memId", id);
                    gotoHome();
                }else{
                    alert('id나 password를 확인해 주십시오');
                }
            })
            .catch(function(err){
                alert(err);
            })
    }

    useEffect(()=>{
        let user_id = cookies.user_id;
        if(user_id !== undefined && user_id !== ""){
            setId(user_id);
            setSaveId(true);
        }else{
            setId('');
            setSaveId(false);
        }
    }, [cookies]);

    return (
        <div id="content">       
            <div className="content_inner2">
                <h3>
                <img  src={process.env.PUBLIC_URL + '/dalrun_logo.png'} alt="logo" className="logo3"/>
                    <br/>
                    서비스 이용을 위해 로그인 해주세요
                </h3>
                <p>
                    달런달런 전용 로그인
                </p>

                <div name="frmLogin">
                    <div className="form">
                        <label className="id"></label>
                        <input id="input_id" type="text" value={id} onChange={idChange} className="user_id" placeholder="아이디를 입력해주세요."/>
                    </div>
                    <div className="form_pw">
                        <label className="password"></label>
                        <input id="input_pw" type="password" value={pwd} onChange={pwdChange} className="user_pwd" placeholder="비밀번호를 입력해주세요."/>
                    </div>
                    <div className="check">
                        <input type="checkbox" checked={saveId} onChange={checkHandler} className="chk"/>
                        <label className="chke">아이디 저장</label>
                    <div className="forget_pw">
                        <Link to={"/findRegi"}>아이디 비밀번호 찾기</Link>
                    </div>
                    </div>
                    <button type="button" onClick={login} className="login_button">로그인</button>
                    <div className="pyr_kakao">
                    <a href={KAKAO_AUTH_URL}>
                    <img
                        src={kakao_login}
                        className="kakao"
                        alt="kakao"
                    />
                    </a>
                    </div>
                </div>
                <div className="forget_pw2">
                <a>달런달런이 처음이신가요?</a>
                    <Link to={"/RegiMain"}>회원가입</Link>
                </div>
                    {/* <button type="button" onClick={logout} className="login_button">로그아웃</button> */}
            </div>
        </div>
        
    );
}

export default Login;