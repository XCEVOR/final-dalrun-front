import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function BasicSearch(props) {
  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");
  const [inqState, setInqSate] = useState("");

  const { sub } = useParams();
  
  const InqStateSelector = () => {
    return(
      <select value={inqState} onChange={(e)=>setInqSate(e.target.value)} style={{ marginRight:"10px" }}>
        <option value="">답변상태</option>
        <option value="0">답변대기</option>
        <option value="1">답변완료</option>
      </select>
    );
  }

  return (
    <div className="search">
      <div className="search-content only">
        <span className="search-title">검색어</span>
        {sub==="productinquiry" ? <InqStateSelector />:''}
        <select value={choice} onChange={(e)=>setChoice(e.target.value)}>
          <option value="">선택</option>
          {
            Object.values(props).map((prop, i) => {
              return <option key={i} value={prop.value}>{prop.name}</option>
            })
          }
        </select>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <button>
        <Link to={`?choice=${choice}&search=${search}${sub==="productinquiry" ? `&inqState=${inqState}` : ""}`}>검색</Link>
      </button>
    </div>
  );
}

export default BasicSearch;