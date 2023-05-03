import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function OrderUpdate({data, onHide}) {
    const [searchParam, setSearchParam] = useSearchParams();

    const [num, setNum] = useState(0);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [requirment, setRequirment] = useState("");
    const [orderQuantity, setOrderQuantity] = useState("");
    const [orderTotalprice, setOrderTotalprice] = useState("");
    const [orderState, setOrderState] = useState("0");
    const [deliveryState, setDeliveryState] = useState("0");
    const [date, setDate] = useState("");
      
    const setInput = (data) => {

        setNum(data.orderNumber);
        setId(data.memId);
        setName(data.orderName);
        setAddress(data.orderAddress);
        setPhone(data.orderPhone);
        setRequirment(data.orderRequirment);
        setOrderQuantity(data.orderQuantity);
        setOrderTotalprice(data.orderTotalprice);
        setOrderState(String(data.orderState));
        setDeliveryState(String(data.deliveryState));
        setDate(data.orderDate);
    }

    useEffect(() => {
        if(data.length === 0) return;
        setInput(data);
        console.log(date);

    }, [data]);

    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append("orderNumber", num);
        formData.append("memId", id);
        formData.append("orderName", name);
        formData.append("orderAddress", address);
        formData.append("orderPhone", phone);
        formData.append("orderRequirment", requirment);
        formData.append("orderQuantity", orderQuantity);
        formData.append("orderTotalprice", orderTotalprice);
        formData.append("orderState", orderState);
        formData.append("deliveryState", deliveryState);

        axios.post('http://localhost:3000/admin_updateorder', formData)
            .then((resp) => {
                if(resp.data === "YES") {
                    alert("수정완료");
                    onHide();
                    setSearchParam(searchParam.set('target',''));
                } else {
                    alert("수정실패");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
   
    return (
        <div className="admin_update_container">
            <div className="admin_update">
                <form name="frm" onSubmit={onSubmit} encType="multipart/form">
                    <fieldset>
                        <div className="add_padding">
                            <label htmlFor="num">주문번호</label>
                            <input type="text" value={num || ""} readOnly={true} />
                        </div>
                        <div>
                            <label htmlFor="id">주문자 아이디</label>
                            <input type="text" value={id || ""} onChange={(e) => setId(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="name">주문자명</label>
                            <input type="text" value={name || ""} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="address">주소</label>
                            <input type="text" value={address || ""} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="phone">연락처</label>
                            <input type="text" value={phone || ""} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="requirment">요청사항</label>
                            <input type="number" value={requirment || ""} onChange={(e) => setRequirment(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="orderQuantity">총주문수량</label>
                            <input type="number" value={orderQuantity || ""} onChange={(e) => setOrderQuantity(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="orderTotalprice">총주문금액</label>
                            <input type="number" value={orderTotalprice || ""} readOnly={true} />
                        </div>
                        <div>
                            <label htmlFor="orderState">주문상태</label>
                            <select value={orderState} onChange={(e) => setOrderState(e.target.value)}>
                                <option value="0">주문완료</option>
                                <option value="1">환불</option>
                                <option value="2">취소</option>
                                <option value="3">반품</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="deliveryState">배송상태</label>
                            <select value={deliveryState} onChange={(e) => setDeliveryState(e.target.value)}>
                                <option value="0">배송준비</option>
                                <option value="1">배송중</option>
                                <option value="2">배송완료</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="date">주문일</label>
                            <input type="date" value={date || ""} readOnly={true} />
                        </div>
                        <input type="submit" value="수정" />
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default OrderUpdate;