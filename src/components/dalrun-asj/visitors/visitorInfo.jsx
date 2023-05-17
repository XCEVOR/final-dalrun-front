import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

function VisitorInfo() {
    const login = JSON.parse(localStorage.getItem("login"));
    const  [cookies, setCookies] = useCookies(['쿠키 이름']);

    const saveCookieData = (u) => {
        axios.post("/saveCookieData", null, { params: {"user":u} })
            .then((resp) => console.log(resp.data))
            .catch((err) => console.log(err));
    }

    const updateCookie = (u) => {
        axios.post("/updateCookie", null, { params: {"user":u} })
            .then((resp) => console.log(resp.data))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        // 쿠키가 존재하지 않으면 생성
        let newUser = "";
        let date = new Date();
        date.setHours(23,59,59)
        console.log(date);
        if (!cookies.user) {

            if(login !== null) newUser = login.memId;
            else {
                let uuid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
                    
                newUser = uuid; // 방문자 식별자 생성
            }

            setCookies('user', newUser, { path: '/', expires: date });

            // 생성된 쿠키 db에 저장
            saveCookieData(newUser);
        } else {
            updateCookie(cookies.user);
        }

    }, [cookies.user, setCookies]);
}

export default VisitorInfo;