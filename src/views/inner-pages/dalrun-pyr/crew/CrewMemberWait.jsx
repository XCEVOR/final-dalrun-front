import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactTooltip from "react-tooltip";
import { Link, useSearchParams } from "react-router-dom";
import '../css/CrewMemberBody.css';
import { useState } from "react";

function CrewMemberWait() {
  const [dataList, setDataList] = useState([]);

  return (
    
    <div>
      <button>크루멤버 소개</button>
      <button>크루멤버 대기</button>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>아이디</th>
            <th>가입신청일</th>
            <th>가입업데이트일</th>
            <th>상태</th>
          </tr>
        </thead>
        {/* <tbody>
          {dataList.map((waitcrew, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{waitcrew.memId}</td>
              <td>{waitcrew.crewRegDate}</td>
              <td>{waitcrew.crewMemUpdate}</td>
              <td>{waitcrew.crewConfirm}</td>
              <td>
                {waitcrew.crewConfirm === '0' && (
                  <>
                    <button>승인</button>
                    <button>거절</button>
                  </>
                )}
                {waitcrew.crewConfirm === '1' && (
                  <button>승인</button>
                )}
                {waitcrew.crewConfirm === '-1' && (
                  <button>거절</button>
                )}
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
}

export default CrewMemberWait;
