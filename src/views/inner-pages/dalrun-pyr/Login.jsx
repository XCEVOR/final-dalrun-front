import React, { useEffect, useState } from "react";

import { useCookies } from "react-cookie";
import {useNavigate, Link} from "react-router-dom";

import axios from "axios";

import './css/Login.css';
import logo from './img/logo.png';


function Login(){
    const history = useNavigate();

    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [cookies, setCookies, removeCookies] = useCookies('id'); //쿠키 hook
    const [saveId, setSaveId] = useState(false);

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
        history("/home");
    }

    function login(){
        axios.post("http://localhost:3000/login", null, {params:{'memId':id, 'password':pwd}})
            .then(function(res){
                if(res.data !== null && res.data !== ""){
                    alert('환영합니다');
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

    // function logout(){
    //     localStorage.removeItem("memId");
    //     localStorage.removeItem("password");
    //     localStorage.removeItem("login");
    //     setSavedLoginId(localStorage.getItem("memId"));
    //     setSavedLoginId(localStorage.getItem("password"));
    // }

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
                    </div>
                    <button type="button" onClick={login} className="login_button">로그인</button>
                    {/* <button type="button" onClick={logout} className="login_button">로그아웃</button> */}
                    <div className="forget_pw">
                        <a>비밀번호를 잊으셨나요?</a>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Login;