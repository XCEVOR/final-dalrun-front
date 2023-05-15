import React, { useState, useEffect } from 'react';
import axios from "axios";
import Pagination from "react-js-pagination";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Store() {
  const history = useNavigate();
  const [id, setId] = useState("");
  const [mystorelist, setmystorelist] = useState([]);
  const [page, setPage] = useState(0);
  const [totalCnt, setTotalCnt] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const str = localStorage.getItem('login');
    if (str !== null) {
      const login = JSON.parse(str);
      setId(login.memId);
    } else {
      alert('login을 해주세요.');
      history('/login');
    }
  }, [history, setId]);

  function getstorelist() {
    axios
      .get("http://localhost:3000/my_orderlist", {
        params: { memId: id }
      })
      .then(function(resp) {
        const data = resp.data;
        if (data && data.list && data.cnt) {
          setmystorelist(data.list);
          setTotalCnt(data.cnt);
        } else {
          setmystorelist([]);
          setTotalCnt(0);
        }
      })
      .catch(function(err) {
        alert(err);
      });
  }

  useEffect(() => {
    if (id) {
      getstorelist();
    }
  }, [id]);

  function pageChange(page) {
    setPage(page);
    getstorelist();
  }

  function searchBtn() {
    setPage(1); // 검색 시 첫 페이지로 초기화
    getstorelist();
  }  

  return (
    <div className="members container">
      <h4 className="title">내 스토어 목록</h4>
      <br />
      <div className="inform outline" />
      <br />
      <div className="store">
        <div className="store-content">
          <div className="info">
            {/* <div className="search-content">
              <span className="search-title">검색어</span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="검색어"
              />
              <button onClick={searchBtn}>검색</button>
            </div> */}
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
                  {mystorelist !== undefined && mystorelist.length !== 0 ? (
                    mystorelist.map((msl, i) => {
                      return (
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
                      ) : (
                        <tr style={{ textAlign: "center" }}>
                          <td colSpan="7">
                            {mystorelist === undefined
                              ? "데이터를 로딩 중입니다."
                              : `${id} 데이터가 없습니다.`}
                          </td>
                        </tr>
                    )}
                  </tbody>
                </Table>
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