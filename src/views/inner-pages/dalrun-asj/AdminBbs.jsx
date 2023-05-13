import AdminShoereview from "./inner/admin-bbs/AdminShoereview";
import AdminDiary from "./inner/admin-bbs/AdminDiary";
import AdminCompetition from "./inner/admin-bbs/AdminCompetition";
import AdminQuestion from "./inner/admin-bbs/AdminQuestion";
import AdminBtn from "../../../components/dalrun-asj/AdminBtn";
import { Route, Routes } from "react-router-dom";
import AdminBbsContent from "./inner/admin-contents/AdminBbsContent";

function AdminBbs() {
    const category = [
        {cate:"question", name:"문의", selected:<AdminQuestion/>}, 
        {cate: "shoereview", name:"리뷰", selected:<AdminShoereview/>}, 
        {cate:"diary", name:"다이어리", selected:<AdminDiary/>}, 
        {cate: "competition", name: "대회일정", selected:<AdminCompetition/>}
    ];

    return(
        <div className="bbs admin-container">
            <h4 className="title">게시물 관리</h4>
            <div style={{ float:"left" }}>
                <AdminBtn {...category} />
            </div>
            <Routes>
                <Route path=":cate/*" element={<AdminBbsContent {...category}/>} />
            </Routes>
        </div>
    );
}

export default AdminBbs;