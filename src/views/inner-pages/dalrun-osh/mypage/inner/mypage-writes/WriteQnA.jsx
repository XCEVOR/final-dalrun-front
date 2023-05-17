import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { useNavigate } from "react-router-dom";

function WriteQnA() {


  const history = useNavigate();
  const [id, setId] = useState("");

  useEffect(()=>{
    const str = localStorage.getItem('login')
    if(str !== null){
        const login = JSON.parse(str);
        setId(login.memId);

    }else {
        alert('login을 해주세요.');
        history('/login');
    }
}, [history, setId]);


  const [myqnalist, setmyqnalist] = useState([]);

  const [choice, setChoice] = useState('');
  const [search, setSearch] = useState('');

  // paging
  const [page, setPage] = useState(0);
  const [totalCnt, setTotalCnt] = useState(0);

  function getqnalist(){
      axios.get("http://localhost:3000/myqnalist", { params:{ "choice":choice, "search":search, "pageNumber":page, "memId":id } })
      .then(function(resp){

          console.log(resp.data.list);
          setmyqnalist(resp.data.list);
          setTotalCnt(resp.data.cnt);
      })
      .catch(function(err){
          alert(err);
      })
  }

  function searchBtn(){
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

  function executeSearch() {
    // 검색 버튼 로직 작성
    getqnalist(choice, search, 0);
  }
  
  useEffect(() => {
    if (id) {
      executeSearch(); // 페이지 로드 시 검색 버튼 실행
    }
  }, [id]);
  
  useEffect(() => {
    executeSearch(); // search 상태 변경 시 검색 버튼 실행
  }, [search]);

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
          </div>
          <div className="info">
          <br />
            <div className="info_con">
              <Table responsive hover>
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
                      const wdate = new Date(qna.wdate);
                      const formattedDate = wdate.toLocaleDateString('ko-KR');
                      return(
                        <tr key={i}>
                          <td>{qna.qnaSeq}</td>
                          <td>{id}</td>
                          <td>
                            <Link to={'/qna/${qna.qnaTitle}'}>{qna.qnaTitle}</Link>
                          </td>
                          <td>{formattedDate}</td>
                          <td>{qna.answer === "1" ? "답변 등록" : "답변 미등록"}</td>
                          <td>{qna.readcount}</td>
                        </tr>
                      );
                    }) 
                    : <tr style={{textAlign:"center"}}><td colSpan="11">{id}데이터가 없습니다</td></tr>
                   }
                </tbody>
              </Table>
              {/* <MypageSerach setData={setmyqnalist} /> */}
            <Pagination 
                activePage={page} 
                itemsCountPerPage={10}
                totalItemsCount={totalCnt}
                pageRangeDisplayed={5}
                prevPageText={"<"}
                nextPageText={">"}
                onChange={pageChange} />

            <br />              
            </div>
          </div>
      </div>
    </div>
  );
}

export default WriteQnA;
