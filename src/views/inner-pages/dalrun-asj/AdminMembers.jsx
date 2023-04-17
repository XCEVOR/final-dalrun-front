import { Route, Routes } from "react-router-dom";
import AdminBtn from "../../../components/dalrun-asj/AdminBtn";
import AdminCrew from "./inner/admin-members/AdminCrew";
import AdminMember from "./inner/admin-members/AdminMember";

function AdminMembers() {
    const category = [
        {cate:"member", name:"개인회원"}, 
        {cate: "crew", name:"크루"}
    ];

    return (
        <div className="members container">
            <h4 className="title">회원관리</h4>
            <AdminBtn {...category} />
            <Routes>
                <Route path=":cate" element={<AdminMembers />} />
                <Route path="member" element={<AdminMember />} />
                <Route path="crew" element={<AdminCrew />} />
            </Routes>
        </div>
    );
}

export default AdminMembers;