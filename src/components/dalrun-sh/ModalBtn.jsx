import { useState } from "react";
import CustomModal from "./CustomModal";
import { useSearchParams } from "react-router-dom";

function ModalBtn(props) {
    const [modalShow, setModalShow] = useState(false);
    const [ModalHeader, setModalHeader] = useState();
    const [checkedList, setCheckedList] = useState([]);
    const [category, setCategory] = useState("");
    const [searchParam, setSearchParam] = useSearchParams();

    return (
        <div>
            {
                Object.values(props).map((prop,i) => {
                    return (
                        <button key={i} onClick={() => {
                            if(prop.list.length === 0 && prop.cate !== "insert") return alert("값 체크 후 다시 시도해주세요");
                            else if(prop.list.length > 1 && prop.cate === "update") return alert("하나의 값만 체크해주세요"); 
                            else {
                                searchParam.set('target', prop.list);
                                setSearchParam(searchParam);
                            }

                            setModalShow(true);
                            setCheckedList(prop.list);
                            setCategory(prop.cate);
                            setModalHeader(prop.name);
                        }}>{prop.name}</button>
                    );
                })
            }    
            <CustomModal 
                show={modalShow}  
                onHide={() => setModalShow(false)} 
                checked={checkedList}
                category={category}
                header={ModalHeader}
            />
        </div>
    );
}

export default ModalBtn;