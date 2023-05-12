import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function BasicSearch(props) {
  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");
  const [inqState, setInqSate] = useState("");
  const [local, setLocal] = useState("");
  const [link, setLink] = useState("");
  let linkStr = `?choice=${choice}&search=${search}`;
  const { cate, sub } = useParams();

  const getOtherParam = (link) => {
    if(sub === "productinquiry") {
      link += `&inqState=${inqState}`
      setLink(link);
      console.log(link);
    } else if(cate === "competition") {
      link += `&local=${local}`
      setLink(link);
      console.log(link);
    }
  }

  const inqOptions = [
    {"val" : "", "name": "답변상태"},
    {"val" : "0", "name": "답변대기"},
    {"val" : "1", "name": "답변완료"}
  ];

  const localOptions = [
    {"val":"", "name":"지역선택"},
    {"val":"서울", "name":"서울"},
    {"val":"인천/경기", "name":"인천/경기"},
    {"val":"강원", "name":"강원"},
    {"val":"대전/충남", "name":"대전/충남"},
    {"val":"충북", "name":"충북"},
    {"val":"광주/전남", "name":"광주/전남"},
    {"val":"전북", "name":"전북"},
    {"val":"부산/경남", "name":"부산/경남"},
    {"val":"대구/경북", "name":"대구/경북"}
  ];

  const Selector = ({options, val, setVal}) => {
    return(
      <>
        <select value={val} onChange={(e)=>setVal(e.target.value)} style={{ marginRight:"10px" }}>
          {options.map((option, i) => {
            return(
              <option key={i} value={option.val}>{option.name}</option>
              )
          })}
        </select>
      </>
    );
  }

  useEffect(()=>{
    console.log(local);
  }, [link, linkStr]);

  return (
    <div className="search">
      <div className="search-content only">
        <span className="search-title">검색어</span>
        {sub==="productinquiry" ? <Selector options={inqOptions} val={inqState} setVal={setInqSate} />:''}
        {cate==="competition" ? <Selector options={localOptions} val={local} setVal={setLocal} />:''}
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
      <button onClick={() => getOtherParam(linkStr)}>
        <Link to={`${link}`}>검색</Link>
      </button>
    </div>
  );
}

export default BasicSearch;