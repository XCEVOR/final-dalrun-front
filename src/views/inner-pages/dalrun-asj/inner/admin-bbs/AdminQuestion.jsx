import AdminProductinquiry from "./admin-question/AdminProductinquiry";
import AdminQna from "./admin-question/AdminQna";
import AdminBtn from "../../../../../components/dalrun-asj/AdminBtn";
import { Route, Routes } from "react-router-dom";
import AdminQuestionContent from "../admin-contents/AdminQuestionContent";

function AdminQuestion() {
    const qCategory = [
        {cate:"productinquiry", name:"상품문의", selected:<AdminProductinquiry />}, 
        {cate: "qna", name:"QnA", selected:<AdminQna />}, 
    ];

   
    return (
        <>  
            <div style={{ float:"right" }}>
                <AdminBtn {...qCategory}/>
            </div>
            <Routes>
                <Route path=":sub/*" element={<AdminQuestionContent {...qCategory} />} />
            </Routes>
        </>
    );
}

export default AdminQuestion;