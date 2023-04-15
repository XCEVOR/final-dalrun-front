import { useState } from "react";
import AdminShoereview from "./inner/admin-bbs/AdminShoereview";
import AdminDiary from "./inner/admin-bbs/AdminDiary";
import AdminCompetition from "./inner/admin-bbs/AdminCompetition";
import AdminQuestion from "./inner/admin-bbs/AdminQuestion";

function AdminBbs() {
    const category = ["question", "shoereview", "diary", "competition"];
    const [clicked, setClicked] = useState(category[0]);
    const clickedBtn = (p) => {
        if(p === category[0]) return <AdminQuestion />;
        else if(p === category[1]) return <AdminShoereview />;
        else if(p === category[2]) return <AdminDiary />;
        else if(p === category[3]) return <AdminCompetition />;
    }

    return(
        <div className="bbs container">
            <h4 className="title">게시물 관리</h4>
            <button onClick={() => setClicked(category[0])}>문의</button>
            <button onClick={() => setClicked(category[1])}>리뷰</button>
            <button onClick={() => setClicked(category[2])}>다이어리</button>
            <button onClick={() => setClicked(category[3])}>대회일정</button>
            {clickedBtn(clicked)}
        </div>
    );
}

export default AdminBbs;