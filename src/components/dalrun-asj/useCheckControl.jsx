import { useState } from "react";
import { useParams } from "react-router-dom";

function useCheckControl({dataList}) {
    const [checkedList, setCheckedList] = useState([]);
    const {cate} = useParams();

    // 전체 체크
    const handleAllCheck = (checked) => {
        if(checked) {
            const checkedArr = [];
            dataList.forEach(el => {
                if(cate === "member") checkedArr.push(el.memId);
                else if(cate === "crew") checkedArr.push(el.crewName);
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