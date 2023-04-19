import { useState } from "react";
import { Link } from "react-router-dom";

function BasicSearch(props) {
  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="search outline">
      <div className="search-content only">
        <span className="search-title">검색어</span>
        <select value={choice} onChange={(e)=>setChoice(e.target.value)}>
          <option value="">선택</option>
          {
            Object.values(props).map((prop, i) => {
              return <option key={i} value={prop.value}>{prop.name}</option>
            })
          }
          {/* <option value="crewName">크루명</option>
          <option value="memId">리더</option> */}
        </select>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <button>
        <Link to={`?choice=${choice}&search=${search}`}>검색</Link>
      </button>
    </div>
  );
}

export default BasicSearch;