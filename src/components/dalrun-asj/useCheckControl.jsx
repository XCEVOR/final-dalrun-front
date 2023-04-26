import { useState } from "react";
import { useParams } from "react-router-dom";

function useCheckControl({dataList}) {
    const [checkedList, setCheckedList] = useState([]);
    const {cate, sub} = useParams();

    // 전체 체크
    const handleAllCheck = (checked) => {
        if(checked) {
            const checkedArr = [];
            dataList.forEach(el => {
                let allcheck;

                if(cate === "member") allcheck = el.memId;
                else if(cate === "crew") allcheck = el.crewName;
                else if(cate === "product") allcheck = el.productId;
                else if(cate === "order") allcheck = el.orderSeq;
                else if(sub === "productinquiry") allcheck = el.inqSeq;
                else if(cate === "shoereview") allcheck = el.shoereviewSeq;
                else if(cate === "competition") allcheck = el.compSeq;

                checkedArr.push(allcheck);
            });
            setCheckedList(checkedArr);
        } else {
            setCheckedList([]);
        }
    }
    
    // 개별 체크
    const handleSingleCheck = (checked, id) => {
        if(checked) setCheckedList(prev => [...prev, id]);
        else setCheckedList(checkedList.filter(item => item !== id));
    }
    
    return { handleAllCheck, handleSingleCheck, checkedList };
}

export default useCheckControl;