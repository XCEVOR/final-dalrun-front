import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MypageSerach from "../../../../../../components/dalrun-sh/MypageSerach";
import ModalBtn from "../../../../../../components/dalrun-sh/ModalBtn";
import { Table } from "react-bootstrap";
import Pagination from "react-js-pagination";

function WriteQnA() {

  // const answerstate = (o) => {
  //   if(o === 0) return "미해결"
  //   else if(o === 1) return "해결완료"
  //   else if(o === 2) return "답변완료"
  // }

  const [id, setId] = useState("");

  useEffect(function() {
    let login = localStorage.getItem("login");
    setId(login.memId);
    // alert(login.memId);
  }, []);

  // const logindata=JSON.parse(localStorage.getItem('login'));
  // if(logindata){
  //   console.log(logindata.memId,"님이 접속하였습니다..")
  //   setLogin(logindata);

//   useEffect(()=>{
//     const str = localStorage.getItem('login')
//     if(str !== null){
//         const login = JSON.parse(str);
//         setMemId(login.memId);
//         if(login.grade === '걸음마' || login.grade === '런니니'){
//             alert('글작성 권한이 없습니다.');
//             history('/crewBbsMain');
//         }
//     }else {
//         alert('login을 해주세요.');
//         history('/login');
//     }
// }, [history, setMemId]);

  // useEffect(function() {
  //   let login = JSON.parse(localStorage.getItem("login"));
  //   setId("login.memId");
  // }, []);
  //  useEffect(function() {
  //   let login = localStorage.getItem("login");
  //   setId(login.memId);
  //   // alert(login.memId);
  // }); 

  // let login = localStorage.getItem("login");
  // setId(login.memId);

  // let login = JSON.parse(localStorage.getItem("login"));
  // setId(login.memId)

  // const userId = localStorage.getItem('login');
  // alert(userId);

  const [myqnalist, setmyqnalist] = useState([]);

  const [choice, setChoice] = useState('');
  const [search, setSearch] = useState('');

  // paging
  const [page, setPage] = useState(0);
  const [totalCnt, setTotalCnt] = useState(0);

  function getqnalist(){
      axios.get("http://localhost:3000/myqnalist", { params:{ "choice":choice, "search":search, "pageNumber":page, "memId":id } })
      .then(function(resp){
          // console.log(resp.data);
          // alert(JSON.stringify(resp.data[0]));

          setmyqnalist(resp.data.list);
          setTotalCnt(resp.data.cnt);
      })
      .catch(function(err){
          alert(err);
      })
  }

  function searchBtn(){
      // if(choice.toString().trim() === "" || search.toString().trim() === "") return;

      getqnalist(choice, search, 0);
  }

  function pageChange(page){
      setPage(page);
      getqnalist(choice, search, page-1);
  }

  useEffect(function(){
    if(id) {
    getqnalist("", "", 0); }
  }, []);
  
  return (
    <div className="store">
      <div className="store-content">
          <div className="search outline">
            <div>
              <div style={{display:'flex', justifyContent:'space-between'}}>
              </div>
              <div className="search-content">
                <span className="search-title">검색어</span>
                <input type="text"  value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="검색어"/>&nbsp;
                <button onClick={searchBtn} >검색</button>                             
              </div>
            </div>
            {/* <select value={choice} onChange={(e)=>setChoice(e.target.value)}>
                <option value="">검색</option>
                <option value="title">제목</option>
                <option value="content">내용</option>
                <option value="writer">작성자</option>
            </select>&nbsp; */}
           
            {/* <button>
              <Link to={`?choice=${choice}&search=${search}`}>검색</Link>
            </button> */}
          </div>
          <div className="info">
          <br />
            <div className="info_con">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>작성자</th>
                    <th>제목</th>
                    <th>작성일자</th>
                    <th>답변여부</th>
                    <th>조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    myqnalist.length !== 0 ?
                    myqnalist.map((qna, i) => {
                      return(
                        <tr key={i}>
                          <td>{qna.qnaSeq}</td>
                          <td>{qna.memId}</td>
                          <td>{qna.qnaTitle}</td>
                          <td>{qna.wdate}</td>
                          <td>{qna.answer}</td>
                          {/* <th>{answerstate(qna.answer)}</th> */}
                          <td>{qna.readCount}</td>
                        </tr>
                      );
                    }) 
                    : <tr style={{textAlign:"center"}}><td colSpan="11">데이터가 없습니다</td></tr>
                  }
                </tbody>
              </Table>
              {/* <MypageSerach setData={setmyqnalist} /> */}
            <Pagination 
                activePage={page} 
                itemsCountPerPage={10}
                totalItemsCount={totalCnt}
                pageRangeDisplayed={5}
                prevPageText={"이전"}
                nextPageText={"다음"}
                onChange={pageChange} />

            <br />              
            </div>
          </div>
      </div>
    </div>
  );
}

export default WriteQnA;
