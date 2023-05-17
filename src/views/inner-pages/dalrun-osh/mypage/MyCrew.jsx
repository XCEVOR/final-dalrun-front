
import { Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { GiUpgrade } from "react-icons/gi";

function MyCrew(props) {

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

  const [crewName, setcrewName] = useState("");
  const [crewSetUp, setcrewSetUp] = useState("");
  const [crewImg, setcrewImg] = useState("");
  const [crewSeq, setcrewSeq] = useState("");

  const setInput = (mycrewinfo) => {
    setcrewName(mycrewinfo.crewName);
    setcrewSetUp(mycrewinfo.crewSetUp);
    setcrewImg(mycrewinfo.crewImg);
    setcrewSeq(mycrewinfo.crewSeq);
  }

  useEffect(() => {
    setInput(mycrewinfo);
}, [mycrewinfo]);

  const UpdateCrewinform = () => {

      alert("수정?");
      crewUpdate();
//  }
  };

  function loading() {
    const logindata = JSON.parse(localStorage.getItem('login'));
    if (logindata) {
      console.log(logindata.memId, "님이 접속하였습니다..")
      setLogin(logindata);
      let crewSeq = JSON.parse(localStorage.getItem('login')).crewSeq;
      getMyCrewinfo(crewSeq);
      mycrewMemberList(crewSeq);

    }
  }

  function crewUpdate() {
    let crewSeq = JSON.parse(localStorage.getItem('login')).crewSeq;
    axios.post("/my_crewUpdate", 
    { params: { 
      'crewSeq':crewSeq, 
      'crewImg':mycrewinfo.crewImg, 
      'crewSetUp':mycrewinfo.crewSetUp,
      'crewName':mycrewinfo.crewName
    } })
      .then(function (resp) {
      }).catch(function (err) {

      })
  }

  const onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("crewName", crewName);
    formData.append("crewSetUp", crewSetUp);
    formData.append("crewImg", crewImg);
    formData.append("crewSeq", crewSeq);

    axios.post('/my_crewUpdate', formData)
        .then((resp) => {
            // console.log(resp.mycrewinfo);
            if(resp.mycrewinfo === "YES") {
                alert("수정실패");
            } else {
                alert("수정완료");
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

  // // 나의 크루 정보 가져오기
  function getMyCrewinfo(crewSeq) { 
    axios.get("/getMyCrewinfo",{params:{'crewSeq':crewSeq }})
      .then(function (resp) {
        setMycrewinfo(resp.data);
        console.log(resp.data);
        setCrewPoint(resp.data.crewTotalScore)
        // props.Changemycrewinfo(resp.data);
      }).catch(function (err) {
        
      })
  };

  // 나의 크루 정보 가져오기
  function mycrewMemberList(crewSeq) {
    axios.get("/mycrewMemberList", { params: { 'crewSeq': crewSeq } })
      .then(function (resp) {
        setCrewList(resp.data);
        
      }).catch(function (err) {

      })
  };

  function crewLeave() {
    let crewSeq = JSON.parse(localStorage.getItem('login')).crewSeq;
    axios.get("/crewLeave", { params: { 'memId': login.memId ,'crewSeq':crewSeq} })
      .then(function (resp) {
        localStorage.removeItem('login');
        alert("다시 로그인해주세요..");
         history('/mainPage');    // bbslist로 이동
      }).catch(function (err) {

      })
  }

  function crewmemberLeave() {
    let crewSeq = JSON.parse(localStorage.getItem('login')).crewSeq;
    axios.get("/crewmemberLeave", { params: { 'memId': login.memId} })
      .then(function (resp) {
        localStorage.removeItem('login');
      }).catch(function (err) {

      })
  }

  function crewUpgrade() {
    let crewSeq = JSON.parse(localStorage.getItem('login')).crewSeq;

    if (pointPercent >= 100) {
      axios.get("/crewUpgrade", { params: { 'crewSeq': crewSeq,'score': sendScore} })
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
      crewmemberLeave();
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
      setPointPercent(parseInt(crewPoint / 500000 * 100));
      setSendscore(100000);

    }
    
  },[crewPoint,pointPercent,mycrewinfo,login])

  return (
    <div className="members container">
            <br /><br /><br /><br /><br /><br />
      <h4 className="title">내 크루</h4>
      <br />
      <div className="inform outline" />
      <br /><br /><br />
      {login && mycrewinfo.length != 0 &&
        <div id="crewinform">
          <div className="container-xxl">
            <div className="row">
              <div className="col-6" >
                <div className="row-4" >

                  <img      
                  src={'/dalrun-yr/crewImg/'+mycrewinfo.crewImg.split('/')[0]}
                style={{borderRadius:'30%'}}
                  >
                  </img>

                </div>
                <div className="row-4" style={{ marginLeft: "20px" }}>
                  <div style={{ backgroundColor: 'red', width: '60%', height: '10px', display: 'inline-block' ,marginLeft:'5px'}}>
                    <div style={{ backgroundColor: 'blue', height: '100%', width: `${pointPercent}%`,maxWidth:'100%' }}>
                    </div>
                  
                  </div>
                  <p style={{fontSize:'2px', display:'inline-block' }}>   {pointPercent}/100%  </p>
                 
                  <a
                    className="ptf-social-icon ptf-social-icon--style-3"
                    onClick={crewUpgrade}
                    target="_blank"
                    style={{ marginLeft: '3px' }}

                  >
                    <GiUpgrade />
                  </a>
                </div>
                {/* {login.memId == mycrewinfo.memId &&  
                <button onClick={handleImageChange}>이미지 선택</button>
                }  */}

                <br />

              </div>
              <div className="col-5">
                <form name="crew_frm" onSubmit={onSubmit} encType="multipart/form-data">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ margin: "20px", minWidth: "80px", fontWeight: "bold" }}>크루명</p>
                     {login.memId === mycrewinfo.memId &&   

                    <input type="text" name="crewName" Value={mycrewinfo.crewName}
                    onChange={(e) => setcrewName(e.target.value)} />
                     ||
                 <p>{mycrewinfo.crewName}</p> 
                } 

                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ margin: "20px", minWidth: "80px", fontWeight: "bold" }}>레벨</p>
                    <p style={{ margin: "20px", minWidth: "80px" }}>{mycrewinfo.crewLevel}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ margin: "20px", minWidth: "80px", fontWeight: "bold" }}>포인트</p>
                    <p style={{ margin: "20px", minWidth: "80px" }}>{mycrewinfo.crewTotalScore}</p>
                    <p style={{ margin: "20px", minWidth: "80px", fontWeight: "bold" }}>보유 Ground</p>
                    <p style={{ margin: "20px", minWidth: "80px" }}>{mycrewinfo.groundCount}</p>                    
                  </div>                  
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ margin: "20px", minWidth: "80px", fontWeight: "bold" }}>리더</p>
                    <p style={{ margin: "20px", minWidth: "80px" }}>{mycrewinfo.memId}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ margin: "20px", minWidth: "80px", fontWeight: "bold" }}>인원</p>
                    <p style={{ margin: "20px", minWidth: "80px" }}>50/{mycrewinfo.crewMemberCnt}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ margin: "20px", minWidth: "80px", fontWeight: "bold" }}>인삿말</p>

                     {login.memId === mycrewinfo.memId &&   
                    <input type="text" name="crewSetUp" Value={mycrewinfo.crewSetUp} 
                    onChange={(e) => setcrewSetUp(e.target.value)} />

                     ||

                 <p>{mycrewinfo.crewSetUp}</p> 
                } 

                  </div>
                  <div style={{ float: 'right' }}>
                    {login.memId === mycrewinfo.memId &&  

                    <input type="submit" value="수정" />                    
                   } 


                  </div>
                </form>
              </div>
            </div>
            <div>
            </div>



          </div>
          <br /><br />
          <div className="info_con">
            <Table responsive hover>
              <thead>
                <tr>              
                  <th>번호</th>
                  <th>이름</th>
                  <th>아이디</th>
                  <th>직책</th>
                  <th>등급</th>
                  <th>포인트</th>
                  <th>가입일</th>
                </tr>
              </thead>
              <tbody>
                {
                  crewList.map((crew, i) => {
                    const regdate = new Date(crew.regdate);
                    const formattedDate = regdate.toLocaleDateString('ko-KR');

                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{crew.memberName}</td>
                        <td>{crew.memId}</td>
                        <td>
                            {crew.memId === mycrewinfo.memId ? "리더" : "팀원"} 
                        </td>
                        <td>{crew.grade}</td>
                        <td>{crew.point}</td>
                        <td>{formattedDate}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </Table>
            {/* <MypageSerach setData={setCrewList}/>            */}
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
          <span ><a href="/crewBbsMain" style={{ textDecoration: 'underline', color: '#0d6efd', fontSize: '15px', padding: '0.5rem' }}>크루 가입하러 가기</a></span>
        </div>

      }
      <br /><br />
    </div>
  )
}

export default MyCrew;