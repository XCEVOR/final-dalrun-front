import { useSearchParams, useNavigate } from "react-router-dom";
import axios from 'axios'

function KakaoCallback({match}){
    let history = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    var code = searchParams.get("code");
    //alert(code);

    const gotoHome = () =>{
        history("/home");
    }

    axios.get("http://localhost:3000/oauth/kakao/callback", {params :{"code": code}})
    .then( (res) => {
        if (!res.data){
            //로그인 실패
            alert("로그인 실패");
        }else{
            //로그인 성공
            alert("로그인 성공");
            localStorage.setItem("login", JSON.stringify(res.data));
            gotoHome();
        }
    })
    }

export default KakaoCallback;