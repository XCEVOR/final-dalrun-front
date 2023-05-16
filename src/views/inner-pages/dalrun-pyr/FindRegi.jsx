import { Link, useNavigate, useParams} from "react-router-dom";
import './css/FindRegi.css';
import React ,{ useState } from 'react';
import axios from 'axios';

function FindRegi(){
   const [findIdName, setFindIdName] = useState('');
   const [findIdEmail, setFindIdEmail] = useState('');
   const [findPwId, setFindpwId] = useState('');
   const [findPwName, setFindPwName] = useState('');
   const [findPwPhone, setFindPwPhone] = useState('');
   const [test, setTest] = useState(0);
   const [show, setShow] = useState(true);
   const [msg, setMsg] = useState("msg");

   const findId = () => {
    axios.post('/findId', {
      name:findIdName,
      email:findIdEmail
    })
    .then(res => {
      if(res.data === 'Not Found'){
        setMsg('정보에 일치하는 아이디가 없습니다.');
      }else{
        const id = res.data;
        setMsg('Id:' + id + '입니다.');
      }
    })
    .catch(error => {
      console.error(error);
    });
   }

   //const [phone,setPhone] = useState('');

  //  const handlePhoneChange = (e) => {
  //   const input = e.target.value;
  //   const formattedInput = input
  //     .replace(/[^0-9]/g, '') // 숫자 이외의 문자 제거
  //     .replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3'); // 하이픈 추가

  //   setPhone(formattedInput);
  // };

 return(
  <body>
<article className="hero">
<h2>아이디·비밀번호 찾기</h2>

<div className="login-wrap">
<div className="login-html">
<input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">아이디 찾기</label>
<input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">비밀번호 찾기</label>
<div className="login-form">
   <div className="sign-in-htm">
  <div className="group">
    <h4>이메일 주소 확인</h4>
    <h5>아이디르르 찾아드립니다.</h5>
         <input id="name" name="name" type="text" className="input" placeholder="이름"/>
      </div>
      <div className="group">
         <input id="email" type="text" name="email" className="input" data-type="text" placeholder="이메일 주소"/>
      </div>
      <div className="group">
         <button type="submit" className="pyr_button" onClick={findId}>아이디 찾기</button>
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
         <input id="id" type="text" className="input" name="id" placeholder="아이디"/>
      </div>
  <div className="group">
         <input id="name" type="text" className="input" name="name" placeholder="이름"/>
      </div>
      <div className="group">
         <input id="phone" type="text" className="input" name="phone" placeholder="이메일 주소"/>
      </div>
      <div className="group">
         <button type="submit" className="button">비밀번호 찾기</button>
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