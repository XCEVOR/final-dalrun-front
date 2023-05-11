
import { Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';
import { GiUpgrade } from "react-icons/gi";

function MyCrew() {

  const history = useNavigate();

  // 로그인 정보
  const [login, setLogin] = useState([]);

  // 크루 정보
  const [mycrewinfo, setMycrewinfo] = useState([]);

  // 나의 멤버 크루 리스트
  const [crewList, setCrewList] = useState([]);

  // 나의 총합 크루 포인트
  const [crewPoint, setCrewPoint] = useState(0);

  // 나의 크루 포인트 퍼센트
  const [pointPercent, setPointPercent] = useState(0);

  // 전송할 포인트 
  const [sendScore,setSendscore] =useState(0);

  const [imgFile, setImgFile] = useState(null);

  // 크루 탈퇴 경고알림창
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImgFile(selectedFile);
  };

  const handleImageUploadClick = () => {
    const inputElement = document.getElementById("imageInput");
    inputElement.click();
  };

  function loading() {
    const logindata = JSON.parse(localStorage.getItem('login'));
    if (logindata) {
      console.log(logindata.memId, "님이 접속하였습니다..")
      setLogin(logindata);
      let crewSeq = JSON.parse(localStorage.getItem('login')).crewSeq;
      getMyCrewinfo(crewSeq);
      mycrewMemberList(crewSeq);
      getcrewPoint(crewSeq);


    }
  }
  // 나의 크루 정보 가져오기
  function getMyCrewinfo(crewSeq) {
    axios.get("http://localhost:3000/getMyCrewinfo", { params: { 'crewSeq': crewSeq } })
      .then(function (resp) {
        setMycrewinfo(resp.data);

      }).catch(function (err) {

      })
  };

  // 나의 크루 정보 가져오기
  function mycrewMemberList(crewSeq) {
    axios.get("http://localhost:3000/mycrewMemberList", { params: { 'crewSeq': crewSeq } })
      .then(function (resp) {
        setCrewList(resp.data);
        
      }).catch(function (err) {

      })
  };
  function crewLeave() {
    let crewSeq = JSON.parse(localStorage.getItem('login')).crewSeq;
    axios.get("http://localhost:3000/crewLeave", { params: { 'memId': login.memId ,'crewSeq':crewSeq} })
      .then(function (resp) {
        localStorage.removeItem('login');
        alert("다시 로그인해주세요..");
         history('/mainPage');    // bbslist로 이동
      }).catch(function (err) {

      })
  }
  function getcrewPoint(crewSeq) {
    axios.get("http://localhost:3000/getcrewPoint", { params: { 'crewSeq': crewSeq } })
      .then(function (resp) {
        setCrewPoint(resp.data);

      }).catch(function (err) {

      })
  }
  function crewUpgrade() {
    let crewSeq = JSON.parse(localStorage.getItem('login')).crewSeq;
    let score=0;

    if (pointPercent >= 100) {
      axios.get("http://localhost:3000/crewUpgrade", { params: { 'crewSeq': crewSeq,'score': sendScore} })
        .then(function (resp) {
          alert("크루가 업그레이드 됐습니다.")
         
          loading();
        }).catch(function (err) {
            alert(err);
        })
    } else {
      alert("포인트를 더 누적해주세요.")
    }
  }
  function crewLeaveAlart() {
    if(modalIsOpen){
      crewLeave();
    }else{
    document.getElementById("crewAlterfont").textContent='정말 크루를 탈퇴하시겠습니까?'
    document.getElementById("crewAlterA").style.backgroundColor="red";
    deleteHandler();
 }
  }


  function deleteHandler() {
    setModalIsOpen(true);
    // modalIsOpen을 true로 변경.
  }

  function closeModalHandler() {
    setModalIsOpen(false);
    // modalIsOpen을 false로 변경.
  }


  useEffect(() => {

    //localStorage.removeItem('login');

    loading();

  },[]);

  useEffect(() => {
    // 출력 확인 useEffect 
    console.log(login)
    console.log(mycrewinfo)
    console.log(crewList)
    console.log(crewPoint)
  
    if (mycrewinfo.crewLevel === 1) {
      setPointPercent(parseInt(crewPoint / 3000 * 100));
      setSendscore(3000);
    }else if(mycrewinfo.crewLevel === 2){
      setPointPercent(parseInt(crewPoint / 10000 * 100));
      setSendscore(10000);
    }else if(mycrewinfo.crewLevel === 3){
      setPointPercent(parseInt(crewPoint / 30000 * 100));
      setSendscore(30000);
      
    }else if(mycrewinfo.crewLevel === 4){
      setPointPercent(parseInt(crewPoint / 100000 * 100));
      setSendscore(100000);

    }else if(mycrewinfo.crewLevel === 5){
      setPointPercent(parseInt(crewPoint / 100000 * 100));
      setSendscore(100000);

    }
    
  },[crewPoint,pointPercent,mycrewinfo,login])

  return (
    <div className="members container">
      <h4 className="title">내 크루</h4>
      <br />
      {login && mycrewinfo.length != 0 &&
        <div id="crewinform">
          <div className="container-xxl">
            <div className="row">
              <div className="col-6" >
                <div className="row-4" >
                  {/* 서버에서 이미지를 가져올 수 있게 폴더 명만 바꾸면 될 것 같습니다. */}
                  
                  {/* <img src={`http://localhost:3000/dalrun-jy/competition/${mycrewinfo.crewImg}`} style={{ margin: "20px" }} /> */}
                  <img src={`http://localhost:3000/dalrun-jy/competition/marathon_1.jpg`} style={{ margin: "10px" }} />

                  {/* 크루 조장일 때만 수정 가능하게 조건문 걸었습니다. 수정기능 완료 하시면 주석처리 풀어주시면 될 것 같습니다.*/}
                </div>
                <div className="row-4" style={{ marginLeft: "20px" }}>
                  <div style={{ backgroundColor: 'red', width: '60%', height: '10px', display: 'inline-block' ,marginLeft:'5px'}}>
                    <div style={{ backgroundColor: 'blue', height: '100%', width: `${pointPercent}%`,maxWidth:'100%' }}>
                    </div>
                  
                  </div>
                  <p style={{fontSize:'2px', display:'inline-block' }}> {pointPercent}/100%</p>
                 
                  <a
                    className="ptf-social-icon ptf-social-icon--style-3"
                    onClick={crewUpgrade}
                    target="_blank"
                    style={{ marginLeft: '3px' }}

                  >
                    <GiUpgrade />
                  </a>
                </div>
                {/* {login.memId == mycrewinfo.memId &&   */}
                <button onClick={handleImageUploadClick}>이미지 선택</button>
                {/* } */}



              </div>
              <div className="col-5">
                <form name="crew_frm" encType="multipart/form-data">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ margin: "20px", minWidth: "80px" }}>크루명</p>
                    {/* {login.memId === mycrewinfo.memId &&   */}

                    <input type="text" name="crewName" defaultValue={mycrewinfo.crewName} />
                    {/* ||
                 <p>{mycrewinfo.crewName}</p> 
                } */}

                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ margin: "20px", minWidth: "80px" }}>레벨</p>
                    <p>{mycrewinfo.crewLevel}</p>
                  </div>
                  
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ margin: "20px", minWidth: "80px" }}>리더</p>
                    <p>{mycrewinfo.memId}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ margin: "20px", minWidth: "80px" }}>인원</p>
                    <p>50/{mycrewinfo.crewMemberCnt}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ margin: "20px", minWidth: "80px" }}>인삿말</p>

                    {/* {login.memId === mycrewinfo.memId &&   */}
                    <input type="text" name="crewSetUp" defaultValue={mycrewinfo.crewSetUp} />

                    {/* ||

                 <p>{mycrewinfo.crewSetUp}</p> 
                } */}

                  </div>
                  <div style={{ float: 'right' }}>
                    {/* {login.memId === mycrewinfo.memId &&   */}

                    <button onClick={handleImageUploadClick}>수정</button>
                    {/* } */}


                  </div>
                </form>
              </div>
            </div>
            <div>
            </div>



          </div>

          <div className="info_con">
            <Table striped bordered hover>
              <thead>
                <tr>
                                   
                  <th>번호</th>
                  <th>이름</th>
                  <th>아이디</th>
                  <th>직책</th>
                  <th>등급</th>
                  <th>상태</th>
                  <th>포인트</th>
                  <th>가입일</th>
                </tr>
              </thead>
              <tbody>
                {
                  crewList.map((crew, i) => {
                    return (
                      <tr key={i}>
                     
                        <td>{i + 1}</td>
                        <td>{crew.memberName}</td>
                        <td>{crew.memId}</td>
                        <td>{crew.grade}</td>
                        <td>
                          {crew.memberName === mycrewinfo.memId && "리더" || "팀원"}

                        </td>
                        <td>{crew.state}</td>
                        <td>{crew.point}</td>
                        <td>{crew.regdate}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </Table>
            
            <div style={{ textAlign: 'center' }}>
              <a id="crewAlterA" className="ptf-btn ptf-btn--primary" onClick={crewLeaveAlart}
                style={{ width: '400px', padding: '10px', marginTop: '100px' }}><h5 id="crewAlterfont">크루 탈퇴</h5>
              </a>
            </div>
          </div>
        </div>
        ||
        <div>
          <h4 style={{ margin: '50px' }}>해당 정보는 크루 가입이 필요합니다.</h4>

          {/* 크루 가입페이지로 링크 변경해주세요 */}
          <span ><a href="/login" style={{ textDecoration: 'underline', color: '#0d6efd', fontSize: '15px', padding: '0.5rem' }}>크루 가입하러 가기</a></span>
        </div>

      }
    </div>
  )
}

export default MyCrew;