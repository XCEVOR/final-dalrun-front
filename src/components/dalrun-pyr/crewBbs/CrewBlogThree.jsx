import React from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import CrewBbsPagination from "./CrewBbsPagination";
import axios from 'axios';

const CrewBlogThree = () => {
  const crewBbsParams = useParams();
  const [crewBbsList, setCrewBbsList] = useState([]);
  const [crewSeq, setCrewSeq] = useState(crewBbsList.crewSeq);
  const [type, setType] = useState('all');
  //search & paging
  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalCnt, setTotalCnt] = useState(0);

  const choiceChange = (e) => setChoice(e.target.value);
  const searchChange = (e) => setSearch(e.target.value);

  //게시판 리스트(검색, 페이징)
  function getCrewBbsList(c,s,p) {
    axios.get('http://localhost:3000/crewBbsMain', {params:{ "choice":c, "search":s, "pageNumber":p  } })
      .then(function(res){
        console.log("allGetCrewBbs resp : " ,res.data.list);
        setCrewBbsList(res.data.list);
        setTotalCnt(res.data.cnt);
            })
            .catch(function(err){
              alert(err);
            })
  }

  //게시글 조회수 정렬(검색, 페이징)
  function getBbsListByReadCount(c,s,p){
    axios.get('http://localhost:3000/readcount', {params : {"choice":c, "search":s, "pageNumber":p} })
    .then(function(res){
      console.log("allgetListByReadcount res ", res.data.list);
      setCrewBbsList(res.data.list);
      setTotalCnt(res.data.cnt);
    })
    .catch(function(err){
      alert(err);
    })
  }

  //게시글 좋아요 수 정렬(검색, 페이징)
  function getBbsListByLikeCount(c,s,p){
    axios.get('http://localhost:3000/likecount', {params:{ "choice":c, "search":s, "pageNumber":p  } })
    .then(function(res){
      console.log("allgetListByLikeCount res : ", res.data.list);
      setCrewBbsList(res.data.list);
      setTotalCnt(res.data.cnt);
    })
    .catch(function(err){
      alert(err);
    })
  }

  //페이징
  const handlePagination= (page) => {
    console.log(page);
    setPage(page);
    getCrewBbsList(choice, search, page-1);
    getBbsListByReadCount(choice, search, page-1);
    getBbsListByLikeCount(choice, search, page-1);
  }

  let navigate = useNavigate();
  function searchBtn(){
    // choice, search 검사
    if(choice.toString().trim() !== "" && search.toString().trim() !== ""){
        navigate('/crewBbsMain/' + choice + "/" + search);
    }
    else{
        navigate('/crewBbsMain/');
    }
    // 데이터를 다시 한번 갖고 옴
    getCrewBbsList(choice, search);
}

useEffect(function () {
  getCrewBbsList(crewBbsParams.choice, crewBbsParams.search, crewBbsParams.page);
}, [])

useEffect(() => {
  setCrewSeq(crewBbsParams.crewSeq);
}, [crewBbsParams.crewSeq]);

//타입 -> 수정중
// const getCrewTypeList = (type) => {
//   axios.get(`/crewBbsMain/${type}`)
//   .then(res => {
//     alert(typeof res.data.crewBbsList);
//     console.log(typeof res.data.crewBbsList);
//     setCrewBbsList(res.data.crewBbsList);
//   })
//   .catch(err => {
//     console.log(err);
//   });
// }

// useEffect(() => {
//   getCrewTypeList(type);
// }, [type]);

// const handleButtonClick = (type) => {
//   getCrewTypeList(type);
//   console.log("type",type);
//   alert(type);
// };

// const handleTypeChange = (e) => {
//   setType(e.target.value);
// }

  return (
    <>
          <div>
      <div className="col-auto">
        <input type="checkbox" id="all" name="type_all" value="all" checked={type === 'all'} />
        <label htmlFor="all">전체</label>

        <input type="checkbox" id="recruiting" name="type_ing" value="모집중" checked={type === '모집중'}  />
        <label htmlFor="recruiting">모집중</label>

        <input type="checkbox" id="closed" name="type_done" value="모집완료" checked={type === '모집완료'} />
        <label htmlFor="closed">모집 완료</label>
      </div>
  </div>
  
    <table style={{ marginLeft:"auto", marginRight:"auto", marginTop:"20px", marginBottom:"5px" }}>
            <tbody>
            <tr>
                <td style={{ paddingLeft:"3px" }}>
                    <select className="custom-select" value={choice} onChange={choiceChange}>
                        <option value=''>검색</option>
                        <option value="title">제목</option>
                        <option value="content">내용</option>
                        <option value="memId">작성자</option>
                    </select>
                </td>
                <td style={{ paddingLeft:"5px" }} className="align-middle">
                    <input type="text" className="form-control" placeholder="검색어"
                        value={search} onChange={searchChange}/>
                </td>
                <td style={{ paddingLeft:"5px" }}>
                    <span>
                        <button type="button" className="btn btn-primary" onClick={()=>searchBtn()}>검색</button>
                    </span>
                </td>
            </tr>
            </tbody>
            <br></br>
          <div class="col-auto">
          <button className="btn btn-primary" onClick={getCrewBbsList}>
          최신순
        </button>
        <button className="btn btn-primary" onClick={getBbsListByReadCount}>
          조회수 순
        </button>
        <button className="btn btn-primary" onClick={getBbsListByLikeCount}>
          좋아요 순
        </button>
          </div>
        </table>
      
      {/* 서버 데이터 */}
      {crewBbsList.map((singleBbs, i) => (
        <div className="col-xl-4 col-lg-4" key={i}>
          <article className="ptf-post ptf-post--style-1">
            <div className="ptf-post__media">
              <Link className="ptf-work__link" to={`/crewBbsBlogDetails/${singleBbs.crewSeq}`}></Link>
             <img src={"http://localhost:3000/getimg?imgid="+ singleBbs.crewImg }
               alt="blog"
               loading="lazy"
             />
            </div>
            <div className="ptf-post__content">
              <header className="ptf-post__header">
                <div className="ptf-post__meta">
                  <span className="cat">{singleBbs.type}</span>
                  <span className="date">{singleBbs.crewCreateDate}</span>
                </div>
                <h3 className="ptf-post__title">
                  <span>&lt;{singleBbs.crewName}&gt;</span><br></br>
                  <Link to={`/crewBbsBlogDetails/${singleBbs.crewSeq}`}>{singleBbs.title}</Link>
                </h3>
              </header>
            </div>
          </article>
        </div>
      ))}
      <CrewBbsPagination page={page} totalCnt={totalCnt} handlePagination={handlePagination} />
    </>
  );
};

export default CrewBlogThree;