import { useState } from "react";

function useCheckControl({dataList}) {
    const [checkedList, setCheckedList] = useState([]);
    
    // 전체 체크
    const handleAllCheck = (checked) => {
        if(checked) {
            const checkedArr = [];
            dataList.forEach(el => checkedArr.push(el.memId));
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