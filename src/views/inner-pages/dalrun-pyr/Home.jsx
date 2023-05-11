import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Header from '../../../components/dalrun-pyr/Header';

// /login은 인증되지 않아도 접근 가능
export default function Home() {
  const history = useNavigate();

  const gotoLogin = () =>{
    history("/login");
}

  const handleLogout = () => {
    localStorage.removeItem("login")
    localStorage.removeItem("memId");
    gotoLogin();
  }

  return (
    <div className="ptf-site-wrapper animsition ptf-is--works-listing">
    <Helmet>
      <title>Dalrun - Home</title>
    </Helmet>

    <Header />

    <div className="ptf-site-wrapper__inner">
      <h1>Dalrun Dalrun 🏠</h1>
      <h2>{localStorage.getItem('id')}어서오세요!</h2>
      {/* <Link to="/login">로그인</Link> */} <br></br>
      <button 
     type="button" onClick={handleLogout}>로그아웃</button>
     <h1>Dalrun Dalrun 🏠</h1>
      <h2>{localStorage.getItem('id')}어서오세요!</h2>
    </div>
    </div>
  );
}