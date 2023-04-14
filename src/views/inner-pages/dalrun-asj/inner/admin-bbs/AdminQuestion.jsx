import { useState } from "react";
import AdminProductinquiry from "./admin-question/AdminProductinquiry";
import AdminQna from "./admin-question/AdminQna";

function AdminQuestion() {
    const [clicked, setClicked] = useState("productinquiry");
    const clickedBtn = (p) => {
        if(p === "productinquiry") return <AdminProductinquiry />;
        else if(p === "qna") return <AdminQna />;
    }

    return (
        <div className="bbs">
            <div className="bbs-content">
                <div className="search outline"></div>
                <button onClick={()=>setClicked('productinquiry')}>상품문의</button>
                <button onClick={()=>setClicked('qna')}>QnA</button>
                {clickedBtn(clicked)}
            </div>
        </div>
    );
}

export default AdminQuestion;