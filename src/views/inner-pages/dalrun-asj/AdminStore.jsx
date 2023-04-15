import AdminOrder from "./inner/admin-store/AdminOrder";
import AdminProduct from "./inner/admin-store/AdminProduct";
import AdminStock from "./inner/admin-store/AdminStock";
import AdminBtn from "../../../components/dalrun-asj/AdminBtn";

function AdminStore() {
    const category = [
        {cate:"product", name:"상품관리", selected:<AdminProduct />}, 
        {cate: "order", name:"주문관리", selected:<AdminOrder />}, 
        {cate: "stock", name:"재고관리", selected:<AdminStock />}, 
    ];

    return (
        <div className="store container">
            <h4 className="title">쇼핑몰 관리</h4>
            <AdminBtn {...category} />
        </div>
    );
}

export default AdminStore;