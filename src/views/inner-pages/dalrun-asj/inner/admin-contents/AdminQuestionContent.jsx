import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BasicSearch from "../../../../../components/dalrun-asj/BasicSearch";

function AdminQuestionContent(props) {
    const { sub } = useParams();
    const [optionVal, setOptionVal] = useState([]);

    const curr = () => {
        if(sub === "productinquiry") {
            const option = [
                {value : "memId", name : "작성자"},
                {value : "inqWriter", name : "이름"},
                {value : "productId", name : "상품번호"},
                {value : "title", name : "제목"},
                {value : "content", name : "내용"}
            ]

            setOptionVal(option);
        } else if(sub === "qna") {
            const option = [
                {value : "memId", name : "작성자"},
                {value : "category", name : "카테고리"},
                {value : "question", name : "질문"}
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
                <div>
                {
                    Object.values(props).filter(prop => sub === prop.cate)
                    .map((p,i) => {return <div key={i}>{p.selected}</div>})
                }
                </div>
            </div>
        </div>
    );
}

export default AdminQuestionContent;