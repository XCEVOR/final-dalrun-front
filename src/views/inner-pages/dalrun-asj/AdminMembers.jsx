import { Route, Routes } from "react-router-dom";
import AdminBtn from "../../../components/dalrun-asj/AdminBtn";
import AdminCrew from "./inner/admin-members/AdminCrew";
import AdminMember from "./inner/admin-members/AdminMember";
import AdminMembersContent from "./inner/admin-contents/AdminMembersContent";

function AdminMembers() {
    const category = [
        {cate:"member", name:"개인회원", selected:<AdminMember />}, 
        {cate: "crew", name:"크루", selected:<AdminCrew />}
    ];

    return (
        <div className="members admin-container">
            <h4 className="title">회원관리</h4>
            <AdminBtn {...category} />
            <Routes>
                <Route path=":cate" element={<AdminMembersContent {...category} />} />
            </Routes>
        </div>
    );
}

export default AdminMembers;