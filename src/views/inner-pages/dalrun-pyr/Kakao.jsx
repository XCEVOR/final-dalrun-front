import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const KakaoAuthHandle = (props) => {
    let code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    const goToMain = () => {
      navigate('/');
    };
    fetch(`http://10.58.4.138:3000/oauth/kakao/callback?code=${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'success') {
          localStorage.setItem('TOKEN', data.token);
          goToMain();
          alert('로그인 성공');
        } else {
          goToMain();
          alert('로그인 실패');
        }
      });
  }, [code, navigate]);
};
  
  export default KakaoAuthHandle;