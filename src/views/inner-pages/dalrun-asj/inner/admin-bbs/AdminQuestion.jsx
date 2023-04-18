import AdminProductinquiry from "./admin-question/AdminProductinquiry";
import AdminQna from "./admin-question/AdminQna";
import AdminBtn from "../../../../../components/dalrun-asj/AdminBtn";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import BasicSearch from "../../../../../components/dalrun-asj/BasicSearch";

function AdminQuestion() {
    const category = [
        {cate:"productinquiry", name:"상품문의"}, 
        {cate: "qna", name:"QnA"}, 
    ];

    const [optionVal, setOptionVal] = useState([]);
    const currentPath = useLocation().pathname.split('/')[4];

    const curr = () => {
        category.filter(c => {
            if(currentPath === c.cate) {
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
        });
    }

    useEffect(()=>{
        curr();
    }, [currentPath]);

    return (
        <div className="bbs">
            <div className="bbs-content">
                <BasicSearch {...optionVal} />
                <AdminBtn {...category} />
                <Routes>
                    <Route path="productinquiry" element={<AdminProductinquiry />} />
                    <Route path="qna" element={<AdminQna />} />
                </Routes>
            </div>
        </div>
    );
}

export default AdminQuestion;