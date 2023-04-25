import { useState } from "react";
import CustomModal from "./CustomModal";

function ModalBtn(props) {
    const [modalShow, setModalShow] = useState(false);
    const [selected, setSelected] = useState();
    const [ModalHeader, setModalHeader] = useState();
    const [checkedList, setCheckedList] = useState([]);
    
    return (
        <div>
            {
                Object.values(props).map((prop,i) => {
                    return (
                        <button key={i} onClick={() => {
                            setModalShow(true);
                            setCheckedList(prop.list);
                            setSelected(prop.selected);
                            setModalHeader(prop.name);
                        }}>{prop.name}</button>
                    );
                })
            }
            <CustomModal 
                show={modalShow}  
                onHide={() => setModalShow(false)} 
                checked={checkedList}
                selected={selected}
                header={ModalHeader}
            />
        </div>
    );
}

export default ModalBtn;