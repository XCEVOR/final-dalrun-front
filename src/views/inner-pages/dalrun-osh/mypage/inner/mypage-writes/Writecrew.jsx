import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MypageSerach from "../../../../../../components/dalrun-sh/MypageSerach";
import Pagination from "react-js-pagination";
import { Table } from "react-bootstrap";
import useCheckControl from "../../../../../../components/dalrun-sh/useCheckControl";

function Writecrew() {

  const [id, setId] = useState("");
  useEffect(function() {
    let login = localStorage.getItem("login");
    setId(login.memId);
    // alert(login.memId);
  }, []);

  const [mycbslist, setmycbslist] = useState([]);
  const [choice, setChoice] = useState('');
  const [search, setSearch] = useState('');

  // paging
  const [page, setPage] = useState(0);
  const [totalCnt, setTotalCnt] = useState(0);

  function getcbslist(){
      axios.get("http://localhost:3000/mycbslist", { params:{ "choice":choice, "search":search, "pageNumber":page, "memId":id } })
      .then(function(resp){
          // console.log(resp.data);
          // alert(JSON.stringify(resp.data[0]));

          setmycbslist(resp.data.list);
          setTotalCnt(resp.data.cnt);
      })
      .catch(function(err){
          alert(err);
      })
  }

  function searchBtn(){
      // if(choice.toString().trim() === "" || search.toString().trim() === "") return;

      getcbslist(choice, search, 0);
  }

  function pageChange(page){
      setPage(page);
      getcbslist(choice, search, page-1);
  }

  useEffect(function(){
    if(id) {
    getcbslist("", "", 0); }
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
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="검색어"/>&nbsp;
                <button onClick={searchBtn} >검색</button>      
              </div>
            </div>

          </div>
          <div className="info">
            <br />
            <div className="info_con">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성일자</th>
                    <th>좋아요</th>
                    <th>조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    mycbslist.length !== 0 ?
                    mycbslist.map((cbs, i) => {
                      return(
                        <tr key={i}>
                          <th>{cbs.cBbsSeq}</th>
                          <th>{cbs.title}</th>
                          <th>{cbs.wdate}</th>
                          <th>{cbs.likeCount}</th>
                          <th>{cbs.readCount}</th>
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
                prevPageText={"<"}
                nextPageText={">"}
                onChange={pageChange} />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Writecrew;
