import React, { useEffect, useState } from "react";

import { useCookies } from "react-cookie";
import {useNavigate} from "react-router-dom";

import axios from "axios";

import './css/Login.css';
import logo from './img/logo.png';
import PasswordResetForm from "./PasswordResetForm";


function Login(){
    const history = useNavigate();

    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [savedLoginId, setSavedLoginId] = useState("");
    const [savedLoginPassword, setSavedLoginPassword] = useState("");

    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 여부
    const [cookies, setCookies, removeCookies] = useCookies('id'); //쿠키 hook
    const [saveId, setSaveId] = useState(false);

    //const sessionStorage = window.localStorage;

    const idChange = (e) => setId(e.target.value);
    const pwdChange = (e) => setPwd(e.target.value);

    const checkHandler = () => {          
        setSaveId(!saveId);          
        if(!saveId === true && id !== ""){            
            setCookies("user_id", id);
        }else{            
            setCookies("user_id", '');
        }
    }

    // const kakaoLogin = () => {
    //     window.location.href = KAKAO_AUTH_URL;
    // }

    function login(){
        axios.post("http://localhost:3000/login", null, {params:{'memId':id, 'password':pwd}})
            .then(function(res){
                if(res.data !== null && res.data !== ""){
                    alert('환영합니다');
                    localStorage.setItem("login", JSON.stringify(res.data));

                    localStorage.setItem("id",id);
                    localStorage.setItem("pwd",pwd);
                    setSavedLoginId(localStorage.getItem("id"));
                    setSavedLoginPassword(localStorage.getItem("pwd"));

                    history('/home');
                }else{
                    alert('id나 password를 확인해 주십시오');
                }
            })
            .catch(function(err){
                alert(err);
            })
    }

    function logout(){
        localStorage.removeItem("id");
        localStorage.removeItem("pwd");
        localStorage.removeItem("login");
        setSavedLoginId(localStorage.getItem("id"));
        setSavedLoginId(localStorage.getItem("pwd"));
    }

    // function logout() {
    //     setIsLoggedIn(false); // 로그인 상태 변경
    //     removeCookies("user_id"); // 쿠키 삭제
    //     localStorage.removeItem("login"); // 로컬스토리지에서 로그인 정보 삭제
    //     history("/login"); // 로그인 화면으로 이동
    //   }

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
                <img src={logo} alt="logo" className="logo3"/>
                    <br/>
                    들어오셔서 기뻐요!
                </h3>
                <p>
                    달런달런 전용 로그인
                </p>

                <form name="frmLogin">
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
                    </div>
                    <button onClick={login} className="login_button">로그인</button>
                    <button onClick={logout} className="login_button">로그아웃</button>
                    <div className="forget_pw">
                        <a onClick={PasswordResetForm}>비밀번호를 잊으셨나요?</a>
                    </div>
                </form>
            </div>
            <div>
                localStorage에 저장된 loginId는 {savedLoginId} 이고 loginPassword는 {savedLoginPassword} 이다. 
            </div>
            <div>
                { JSON.stringify(localStorage) }
            </div>
        </div>
        
    );
}

export default Login;