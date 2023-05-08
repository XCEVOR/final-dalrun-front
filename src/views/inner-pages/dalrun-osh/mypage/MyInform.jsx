import React, { useRef, useEffect, useState  } from "react";
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import PassChange from "./inner/passchange/PassChange";
import ModalBtn from "../../../../components/dalrun-sh/ModalBtn";
import "../../../../assets/dalrun-sh/scss/inform.scss"

function Inform() {
    // 로그인 정보
  const [login, setLogin] = useState([]);
  const [loginTF,setLoginTF]=useState(false);

  useEffect(() => {

    const logindata=JSON.parse(localStorage.getItem('login'));
    if(logindata){
      console.log(logindata.memId,"님이 접속하였습니다..")
      setLogin(logindata);

      setLoginTF(true);
    }
  
  }, []);

  const [myinform, setmyinform] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/myinform')
      .then(response => {
        setmyinform(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const passCg = [
    {cate:"update", name:"비밀번호 변경", selected:<PassChange />} 
  ];
  const category = [
    {cate:"save", name:"저장", selected:"저장하시겠습니까?"},     
    {cate:"delete", name:"회원탈퇴", selected:"정말 탈퇴하시겠습니까?"}
  ];
  const [userInfo, setUserInfo] = useState({
    id: 'mul_cam',
    email: 'dalrun@naver.com',
    phoneNumber: '01023139112',
    nickname: '런니니',
    password: '비밀',
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  // 사용자 정보 수정 함수
  const handleUserInfoChange = (event, memId) => {
    const { name, value } = event.target;

    // 사용자 정보 리스트 복사본 생성
    const newUserDataList = [...myinform];

    // 수정된 사용자 정보 업데이트
    const updatedUserData = newUserDataList.find(userData => userData.memId === memId);
    updatedUserData[name] = value;

    setUserInfo(newUserDataList);
  };

  // 사용자 정보 저장 함수
  const handleUserInfoSave = (memId) => {
    const userDataToSave = myinform.find(userData => userData.memId === memId);

    axios.put(`/api/userData/${memId}`, userDataToSave)
      .then(response => {
        console.log(response.data);
        alert('저장되었습니다.');
      })
      .catch(error => {
        console.log(error);
        alert('저장 실패');
      });
  };
  
  return(
    <div className="admin_update_container">
      <div className="my-admin_update">
        <h4>회원정보</h4>
        <br />
        <div className="inform outline" />
        <br />  

        {myinform.length > 0 ? (
        myinform.map(userData => (
          <div key={userData.id}>
            <div>사용자 사진</div>
            <img src={userData.photoUrl} alt="사용자 사진" />
            <button>사진 변경</button>
            <div>아이디</div>
            <input type="text" name="memId" value={userData.memId} readOnly />
            <div>이메일</div>
            <input type="text" name="email" value={userData.email} onChange={(e) => handleUserInfoChange(e, userData.id)} />
            <div>전화번호</div>
            <input type="text" name="phone" value={userData.phone} onChange={(e) => handleUserInfoChange(e, userData.id)} />
            <div>닉네임</div>
            <input type="text" name="memberName" value={userData.memberName} onChange={(e) => handleUserInfoChange(e, userData.id)} />
            <div>비밀번호</div>
            <input type="password" name="password" value={userData.password} onChange={(e) => handleUserInfoChange(e, userData.id)} />
            <button onClick={() => handleUserInfoSave(userData.memId)}>저장</button>
          </div>
        ))  
      ) : (
        <div>
        <label>
          <span>아  이  디</span>
          <input type="text" name="id" value={userInfo.id} onChange={handleInputChange} />
        </label>
        <label>
          <span>이  메  일</span>
          <input type="email" name="email" value={userInfo.email} disabled/>
        </label>
        <label>
          <span>전화번호</span>
          <input type="text" name="phoneNumber" value={userInfo.phoneNumber} onChange={handleInputChange} />
        </label>
        <label>
          <span>닉  네  임</span>
          <input type="text" name="nickname" value={userInfo.nickname} onChange={handleInputChange} />
        </label>
        <label>
         <span>비밀번호</span>  <ModalBtn {...passCg} />
        </label>
        </div>
     )}        
        <div>
          <ModalBtn {...category} />
        </div>
      </div>
    </div>

    );
}

export default Inform;