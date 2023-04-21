import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const LoginCheck = (props) => {
    const [id, setId] = useState('');
    const [cookies, setCookies, removeCookies] = useCookies('id');
    const navigate = useNavigate();

    const authCheck = () => { // 페이지에 들어올때 쿠키로 사용자 체크
		const token = cookies.id; // 쿠키에서 id 를 꺼내기
		axios
			.post('/loginCheck', { token: token }) // 토큰으로 서버에 인증 요청
			.then((res) => {
				setId(res.data.id); // 유저 아이디 표시를 위해 작성
			})
			.catch(() => {
				logOut(); // 에러 발생시 실행
			});
	};

    useEffect(() => {
		authCheck(); // 로그인 체크 함수
	});

	const logOut = () => {
		removeCookies('id'); // 쿠키를 삭제
        localStorage.removeItem("login"); // 로컬스토리지에서 로그인 정보 삭제
		navigate('/pyrWorkspace'); // 메인 페이지로 이동
	};

	return (
		<>
			{id && <h1>{id}</h1>}
			<button onClick={logOut}>로그아웃</button>
		</>
	);
};
export default LoginCheck;