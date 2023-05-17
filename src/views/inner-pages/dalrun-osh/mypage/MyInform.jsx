import React, { useRef, useEffect, useState  } from "react";
import axios from 'axios';
import "../../../../assets/dalrun-sh/scss/inform.scss"
import { useNavigate } from "react-router-dom";
import useCheckControl from "../../../../components/dalrun-sh/useCheckControl";
import Passmodal from "../../../../components/dalrun-sh/Passmodal";

function Inform() {
  const [dataList, setDataList] = useState([]);
  const { handleAllCheck, handleSingleCheck, checkedList } = useCheckControl({dataList});  
  const history = useNavigate();

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [profile, setprofile] = useState("");
  const [footSize, setFootSize] = useState("");
  const [imgFile, setImgFile] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  const imgRef = useRef(null); // 파일 선택 창에서 선택된 파일을 가리키는 역할

  useEffect(()=>{
    const str = localStorage.getItem('login')
    if(str !== null){
        const login = JSON.parse(str);
        setId(login.memId);
        setPwd(login.password);
        setName(login.memberName);
        setEmail(login.email);
        setPhone(login.phone);
        setBirth(login.birth);
        setprofile(login.profile);
        setFootSize(login.foot);
    }else {
        alert('login을 해주세요.');
        history('/login');
    }
}, [history, setId]);

const onSubmit = (e) => {
  e.preventDefault();

  let formData = new FormData();
  formData.append("memId", id);
  formData.append("password", pwd);
  formData.append("memberName", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("birth", birth);
  formData.append("profile", profile);
  formData.append("foot", footSize);

    // 이미지 파일이 선택되었을 경우에만 업데이트
    if (imgRef.current.files.length > 0) {
        const file = imgRef.current.files[0];

        // FormData에 이미지 파일 추가
        formData.append("profileImage", file);
        }  

  axios.post('http://localhost:3000/my_updatemember', formData)
      .then((resp) => {
          console.log(resp.data);
          if(resp.data === "YES") {
               alert("수정완료");
              // onHide();
              // setSearchParam(searchParam.set('target',''));
              // localStorage.removeItem('login');
              // alert("다시 로그인해주세요..");      
              
          } else {
              alert("수정실패");
          }
      })
      .catch((err) => {
          console.log(err);
      });
}

    // 이미지 파일 선택 함수
    const handlePhotoChange = (event) => {
        const file = event.target.files[0];

        if (file) {
          const reader = new FileReader();
      
          reader.onload = () => {
            setImgFile(reader.result);
            setprofile(file.name);
          };
      

          reader.readAsDataURL(file);
        }

    };

  return(
    
    <div className="members container">
        <br /><br /><br /><br /><br /><br />
        <h4 className="title">회원정보</h4>
        <br />
        <div className="inform outline" />
        <br />  

        <div className="admin_update_container">
            <div className="admin_update"></div>
        <form name="frm" onSubmit={onSubmit} encType="multipart/form">

            <div className="profile_img">
                <label htmlFor="profileImg">
                프로필 이미지
                </label>

                {/* 업로드 된 이미지 미리보기 */}
                <img
                src={imgFile ? imgFile : "/images/icon/user.png"}
                alt="프로필 이미지"
                style={{ width: "50%" }}
                />
                <br /><br />
                <input
                ref={imgRef} // imgRef를 input 요소에 연결
                type="file"
                accept="image/*"
                onChange={handlePhotoChange} // onChange 이벤트 핸들러 수정
                />
            </div>

          <div>
              <label htmlFor="id">아이디</label>
              <input type="text" value={id || ""} readOnly={true} />
          </div>
          <div>
              <label htmlFor="pwd">비밀번호</label>            
              <Passmodal />
          </div>
          <div>
              <label htmlFor="name">이름</label>
              <input type="text" value={name || ""} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
              <label htmlFor="email">이메일</label>
              <input type="email" value={email || ""} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
              <label htmlFor="phone">연락처</label>
              <input type="tel" value={phone || ""} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
              <label htmlFor="birthdate">생년월일</label>
              <input type="date" value={birth || ""} onChange={(e) => setBirth(e.target.value)} />
          </div>
          <div>
              <label htmlFor="foot-size">발볼 넓이:</label>
              <select id="foot-size" value={footSize} onChange={(e) => setFootSize(e.target.value)}>
                  <option value="">선택하세요</option>
                  <option value="narrow">발볼이 좁은편</option>
                  <option value="normal">보통</option>
                  <option value="wide">넓은편</option>
                  <option value="extra-wide">아주 넓은편</option>
              </select>
          </div>  

          <input type="submit" value="수정" />                  
        </form>
      </div>
    </div>
    );
}

export default Inform;