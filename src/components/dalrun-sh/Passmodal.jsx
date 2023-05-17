import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

function PassChangeModal(onHide) {
  const [show, setShow] = useState(false);
  const history = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchParam, setSearchParam] = useSearchParams();

  const [nowPwd, setnowPwd] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdConfirm, setPwdConfirm] = useState('');
  const [nowpwdConfirm, setnowPwdConfirm] = useState('');
  const [id, setId] = useState("");

  //오류메세지 저장
  const [nowPwdMessage, setnowPwdMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPaawordConfirmMessage] = useState('');

  //유효성 검사
  const [isPwd, setIsPwd] = useState(false);
  const [isPwdConfirm, setIsPwdConfirm] = useState(false);
  const [isnowPwdConfirm, setIsnowPwdConfirm] = useState(false);

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

useEffect(()=>{
    const str = localStorage.getItem('login')
    if(str !== null){
        const login = JSON.parse(str);
        setnowPwd(login.password);
        setId(login.memId);
    }else {
        alert('login을 해주세요.');
        history('/login');
    }
}, [history, setnowPwd]);

  const nowPwdConfirm = (e) => {
    const currentNowPwd = e.target.value;   
    setnowPwdConfirm(currentNowPwd);

    if (nowPwd !== currentNowPwd) {
        setnowPwdMessage("현재 비밀번호가 일치하지 않습니다.");
        setIsnowPwdConfirm(false);
    } else {
        setnowPwdMessage("현재 비밀번호가 일치합니다.");
        setIsnowPwdConfirm(true);
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

  const onPassSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation()

    if (!isPwd || !isPwdConfirm || !isnowPwdConfirm) {
      alert("비밀번호 변경 요건을 충족시키세요");
      return;
    }

    let formData = new FormData();
    formData.append("memId", id);
    formData.append("password", pwd);

    axios.post('/my_updatememberpass', formData)
        .then((resp) => {
            
            if(resp.data === "YES") {
                alert("수정완료");
                onHide();
                
            } else {
                alert("수정실패");
                onHide();
            }
        })
        .catch((err) => {
            console.log(err);
        });

    handleClose();        
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        비밀번호 변경
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>비밀번호 변경</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="inform container">
                <div>
                    <div className="search-content inpput" >
                        <input type="password" value={nowpwdConfirm} placeholder="본인 확인을 위해 현재 사용하고 있는 비밀번호를 입력하세요." onChange={nowPwdConfirm}/>
                        <p className="message">{nowPwdMessage}</p>
                    </div>
                    <div>
                        <label for="pwd"></label>
                        <input type="password" value={pwd} placeholder="새 비밀번호" onChange={pwdChange}/>
                        <p className="message">{passwordMessage}</p>
                    </div>
                    <div>
                        <label for="pwd_ck"></label>
                        <input type="password" value={pwdConfirm} placeholder="새 비밀번호 확인" onChange={pwdConfirmChange}/>
                        <p className="message">{passwordConfirmMessage}</p>
                    </div>            
                </div>  
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <form onSubmit={onPassSubmit}>
            <input type="submit" value="수정" /> 
          </form>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PassChangeModal;