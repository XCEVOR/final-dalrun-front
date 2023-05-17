import axios from "axios";
import { useRef, useState, useEffect  } from "react";
import { useSearchParams } from "react-router-dom";

function PassChange(onHide) {

  const [searchParam, setSearchParam] = useSearchParams();

  const [pwd, setPwd] = useState('');
  const [pwdConfirm, setPwdConfirm] = useState('');
  const [id, setId] = useState("");

  //오류메세지 저장
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPaawordConfirmMessage] = useState('');
  //유효성 검사
  const [isPwd, setIsPwd] = useState(false);
  const [isPwdConfirm, setIsPwdConfirm] = useState(false);

  const pwdChange = (e) => {
    const currentPwd = e.target.value;
    setPwd(currentPwd);
    const pwdRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    
    if(!pwdRegExp.test(currentPwd)){
        setPasswordMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요");
        setIsPwd(false);
    }else{
        setPasswordMessage("안전한 비밀번호 입니다.");
        setIsPwd(true);
    }
};

const pwdConfirmChange = (e) => {
  const currentPwdConfirm = e.target.value;
  setPwdConfirm(currentPwdConfirm);

  if(pwd !== currentPwdConfirm){
      setPaawordConfirmMessage("위에서 입력하신 비밀번호와 같지 않습니다.");
      setIsPwdConfirm(false);
  }else {
      setPaawordConfirmMessage("비밀번호가 일치합니다.");
      setIsPwdConfirm(true);
  }
};

  const onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("memId", id);
    formData.append("password", pwd);

    axios.post('/my_updatememberpass', formData)
        .then((resp) => {
            // console.log(resp.data);
            if(resp.data === "YES") {
                alert("수정완료");
                onHide();
                setSearchParam(searchParam.set('target',''));
            } else {
                alert("수정실패");
            }
        })
        .catch((err) => {
            console.log(err);
        });
}
    return(
      <div className="inform container">
        <h4 className="title">비밀번호 변경</h4>
        <br />
        <div className="inform outline" />
        <div>
          <div className="search-content inpput">
            <label>현재 비밀번호</label> <input type="password"  />
          </div>
          <div>
            <label for="pwd"></label>
            <input type="password" value={pwd} placeholder="new password" onChange={pwdChange}/>
            <p className="message">{passwordMessage}</p>
          </div>
          <div>
            <label for="pwd_ck"></label>
            <input type="password" value={pwdConfirm} placeholder="new password confirm" onChange={pwdConfirmChange}/>
            <p className="message">{passwordConfirmMessage}</p>
          </div>
  
          <input type="submit" value="수정" /> <button>취소</button>
        </div>
  
      </div>
  
      );
  }
  
  export default PassChange;