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

    const gotoRegiMain = () => {
        history("/regiMain");
    }

    axios.get("http://localhost:3000/oauth/kakao/callback", {params :{"code": code}})
    .then( (res) => {
        if (!res.data){
            //로그인 실패
            alert("가입된 정보가 없으므로 회원가입 창으로 이동합니다.");
            gotoRegiMain();
        }else{
            //로그인 성공
            alert("환영합니다😊");
            localStorage.setItem("login", JSON.stringify(res.data));
            gotoHome();
        }
    })
    }

export default KakaoCallback;