import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactTooltip from "react-tooltip";
import { Link, useLocation, useSearchParams, useNavigate } from "react-router-dom";
import '../css/CrewMemberBody.css';
import axios from "axios";

function CrewMemberWaitContent() {
  const history = useNavigate();

  const [dataList, setDataList] = useState([]);
  const [state, setState] = useState(false);
  const location = useLocation();
  const crewSeq = location.state.crewSeq;

  function gotoCrewMember(){
    history('/crewMember', { state:{'crewSeq':crewSeq} });
  }

  const getCrewMemberWait = (seq) => {
    axios.get("http://localhost:3000/getCrewMemberWait", { params: {"crewSeq":seq} })
      .then((resp) => setDataList(resp.data))
      .catch((err) => alert(err));
  }

  const handleCrewMember = (seq, id, decide) => { // 승인
    console.log(seq, id);
    const params = {
      "crewSeq":seq, 
      "memId":id
    }

    axios.post(`http://localhost:3000/${decide}`, params)
      .then((resp) => {
        if(resp.data === "success") {
          alert(`${decide === "approve" ? "승인":"거절"} 성공`);
          setState(true);
        }
        else alert(`${decide === "approve" ? "승인":"거절"} 실패`);
      })
      .catch((err) => alert(err));
  }

  useEffect(() => {
    getCrewMemberWait(crewSeq);
  }, [state]);

  return (
    
    <div className="crew_waiting">
      <button onClick={gotoCrewMember} className="btn btn-dalrun">크루멤버 소개</button>
      <button className="btn btn-dalrun" style={{ marginLeft: '10px' }}>크루멤버 대기</button>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>아이디</th>
            {/* <th>가입신청일</th>
            <th>가입업데이트일</th> */}
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {dataList.length !== 0 ?
            dataList.map((waitcrew, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{waitcrew.memId}</td>
                {/* <td>{waitcrew.crewRegDate}</td>
                <td>{waitcrew.crewMemUpdate}</td> */}
                <td>
                  {/* {waitcrew.crewConfirm === '0' && ( */}
                    <>
                      <button onClick={() => handleCrewMember(crewSeq, waitcrew.memId, "approve")}>승인</button>
                      <button onClick={() => handleCrewMember(crewSeq, waitcrew.memId, "reject")}>거절</button>
                    </>
                  {/* )}
                  {waitcrew.crewConfirm === '1' && (
                    <button>승인</button>
                  )}
                  {waitcrew.crewConfirm === '-1' && (
                    <button>거절</button>
                )} */}
              </td>
            </tr> 
          )):''}
        </tbody>
      </table>
    </div>
  );
}

export default CrewMemberWaitContent;
