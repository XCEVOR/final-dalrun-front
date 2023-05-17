import './css/FindRegi.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function FindRegi(){
    const history = useNavigate();

   const [findIdName, setFindIdName] = useState('');
   const [findIdEmail, setFindIdEmail] = useState('');
   const [findPwId, setFindpwId] = useState('');
   const [findPwName, setFindPwName] = useState('');
   const [findPwPhone, setFindPwPhone] = useState('');
   const [show, setShow] = useState(false);
   const [msg, setMsg] = useState("");

   const findIdNameChange = (e) => setFindIdName(e.target.value);
   const findIdEmailChange = (e) => setFindIdEmail(e.target.value);
   const findPwIdChange = (e) => setFindpwId(e.target.value);
   const findPwNameChange = (e) => setFindPwName(e.target.value);
   const findPwPhoneChange = (e) => setFindPwPhone(e.target.value);

   const findId = () =>{
      setMsg("");
      setShow(false);
      axios.post("http://localhost:3000/findId", {
         memberName:findIdName,
         email:findIdEmail
      })
      .then((res) => {
         if(res.data==="Not Found"){
            alert("일치하는 회원 정보를 찾을 수 없습니다.");
            return;
         }
         setMsg("회원님의 아이디는 "+res.data+"입니다.");
         setShow(true);
      })
      .catch((err) => {
         console.log(err);
      });
   }

   const findPw = () => {
      setMsg("");
      setShow(false);
      axios.post("http://localhost:3000/findpw", {
         memId:findPwId,
         memberName:findPwName,
         phone:findPwPhone
      })
      .then((res) => {
         if(res.data==="success"){
            alert("등록된 전화번호로 임시 비밀번호가 발급되었습니다.");
         }else{
            alert("일치하는 회원 정보를 찾을 수 없습니다.");
         }
      })
   }

//    function gotoFindPw(){
//     history('/findpw');
//    }


    return(
        <body>
     <article className="hero">
    <h2>아이디·비밀번호 찾기</h2>
    
    <div className="login-wrap">
   <div className="login-html">
      <input id="tab-1" type="radio" name="tab" className="sign-in"/><label for="tab-1" className="tab">아이디 찾기</label>
      <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">비밀번호 찾기</label>
      <div className="login-form">
         <div className="sign-in-htm">
        <div className="group">
          <h4>이메일 주소 확인</h4>
          <h5>아이디를 찾아드립니다.</h5>
               <input id="name" onChange={findIdNameChange} name="name" type="text" className="input" placeholder="이름"/>
            </div>
            <div className="group">
               <input id="email" onChange={findIdEmailChange} type="text" name="email" className="input" data-type="text" placeholder="이메일 주소"/>
            </div>
            <div className="group">
               <button onClick={findId} className="pyr_button">아이디 찾기</button>
        </div>
        {show && (<div style={{width:'100%', margin:'0 auto', textAlign:'center'}}>
         <div style={{width:'90%', height:'100px',margin:'0 auto', backgroundColor:'#FAFAFA', padding:"15px 20px",border:"1px solid #ddd", borderRadius:"12px", color:"black"}}>
            <span>{msg}</span>
         </div>
         <div style={{margin:"0 auto", color:"black", width:"100%"}}>
            <Link to="/login" >
               <span>로그인하기</span>
            </Link>
         </div>
        </div>)
        }
         </div>
         
         <div className="sign-up-htm">
            <div className="group">
          <h4>아이디, 연락처 확인</h4>
          <h5>작성하신 연락처로 임시 비밀번호를 보내드립니다.</h5>
               <input id="id" type="text" onChange={findPwIdChange} className="input" name="id" placeholder="아이디"/>
            </div>
        <div className="group">
               <input id="name" type="text" onChange={findPwNameChange} className="input" name="name" placeholder="이름"/>
            </div>
            <div className="group">
               <input id="phone" type="text" onChange={findPwPhoneChange} className="input" name="phone" placeholder="전화번호"/>
            </div>
            <div className="group">
               <button onClick={findPw} className="button">비밀번호 찾기</button>
        </div>
         </div>
      </div>
   </div>
</div>
  </article>
</body>

    );
}
export default FindRegi;