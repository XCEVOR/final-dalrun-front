import AdminProductinquiry from "./admin-question/AdminProductinquiry";
import AdminQna from "./admin-question/AdminQna";
import AdminBtn from "../../../../../components/dalrun-asj/AdminBtn";
import { Route, Routes } from "react-router-dom";

function AdminQuestion() {
    const category = [
        {cate:"productinquiry", name:"상품문의"}, 
        {cate: "qna", name:"QnA"}, 
    ];

    return (
        <div className="bbs">
            <div className="bbs-content">
                <div className="search outline"></div>
                <AdminBtn {...category} />
                <Routes>
                    <Route path=":cate" element={<AdminQuestion />} />
                    <Route path="productinquiry" element={<AdminProductinquiry />} />
                    <Route path="qna" element={<AdminQna />} />
                </Routes>
            </div>
        </div>
    );
}

export default AdminQuestion;