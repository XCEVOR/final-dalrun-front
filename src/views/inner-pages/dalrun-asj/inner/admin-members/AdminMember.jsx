import React, { useState } from "react";
import AdminSearch from "../../../../../components/dalrun-asj/AdminSerach";
import { Link } from "react-router-dom";

function AdminMember() {
  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");
  const [grade, setGrade] = useState("");

  const handleRadio = (e) => setGrade(e.target.value);

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
          <button>
            <Link to={`members?choice=${choice}&search=${search}&grade=${grade}`}>검색</Link>
          </button>
        </div>
        <div className="info outline">개인회원</div>
        <AdminSearch />
      </div>
    </div>
  );
}

export default AdminMember;
