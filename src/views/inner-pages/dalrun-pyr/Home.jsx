import React from 'react';
import { Link } from 'react-router-dom';

// /login은 인증되지 않아도 접근 가능
// 
export default function Home() {

  return (
    <div className="home-wrap">
      <h1>Dalrun Dalrun 🏠</h1>
      <Link to="/login">로그인</Link> <br></br>
      <Link to="/hello">로그아웃</Link>
    </div>
  );
}