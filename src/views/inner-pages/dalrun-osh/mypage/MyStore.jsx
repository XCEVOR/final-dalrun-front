import React, { useState, useEffect } from 'react';
import axios from "axios";
import Pagination from "react-js-pagination";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Store() {
  
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

  const [mystorelist, setmystorelist] = useState([]);
  const [choice, setChoice] = useState('');
  const [search, setSearch] = useState('');

  // paging
  const [page, setPage] = useState(0);
  const [totalCnt, setTotalCnt] = useState(0);

  function getstorelist(){
      axios.get("http://localhost:3000/my_orderlist", { params:{ "choice":choice, "search":search, "pageNumber":page, "memId":id } })
      .then(function(resp){

          setmystorelist(resp.data.list);
          setTotalCnt(resp.data.cnt);
      })
      .catch(function(err){
          alert(err);
      })
  }

  function searchBtn(){
      // if(choice.toString().trim() === "" || search.toString().trim() === "") return;

      mystorelist(choice, search, 0);
  }

  function pageChange(page){
      setPage(page);
      mystorelist(choice, search, page-1);
  }

  useEffect(function(){
    if(id) {
      getstorelist("", "", 0); }
  }, []);
  
  const orderstate = (o) => {
    if(o === 0) return "주문완료"
    else if(o === 1) return "환불"
    else if(o === 2) return "취소"
    else if(o === 3) return "반품"
  }

  const deliverystate = (d) => {
    if(d === 0) return "배송준비"
    else if(d === 1) return "배송중"
    else if(d === 2) return "배송완료"
  }

  return (
    <div className="members container">
    <h4 className="title">내 스토어 목록</h4>
    <br />
    <div className="inform outline" />
    <br />   
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
                      <th>주문번호</th>
                      <th>상품명</th>
                      <th>주문수량</th>
                      <th>금액</th>                    
                      <th>총액</th>
                      <th>주문일자</th>
                      <th>상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      mystorelist.length !== 0 ?
                      mystorelist.map((msl, i) => {
                        return(
                          <tr key={i}>
                            <th>{msl.orderNumber}</th>
                            <th>{msl.productName}</th>
                            <th>{msl.productQuantity}</th>
                            <th>{msl.productPrice}</th>
                            <th>{msl.orderTotalprice}</th>                            
                            <th>{msl.orderDate}</th>
                            <th>{msl.orderState}</th>
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
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}  


export default Store;    