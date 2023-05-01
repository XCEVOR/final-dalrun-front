import React, { useCallback, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//import FootSizeSelector from "./FootInfromation";
import './css/Register.css';

//프로필 사진 profile
//발 모양 정보 foot
function Register(){
    const history = useNavigate();

    //이름, 비밀번호, 이름, 이메일, 번호, 생년월일 확인
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdConfirm, setPwdConfirm] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birth, setBirth] = useState('');
    const [footSize, setFootSize] = useState('');
    const [imgFile, setImgFile] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
    const imgRef = useRef(); // 파일 선택 창에서 선택된 파일을 가리키는 역할

    //이름, 비밀번호, 이름, 이메일, 번호, 생년월일 감지
    // const idChange = (e) => setId(e.target.value);
    // const pwdChange = (e) => setPwd(e.target.value);
    // const pwdConfirmChange = (e) => setPwdConfirm(e.target.value);
     const nameChange = (e) => setName(e.target.value);
    // const emailChange = (e) => setEmail(e.target.value);
    // const phoneChange = (e) => setPhone(e.target.value);
     const birthChange = (e) => setBirth(e.target.value);
     const handleFootSizeChange = (e) => {
        setFootSize(e.target.value);
    }
    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
        };
    };

    //오류메세지 저장
    const [idMessgage, setIdMessage] = useState()
    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordConfirmMessage, setPaawordConfirmMessage] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [phoneMessage, setPhoneMessage] = useState('');

    //유효성 검사
    const [isId, setIsId] = useState(false);
    const [isPwd, setIsPwd] = useState(false);
    const [isPwdConfirm, setIsPwdConfirm] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [IsPhone, setIsPhone] = useState(false);

    const idChange = (e) => {
        const currentId = e.target.value;
        setId(currentId);
        const idRegExp = /^[a-zA-z0-9]{4,12}$/;

        if (!idRegExp.test(currentId)) {
            setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
            setIsId(false);
        } else {
            setIdMessage("사용가능한 아이디 입니다.");
            setIsId(true);
        }
        };

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

    const emailChange = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
        const emailRegExp =
            /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

        if (!emailRegExp.test(currentEmail)) {
            setEmailMessage("이메일의 형식이 올바르지 않습니다.");
            setIsEmail(false);
        } else {
            setEmailMessage("사용 가능한 이메일 입니다.");
            setIsEmail(true);
        }
    };

    const phoneChange = (e) => {
        const currentPhone = e.target.value;
        setPhone(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

        if (!phoneRegExp.test(currentPhone)) {
            setPhoneMessage("전화번호 형식이 올바르지 않습니다.");
            setIsPhone(false);
        } else {
            setPhoneMessage("사용 가능한 번호입니다:-)");
            setIsPhone(true);
        }
    };

    const gotoLogin = () =>{
        history("/login");
    }

    function idChkBtn(){
        axios.post("http://localhost:3000/idcheck", null, { params:{ "memId":id } })
             .then(function(res){
                if(res.data === 'YES'){
                    alert('사용가능한 아이디 입니다.');
                }else{
                    alert('사용중인 아이디입니다');
                    setId('');
                }
             })
             .catch(function(err){
                alert(err);
             })
    }

      function account(){
        axios.post("http://localhost:3000/addmember", null, 
        { params:{'memId':id, 'password':pwd, 'memberName':name,'email':email, 'phone':phone, 'birth':birth,'foot':footSize} })
            .then(function(res){
                if(res.data === "YES"){
                    alert('정상적으로 가입되었습니다');
                    gotoLogin()
                    console.log('params:', { memId: id, password: pwd, memberName: name, email: email, phone: phone, birth: birth, foot: footSize, profile: imgFile });
                }
                else{
                    alert('회원가입에 실패했습니다. 다시 가입해주세요.');
                    console.log('params:', { memId: id, password: pwd, memberName: name, email: email, phone: phone, birth: birth, foot: footSize, profile: imgFile });
                }
            })
            .catch(function(err){
                alert(err);
            })
    }

    return (
        <div id="content">
            <div className="content_inner3">
                <div className="register_main">
                    <h4>회원가입</h4>
                    <div id="reg">
                        <form action="#">
                            <fieldset>
                                <div>                        
                                {/* <Avatar 
                                    src={image} 
                                    style={{margin:'20px'}} 
                                    size={200} 
                                    onClick={()=>{fileInput.current.click()}}/> */}
                                     <label className="signup-profileImg-label" htmlFor="profileImg">프로필 이미지</label>

                                        {/* // 업로드 된 이미지 미리보기 */}
                                        <img
                                        src={imgFile ? imgFile :`/images/icon/user.png`}
                                        alt="프로필 이미지"
                                        />

                                        {/* // 이미지 업로드 input */}
                                        <input
                                        type="file"
                                        accept="image/*"
                                        id="profileImg"
                                        onChange={saveImgFile}
                                        ref={imgRef}
                                        />

                                    <label for="id"></label>
                                    <input type="text" value={id} placeholder="id" onChange={idChange}/>
                                    <p className="message">{idMessgage}</p>
                                </div>
                                <div>
                                    <button type="button" onClick={idChkBtn}>아이디 중복확인</button>
                                </div>
                                <div>
                                    <label for="pwd"></label>
                                    <input type="password" value={pwd} placeholder="password" onChange={pwdChange}/>
                                    <p className="message">{passwordMessage}</p>
                                </div>
                                <div>
                                    <label for="pwd_ck"></label>
                                    <input type="password" value={pwdConfirm} placeholder="password confirm" onChange={pwdConfirmChange}/>
                                    <p className="message">{passwordConfirmMessage}</p>
                                </div>
                                <div>
                                    <label for="name"></label>
                                    <input type="text" value={name} placeholder="your name" onChange={nameChange}/>
                                </div>
                                <div>
                                    <label for="email"></label>
                                    <input type="email" value={email} placeholder="email (ex@naver.com)" onChange={emailChange} />
                                    <p className="message">{emailMessage}</p>
                                </div>
                                <div>
                                    <label for="phone"></label>
                                    <input type="tel" value={phone} placeholder="phone number (010-1234-5678)" onChange={phoneChange}/>
                                    <p className="message">{phoneMessage}</p>
                                </div>
                                <div>
                                    <label for="birthdate">생년월일</label>
                                    <input type="date" onChange={birthChange}/>
                                </div>
                                
                                <label htmlFor="foot-size">발볼 넓이:</label>
                                <select id="foot-size" value={footSize} onChange={handleFootSizeChange}>
                                    <option value="">선택하세요</option>
                                    <option value="narrow">발볼이 좁은편</option>
                                    <option value="normal">보통</option>
                                    <option value="wide">넓은편</option>
                                    <option value="extra-wide">아주 넓은편</option>
                                </select>

                                    <input type="submit" value="회원가입" onClick={account}/>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;