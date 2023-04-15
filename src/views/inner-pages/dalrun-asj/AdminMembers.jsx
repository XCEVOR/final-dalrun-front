import AdminCrew from "./inner/admin-members/AdminCrew";
import AdminMember from "./inner/admin-members/AdminMember";
import { useState } from "react";

function AdminMembers() {
    const [clicked, setClicked] = useState("member");
    const clickedBtn = (p) => {
        if(p === "member") return <AdminMember />;
        else if(p === "crew") return <AdminCrew />;
    }

    return (
        <div className="members container">
            <h4 className="title">회원관리</h4>
            <button onClick={()=>setClicked('member')}>개인회원</button>
            <button onClick={()=>setClicked('crew')}>크루</button>
            {clickedBtn(clicked)}
        </div>
    );
}

export default AdminMembers;