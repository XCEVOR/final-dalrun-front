import React, { Component, useState  } from "react";
import PassChange from "./passchange/PassChange";
import ModalBtn from "../../../../components/dalrun-sh/ModalBtn";
import "../../../../assets/dalrun-sh/scss/inform.scss"

function Inform() {

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

  return(
    <div className="myinform">
      <div className="my-page">
        <h4>회원정보</h4>
        <br />
        <div className="inform outline" />
        <br />        
        <div ></div>
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
        <div>
          <ModalBtn {...category} />
        </div>
      </div>
    </div>
    // <div className="container">
    //   <h4 >회원정보</h4>

    //   <br />
    //   <div />
    //   <br />
    //   <div>
    //     <div style={{flex : 1}}>
    //       <p>아이디</p> <input type="text" value=" id " />
    //     </div>
    //     <div>
    //       <p>이메일</p> <input type="text" value=" mulcam@naver.com " />
    //     </div>
    //     <div>
    //       <p>전화번호</p> <input type="text" value=" 01023139112 " />
    //     </div>
    //     <div>
    //      <p>닉네임</p> <input type="text" value=" 화이팅 " />
    //     </div> 
        // <div>
        //  <p>비밀번호</p>  <ModalBtn {...passCg} />
        // </div>

        // <div>
        //   <ModalBtn {...category} />
        // </div>
    //   </div>

    // </div>

    );
}

export default Inform;