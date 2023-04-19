import AdminOrder from "./inner/admin-store/AdminOrder";
import AdminProduct from "./inner/admin-store/AdminProduct";
import AdminStock from "./inner/admin-store/AdminStock";
import AdminBtn from "../../../components/dalrun-asj/AdminBtn";
import { Route, Routes } from "react-router-dom";

function AdminStore() {
    const category = [
        {cate:"product", name:"상품관리"}, 
        {cate: "order", name:"주문관리"}
    ];

    return (
        <div className="store container">
            <h4 className="title">쇼핑몰 관리</h4>
            <AdminBtn {...category} />
            <Routes>
                <Route path=":cate" element={<AdminStore />} />
                <Route path="product" element={<AdminProduct />} />
                <Route path="order" element={<AdminOrder />} />
            </Routes>
        </div>
    );
}

export default AdminStore;