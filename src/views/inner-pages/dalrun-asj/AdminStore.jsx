import { useState } from "react";
import AdminOrder from "./inner/admin-store/AdminOrder";
import AdminProduct from "./inner/admin-store/AdminProduct";
import AdminStock from "./inner/admin-store/AdminStock";

function AdminStore() {
    const [clicked, setClicked] = useState("product");
    const clickedBtn = (p) => {
        if(p === "product") return <AdminProduct />;
        else if(p === "order") return <AdminOrder />;
        else if(p === "stock") return <AdminStock />;
    }

    return (
        <div className="store container">
            <h4 className="title">쇼핑몰 관리</h4>
            <button onClick={()=>setClicked('product')}>상품관리</button>
            <button onClick={()=>setClicked('order')}>주문관리</button>
            <button onClick={()=>setClicked('stock')}>재고관리</button>
            {clickedBtn(clicked)}
        </div>
    );
}

export default AdminStore;