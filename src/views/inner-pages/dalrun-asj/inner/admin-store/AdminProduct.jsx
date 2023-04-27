import { useState } from "react";
import { Link } from "react-router-dom";
import AdminSearch from "../../../../../components/dalrun-asj/AdminSerach";
import ModalBtn from "../../../../../components/dalrun-asj/ModalBtn";
import { Table } from "react-bootstrap";
import useCheckControl from "../../../../../components/dalrun-asj/useCheckControl";

function AdminProduct() {
  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");
  const [saleState, setSaleState] = useState("");
  const [stockState, setStockState] = useState("");
  const [dataList, setDataList] = useState([]);

  const handleSaleRadio = (e) => setSaleState(e.target.value);
  const handleStockRadio = (e) => setStockState(e.target.value);
  const { handleAllCheck, handleSingleCheck, checkedList } = useCheckControl({dataList});

  const category = [
    {cate:"insert", name:"상품등록", selected:"상품등록 페이지", list:[]},
    {cate:"update", name:"상품수정", selected:"상품수정 페이지", list:checkedList}, 
    {cate:"delete", name:"상품삭제", selected:"이 상품을 삭제하겠습니까?", list:checkedList}
  ];

  const reset = () => {
    setSaleState("");
    setStockState("");
    setChoice("");
    setSearch("");
  }

  return (
    <div className="store">
      <div className="store-content">
          <div className="search outline">
          <div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <div className="search-content">
              <span className="search-title">판매상태</span>
              <div>
                <label><input type="radio" value="0" onChange={handleSaleRadio} checked={saleState === "0"}/>판매</label>
                <label><input type="radio" value="1" onChange={handleSaleRadio} checked={saleState === "1"}/>품절</label>
              </div>
            </div>
            <div className="search-content">
              <span className="search-title">재고상태</span>
              <div>
                <label><input type="radio" value="0" onChange={handleStockRadio} checked={stockState === "0"}/>충분</label>
                <label><input type="radio" value="1" onChange={handleStockRadio} checked={stockState === "1"}/>부족</label>
              </div>
            </div>
            </div>
            <div className="search-content">
            </div>
            <div className="search-content">
              <span className="search-title">검색어</span>
              <select value={choice} onChange={(e)=>setChoice(e.target.value)}>
                <option value="">선택</option>
                <option value="category">카테고리</option>
                <option value="productId">상품코드</option>
                <option value="name">상품명</option>
              </select>
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
          <div className="search-btn">
            <button className="reset-btn" onClick={reset}>초기화</button>
            <button>
              <Link to={`?choice=${choice}&search=${search}&sale=${saleState}&stock=${stockState}`}>검색</Link>
            </button>
          </div>
          </div>
          <div className="info">
            <ModalBtn {...category} />
            <div className="info_con">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>
                    <input 
                      type="checkbox" 
                      onChange={(e) => handleAllCheck(e.target.checked)} 
                      checked={checkedList.length === dataList.length ? true : false}
                      />
                    </th>
                    <th>상품번호</th>
                    <th>상품코드</th>
                    <th>카테고리</th>
                    <th>브랜드</th>
                    <th>상품명</th>
                    <th>색상</th>
                    <th>사이즈</th>
                    <th>가격</th>
                    <th>재고</th>
                    <th>등록일</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    dataList.length !== 0 ?
                    dataList.map((item, i) => {
                      return(
                        <tr key={i}>
                          <th>
                            <input 
                              type="checkbox" 
                              onChange={(e) => handleSingleCheck(e.target.checked, item.productId)} 
                              checked={checkedList.includes(item.productId) ? true : false}
                              />
                          </th>
                          <td>
                            <Link to={`/store-details/${item.productCode}`}>{item.productId}</Link>
                          </td>
                          <td>{item.productCode}</td>
                          <td>{item.productCategory}</td>
                          <td>{item.productBrand}</td>
                          <td>{item.productName}</td>
                          <td>{item.productColor}</td>
                          <td>{item.productSize}</td>
                          <td>{item.productPrice}</td>
                          <td>{item.productStock}</td>
                          <td>{item.productRegiDate}</td>
                        </tr>
                      );
                    }) 
                    : <tr style={{textAlign:"center"}}><td colSpan="11">데이터가 없습니다</td></tr>
                  }
                </tbody>
              </Table>
              <AdminSearch setData={setDataList} />
            </div>          
          </div>
      </div>
    </div>
  );
}

export default AdminProduct;
