import { useState } from "react";
import { Link } from "react-router-dom";

function AdminOrder() {
  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");
  const [orderState, setOrderState] = useState("");
  const [deliveryState, setDeliveryState] = useState("");

  const handleOrderRadio = (e) => setOrderState(e.target.value);
  const handleDeliveryRadio = (e) => setDeliveryState(e.target.value);

  return (
    <div className="store">
      <div className="store-content">
          <div className="search outline">
            <div>
              <div style={{display:'flex', justifyContent:'space-between'}}>
              <div className="search-content">
                <span className="search-title">주문상태</span>
                <select value={orderState} onChange={handleOrderRadio}>
                  <option value="">선택</option>
                  <option value="0">주문완료</option>
                  <option value="1">환불</option>
                  <option value="2">취소</option>
                  <option value="3">반품</option>
                </select>
              </div>
              <div className="search-content">
                <span className="search-title">배송상태</span>
                <select value={deliveryState} onChange={handleDeliveryRadio}>
                  <option value="">선택</option>
                  <option value="0">배송준비</option>
                  <option value="1">배송중</option>
                  <option value="2">배송완료</option>
                </select>
              </div>
              </div>
              <div className="search-content">
              </div>
              <div className="search-content">
                <span className="search-title">검색어</span>
                <select value={choice} onChange={(e)=>setChoice(e.target.value)}>
                  <option value="">선택</option>
                  <option value="memId">주문자</option>
                  <option value="orderSeq">주문번호</option>
                  <option value="productId">상품번호</option>
                </select>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
            </div>
            <button>
              <Link to={`?choice=${choice}&search=${search}&order=${orderState}&delivery=${deliveryState}`}>검색</Link>
            </button>
          </div>
          <div className="info outline">주문관리</div>
      </div>
    </div>
  );
}

export default AdminOrder;
