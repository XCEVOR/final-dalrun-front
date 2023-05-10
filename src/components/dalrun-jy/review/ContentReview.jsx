import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NaverMapView from "./NaverMapview";
import axios from 'axios';
import CCPagination from "../search/pagination";


const ContentReview = () => {

  const params = useParams();
  const mapElement = useRef(null);
  const [compList, setCompList] = useState([]);

  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalCnt, setTotalCnt] = useState(0);

  const choiceChange = (e) => setChoice(e.target.value);
  const searchChange = (e) => setSearch(e.target.value);

  function getAllShoeList(c, s, p) {
    axios.get("http://localhost:3000/getAllShoeList", { params: { 'choice': c, "search": s, "pageNumber": p } })
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
    getAllShoeList(choice, search, page - 1);
  }
  let navigate = useNavigate();
  function searchBtn() {
    // choice, search 검사

    if (choice.toString().trim() !== "" && search.toString().trim() !== "") {
      // navigate('/review-main2/' + choice + "/" + search);
    }
    else {
      navigate('/review-main');
    }
    // 데이터를 다시 한번 갖고 온다
    getAllShoeList(choice, search);
  }

  function handlePageChange(page) {
    setPage(page);
    getAllShoeList(choice, search, page - 1);
  }


  useEffect(() => {

    getAllShoeList(params.choice, params.search, params.page);

  }, []);

  
  useEffect(() => {
    console.log(compList);
   
  }, [compList])

  return (
    <>

      {compList.map((val, i) => (
        <div className="grid-item" key={i}>
          {/* <!--Blog Post--> */}
          <article className="ptf-post ptf-post--style-3">
            <div>
              {/* <NaverMapView mapLat={`${val.lat}`} mapLng={`${val.lng}`}></NaverMapView> */}
              <Link className="ptf-work__link" to={`/review-detail/${val.srSeq}`}></Link>
              <img
                   src={`http://localhost:3000/dalrun-jy/shoereview/shoe_${val.srSeq}.jpg`}
                alt={val.categories}
                loading="lazy"
                style={{ position: 'relative' }}
              />

            </div>
            <div className="ptf-post__content">
              <header className="ptf-post__header">
                <div className="ptf-post__meta">
                  <span className="cat">{val.srBrand}</span>
                  <span className="date">{val.srwdate}</span>
                </div>
                <h3 className="ptf-post__title">
                  <Link>{val.srTitle}</Link>
                </h3>
              </header>
              <footer className="ptf-post__footer">
                <div className="ptf-post__info">
                  <Link className="comments" to={`/review-detail/${val.srSeq}`}>
                  
                    <i className="lnil lnil-comments"></i> {val.commentcount} Comments
                  </Link>
                  
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
              </select>
            </td>
            <td style={{ paddingLeft: "5px" }} className="align-middle">
              <input type="text" className="form-control" placeholder="검색어"
                value={search} onChange={searchChange} />
            </td>
            <td style={{ paddingLeft: "5px" }}>
              <span>
                <button type="button" className="btn btn-primary" onClick={() => searchBtn()}>검색</button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <CCPagination page={page} totalCnt={totalCnt} handlePagination={handlePagination} />
    </>
  );
};

export default ContentReview;
