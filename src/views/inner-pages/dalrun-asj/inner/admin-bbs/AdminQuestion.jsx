import AdminProductinquiry from "./admin-question/AdminProductinquiry";
import AdminQna from "./admin-question/AdminQna";
import AdminBtn from "../../../../../components/dalrun-asj/AdminBtn";
import { Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BasicSearch from "../../../../../components/dalrun-asj/BasicSearch";
import AdminQuestionContent from "./admin-contents/AdminQuestionContent";

function AdminQuestion() {
    const qCategory = [
        {cate:"productinquiry", name:"상품문의", selected:<AdminProductinquiry />}, 
        {cate: "qna", name:"QnA", selected:<AdminQna />}, 
    ];

    const [optionVal, setOptionVal] = useState([]);
    const { sub } = useParams();

    const curr = () => {
        if(sub === "productinquiry") {
            const option = [
                {value : "memId", name : "작성자"},
                {value : "productId", name : "상품번호"},
                {value : "content", name : "내용"},
            ]

            setOptionVal(option);
        } else {
            const option = [
                {value : "memId", name : "작성자"},
                {value : "category", name : "카테고리"},
                {value : "question", name : "질문"},
            ]

            setOptionVal(option);
        }
    }

    useEffect(()=>{
        curr();
    }, [sub]);

    return (
        <div className="bbs">
            <div className="bbs-content">
                <BasicSearch {...optionVal} />
                <AdminBtn {...qCategory}/>
                <Routes>
                    <Route path=":sub/*" element={<AdminQuestionContent {...qCategory} />} />
                </Routes>
            </div>
        </div>
    );
}

export default AdminQuestion;