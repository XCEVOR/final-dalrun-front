import { useState } from "react";
import { Link } from "react-router-dom";
import AdminSearch from "../../../../../components/dalrun-asj/AdminSerach";
import ModalBtn from "../../../../../components/dalrun-asj/ModalBtn";
import { Table } from "react-bootstrap";
import useCheckControl from "../../../../../components/dalrun-asj/useCheckControl";
import axios from "axios";
import OrderDetailsModal from "../../../../../components/dalrun-asj/details/OrderDetailsModal";

function AdminOrder() {
  const [choice, setChoice] = useState("");
  const [search, setSearch] = useState("");
  const [orderState, setOrderState] = useState("");
  const [deliveryState, setDeliveryState] = useState("");
  const [dataList, setDataList] = useState([]);
  const [orderdetail, setOrderdetail] = useState([]);
  const [orderNumber, setOrderNumber] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [modalShow, setModalShow] = useState(false);

  const handleOrderRadio = (e) => setOrderState(e.target.value);
  const handleDeliveryRadio = (e) => setDeliveryState(e.target.value);
  const { handleAllCheck, handleSingleCheck, checkedList } = useCheckControl({dataList});

  const category = [
    {cate:"update", name:"주문수정", selected:"주문내역 수정 페이지"}, 
    {cate:"delete", name:"주문삭제", selected:"이 주문내역을 삭제하겠습니까?"}
  ];

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

  const showOrderDetail = (num, price, quantity) => {
    axios.post('http://localhost:3000/getOrderDetail',null, { params: {"orderNumber" : num} })
        .then((resp) => {
          setOrderdetail(resp.data);
          setOrderNumber(num);
          setTotalPrice(price);
          setQuantity(quantity);
          setModalShow(true);
          console.log(orderdetail);
        })
        .catch((err) => console.log(err));
  }

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
          <div className="info">
            <ModalBtn {...category} />
            <div className="info_con">
              <Table striped bordered hover>
                <thead>
                  <tr>
                  <th>
                    <input 
                      type="checkbox" 
                      onChange={(e) => handleAllCheck(e.target.checked)} 
                      checked={checkedList.length === dataList.length ? true : false}
                      />
                    </th>
                    <th>주문번호</th>
                    <th>아이디</th>
                    <th>주문자명</th>
                    <th>주소</th>
                    <th>연락처</th>
                    <th>요청사항</th>
                    <th>주문수량</th>
                    <th>총금액</th>
                    <th>주문일자</th>
                    <th>주문상태</th>
                    <th>배송상태</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    dataList.length !== 0 ?
                    dataList.map((order, i) => {
                      const orderNumber = order.orderNumber;
                      const totalPrice = order.orderTotalprice;
                      const orderQuantity = order.orderQuantity;

                      return(
                        <tr key={i}>
                          <th>
                            <input 
                              type="checkbox" 
                              onChange={(e) => handleSingleCheck(e.target.checked, order.orderNumber)} 
                              checked={checkedList.includes(order.orderNumber) ? true : false}
                              />
                          </th>
                          <td>
                            <Link className="table_link" onClick={() => showOrderDetail(orderNumber, totalPrice, orderQuantity)}>{orderNumber}</Link>
                          </td>
                          <td>{order.memId}</td>
                          <td>{order.orderName}</td>
                          <td>{order.orderAddress}</td>
                          <td>{order.orderPhone}</td>
                          <td>{order.orderRequirment}</td>
                          <td>{orderQuantity}</td>
                          <td>{totalPrice}</td>
                          <td>{order.orderDate}</td>
                          <td>{orderstate(order.orderState)}</td>
                          <td>{deliverystate(order.deliveryState)}</td>
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
      <OrderDetailsModal 
        show={modalShow} 
        orderdetail={orderdetail}
        ordernumber={orderNumber}
        totalPrice={totalPrice}
        quantity={quantity}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default AdminOrder;
