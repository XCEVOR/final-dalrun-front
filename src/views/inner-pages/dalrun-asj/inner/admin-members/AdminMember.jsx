import React, { useState } from "react";
import AdminSearch from "../../../../../components/dalrun-asj/AdminSerach";
import { Link } from "react-router-dom";
import ModalBtn from "../../../../../components/dalrun-asj/ModalBtn";
import MemberUpdate from "../../../../../components/dalrun-asj/update/MemberUpdate";
import { Table } from "react-bootstrap";
import useCheckControl from "../../../../../components/dalrun-asj/useCheckControl";

function AdminMember() {
  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");
  const [grade, setGrade] = useState("");
  const [dataList, setDataList] = useState([]);
  const handleRadio = (e) => setGrade(e.target.value);
  const { handleAllCheck, handleSingleCheck, checkedList } = useCheckControl({dataList});

  const category = [
    {cate:"update", name:"회원수정", selected:<MemberUpdate />}, 
    {cate:"delete", name:"회원탈퇴", selected:"이 회원을 탈퇴시키시겠습니까?"}
  ];

  const reset = () => {
    setGrade("");
    setChoice("");
    setSearch("");
  }

  return (
    <div className="member">
      <div className="member-content">
        <div className="search outline">
          <div>
            <div className="search-content">
              <span className="search-title">회원 등급</span>
              <div>
                <label><input type="radio" value="걸음마" onChange={handleRadio} checked={grade === "걸음마"}/>걸음마</label>
                <label><input type="radio" value="런니니" onChange={handleRadio} checked={grade === "런니니"}/>런니니</label>
                <label><input type="radio" value="러너" onChange={handleRadio} checked={grade === "러너"}/>러너</label>
                <label><input type="radio" value="마라토너" onChange={handleRadio} checked={grade === "마라토너"}/>마라토너</label>
              </div>
            </div>
            <div className="search-content">
              <span className="search-title">검색어</span>
              <select value={choice} onChange={(e)=>setChoice(e.target.value)}>
                <option value="">선택</option>
                <option value="memId">아이디</option>
                <option value="name">이름</option>
                <option value="phone">연락처</option>
              </select>
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
          <div className="search-btn">
            <button className="reset-btn" onClick={reset}>초기화</button>
            <button>
              <Link to={`?choice=${choice}&search=${search}&grade=${grade}`}>검색</Link>
            </button>
          </div>
        </div>
        <div className="info">
          <ModalBtn {...category} />
          <div className="info_con">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    <input 
                      type="checkbox" 
                      onChange={(e) => handleAllCheck(e.target.checked)} 
                      checked={checkedList.length === dataList.length ? true : false}
                      />
                  </th>
                  <th>번호</th>
                  <th>이름</th>
                  <th>아이디</th>
                  <th>비밀번호</th>
                  <th>생년월일</th>
                  <th>연락처</th>
                  <th>포인트</th>
                  <th>등급</th>
                  <th>발사이즈</th>
                  <th>가입일</th>
                </tr>
              </thead>
              <tbody>
                {
                   dataList.length !== 0 ?
                  dataList.map((mem, i) => {
                    return (
                    <tr key={i}>
                      <th>
                        <input 
                          type="checkbox" 
                          onChange={(e) => handleSingleCheck(e.target.checked, mem.memId)} 
                          checked={checkedList.includes(mem.memId) ? true : false}
                          />
                      </th>
                      <td>{i+1}</td>
                      <td>{mem.memberName}</td>
                      <td>{mem.memId}</td>
                      <td>{mem.password}</td>
                      <td>{mem.birth}</td>
                      <td>{mem.phone}</td>
                      <td>{mem.point}</td>
                      <td>{mem.grade}</td>
                      <td>{mem.foot}</td>
                      <td>{mem.regdate}</td>
                    </tr>
                    );
                  })
                  : <tr style={{textAlign:"center"}}><td colSpan="11">데이터가 없습니다</td></tr>
                }
              </tbody>
            </Table>
            <AdminSearch setData={setDataList}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMember;
