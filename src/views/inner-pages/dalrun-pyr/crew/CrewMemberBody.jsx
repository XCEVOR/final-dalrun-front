import React, { useEffect, useState } from "react";
import {Link, useLocation, useNavigate, useParams } from "react-router-dom";
import '../css/CrewMemberBody.css';
import axios from 'axios';
import CrewMemberWait from "./CrewMemberWait";
import { Table } from "react-bootstrap";
import '../css/CrewBbsBlogDetils.css';

const portfolioMenu = [
  "크루멤버 소개",
  "크루멤버 대기",
];

function CrewMemberBody() {

    const params = useParams();
    // 로그인 정보
    const [login, setLogin] = useState([]);
    // 크루 정보
    const [mycrewinfo, setMycrewinfo] = useState([]);
  
    // 나의 멤버 크루 리스트
    const [crewList, setCrewList] = useState([]);
  
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
  function loading() {
    const logindata = JSON.parse(localStorage.getItem('login'));
    if (logindata) {
      console.log(logindata.memId, "님이 접속하였습니다..")
      setLogin(logindata);
      let crewSeq = JSON.parse(localStorage.getItem('login')).crewSeq;
      getMyCrewinfo(crewSeq);
      mycrewMemberList(crewSeq);
      // getcrewPoint(crewSeq);
    }
  }
  
  useEffect(() => {
  
    //localStorage.removeItem('login');
  
    loading();
  
  },[]);
  
  
  
  const history = useNavigate();
  const [dataList, setDataList] = useState([]);
  const location = useLocation();
  const crewSeq = location.state.crewSeq;
  const [leader, setLeader] = useState("");

  login = JSON.parse(localStorage.getItem('login'));



  useEffect(() => {
    mycrewMemberList(crewSeq);
    // getLeader(crewSeq);
  }, []);
  
  return (
    
    <div>
      <Table striped bordered hover > 
              <thead >
                <tr style={{textAlign:'center'}}>          
                  <th>번호</th>
                  <th>프로필</th>
                  <th>이름</th>
                  <th>아이디</th>
                  <th>직책</th>
                  <th>등급</th>
                  <th>포인트</th>
                  <th>가입일</th>
                </tr>
              </thead>
              <tbody className="crewtbody">
                {
                  crewList.map((crew, i) => {
                    return (
                      <tr key={i}>

                        <td>{i + 1}</td>
                        <td style={{
                          backgroundImage:`url(http://localhost:3000/dalrun-yr/profiles/`+crew.profile,
                          backgroundSize:'cover',backgroundPosition:'center',height:'80px'

                          }}>
                          
                          
                        </td>
                        <td> {crew.memberName}</td>
                        <td>{crew.memId}</td>
                        <td>
                            {crew.memId === mycrewinfo.memId ? "리더" : "팀원"} 
                        </td>
                        <td>{crew.grade}</td>
                        <td>{crew.point}</td>
                        <td>{crew.regdate.split("T")[0]}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </Table>

    </div>
  );
}

export default CrewMemberBody;
