import { useState } from "react";
import { Link } from "react-router-dom";
import AdminSearch from "../../../../../components/dalrun-asj/AdminSerach";

function AdminProduct() {
  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");
  const [saleState, setSaleState] = useState("");
  const [stockState, setStockState] = useState("");

  const handleSaleRadio = (e) => setSaleState(e.target.value);
  const handleStockRadio = (e) => setStockState(e.target.value);

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
          <button>
            <Link to={`?choice=${choice}&search=${search}&sale=${saleState}&stock=${stockState}`}>검색</Link>
          </button>
          </div>
          <div className="info outline">상품관리</div>
          <AdminSearch />
      </div>
    </div>
  );
}

export default AdminProduct;
