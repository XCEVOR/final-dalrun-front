import AdminShoereview from "./inner/admin-bbs/AdminShoereview";
import AdminDiary from "./inner/admin-bbs/AdminDiary";
import AdminCompetition from "./inner/admin-bbs/AdminCompetition";
import AdminQuestion from "./inner/admin-bbs/AdminQuestion";
import AdminBtn from "../../../components/dalrun-asj/AdminBtn";
import { Route, Routes } from "react-router-dom";

function AdminBbs() {
    const category = [
        {cate:"question", name:"문의"}, 
        {cate: "shoereview", name:"리뷰"}, 
        {cate:"diary", name:"다이어리"}, 
        {cate: "competition", name: "대회일정"}
    ];

    return(
        <div className="bbs container">
            <h4 className="title">게시물 관리</h4>
            <AdminBtn {...category} />
            <Routes>
                <Route path=":cate" element={<AdminBbs />} />
                <Route path="question/*" element={<AdminQuestion />} />
                <Route path="shoereview" element={<AdminShoereview />} />
                <Route path="diary" element={<AdminDiary />} />
                <Route path="competition" element={<AdminCompetition />} />
            </Routes>
        </div>
    );
}

export default AdminBbs;