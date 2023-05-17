import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NaverMapView from "./NaverMapview";
import axios from 'axios';
import CCPagination from "../search/pagination";
import "../../../assets/dalrun-jy/css/design.css";

const ContentComp = () => {
  const params = useParams();
  const mapElement = useRef(null);
  const [compList, setCompList] = useState([]);

  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalCnt, setTotalCnt] = useState(0);

  const choiceChange = (e) => setChoice(e.target.value);
  const searchChange = (e) => setSearch(e.target.value);

  function getAllList(c, s, p) {
    axios.get("/getAllList", { params: { 'choice': c, "search": s, "pageNumber": p } })
      .then(function (resp) {
        setCompList(resp.data.list);
        setTotalCnt(resp.data.cnt);  // 글의 총수

      }).catch(function (err) {
        alert(err);
      })
  }
  const handlePagination = (page) => {
    console.log(page);
    setPage(page);
    getAllList(choice, search, page - 1);
  }
  let navigate = useNavigate();
  function searchBtn() {
    // choice, search 검사

    if (choice.toString().trim() !== "" && search.toString().trim() !== "") {
      // navigate('/competition-main2/' + choice + "/" + search);
    }
    else {
      navigate('/competition-main');
    }
    // 데이터를 다시 한번 갖고 온다
    getAllList(choice, search);
  }

  function handlePageChange(page) {
    setPage(page);
    getAllList(choice, search, page - 1);
  }


  useEffect(() => {

    getAllList(params.choice, params.search, params.page);

  }, []);

  function check(start, end) {
    let todayDate = new Date();
    let today = todayDate.getFullYear() + "-" +
      ((todayDate.getMonth() + 1) < 10 ? '0' + (todayDate.getMonth() + 1) : (todayDate.getMonth() + 1)) + "-" +
      ((todayDate.getDay() < 10) ? '0' + todayDate.getDay() : todayDate.getDay());
    if (start <= today && today <= end) { // 접수중 
      return 1;
    } else if (today < end) { // 접수 예정
      return 2;
    } else { // 접수 종료
      return 3;
    }
  }

  useEffect(() => {
    console.log(compList);
    check(1, 2);
  }, [compList])

  return (
    <>

      {compList.map((val, i) => (
        <div className="grid-item" key={i}>
          {/* <!--Blog Post--> */}
          <article className="ptf-post ptf-post--style-3">
            <div>
              {/* <NaverMapView mapLat={`${val.lat}`} mapLng={`${val.lng}`}></NaverMapView> */}
              <Link className="ptf-work__link" to={`/competition-detail/${val.compSeq}`}></Link>
              <img
                src={`${process.env.REACT_APP_API_URL}/dalrun-hc/competition/${val.compimage}`}
                alt={val.categories}
                loading="lazy"
                style={{ position: 'relative' }}
              />
              {check(val.receiptStart, val.receiptEnd) === 1 && <h3 style={{ position: 'absolute', zIndex: '1', top: '12px', left: '12px', background: 'white', opacity: '0.8', borderRadius: '16px', fontSize: '24px', color: 'blue', padding: '13px 18px', margin: '5px' }}>접수중</h3>}
              {check(val.receiptStart, val.receiptEnd) === 2 && <h3 style={{ position: 'absolute', zIndex: '1', top: '12px', left: '12px', background: 'white', opacity: '0.8', borderRadius: '16px', fontSize: '24px', color: 'gray', padding: '13px 18px', margin: '5px' }}>접수 예정</h3>}
              {check(val.receiptStart, val.receiptEnd) === 3 && <h3 style={{ position: 'absolute', zIndex: '1', top: '12px', left: '12px', background: 'white', opacity: '0.8', borderRadius: '16px', fontSize: '24px', color: 'red', padding: '13px 18px', margin: '5px' }}>접수 종료</h3>}

            </div>
            {/* <div className="ptf-post__content comp_con"> */}
            <div className="comp_con">
              <header className="ptf-post__header">
                <div className="ptf-post__meta">
                  <span className="comp_local">{val.compLocal}</span>
                  <span className="comp_date">{val.receiptStart} ~ {val.receiptEnd}</span>
                </div>
                <h3 className="con_title">
                  <Link>{val.compTitle}</Link>
                </h3>
              </header>
              <footer className="ptf-post__footer">
                <div className="ptf-post__info">
                  <Link className="comments" to={`/competition-detail/${val.compSeq}`}>
                  
                    <i className="lnil lnil-comments"></i> {val.commentcount} Comments
                  </Link>
                  <a className="author" href="#">
                    <i className="lnil lnil-user"></i>by
                    <span> {val.compSponsor}</span>
                  </a>
                </div>
              </footer>
            </div>
          </article>
        </div>
      ))}


      <div
        className="ptf-spacer"
        style={{
          "--ptf-xxl": "9.375rem",
          "--ptf-md": "4.6875rem",
        }}
      ></div>
      <table>
        <tbody>
          <tr>
            <td style={{ paddingLeft: "3px" }}>
              <select className="custom-select" value={choice} onChange={choiceChange}>
                <option value=''>검색</option>
                <option value="title">제목</option>
                <option value="content">내용</option>
                <option value="compLocal">지역</option>
              </select>
            </td>
            <td style={{ paddingLeft: "5px" }} className="align-middle">
              <input type="text" className="form-control" placeholder="검색어"
                value={search} onChange={searchChange} />
            </td>
            <td style={{ paddingLeft: "5px" }}>
              <span>
                <button type="button" className="btn btn-dalrun" onClick={() => searchBtn()}>검색</button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <CCPagination page={page} totalCnt={totalCnt} handlePagination={handlePagination} />
    </>
  );
};

export default ContentComp;
