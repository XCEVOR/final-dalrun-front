import AdminBtn from "../../../components/dalrun-asj/AdminBtn";
import { Route, Routes } from "react-router-dom";
import AdminOrder from "./inner/admin-store/AdminOrder";
import AdminProduct from "./inner/admin-store/AdminProduct";
import AdnimStoreContent from "./inner/admin-contents/AdminStoreContent";

function AdminStore() {
    const category = [
        {cate:"product", name:"상품관리", selected:<AdminProduct/>}, 
        {cate: "order", name:"주문관리", selected:<AdminOrder/>}
    ];

    return (
        <div className="store admin-container">
            <h4 className="title">쇼핑몰 관리</h4>
            <AdminBtn {...category} />
            <Routes>
                <Route path=":cate/*" element={<AdnimStoreContent {...category} />} />
            </Routes>
        </div>
    );
}

export default AdminStore;