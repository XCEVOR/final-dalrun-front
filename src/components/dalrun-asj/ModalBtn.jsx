import { useState } from "react";
import CustomModal from "./CustomModal";

function ModalBtn(props) {
    const [modalShow, setModalShow] = useState(false);
    const [selected, setSelected] = useState();
    const [ModalHeader, setModalHeader] = useState();

    return (
        <div>
            {
                Object.values(props).map((prop,i) => {
                    return (
                        <button key={i} onClick={() => {
                            setModalShow(true);
                            setSelected(prop.selected);
                            setModalHeader(prop.name);
                        }}>{prop.name}</button>
                    );
                })
            }
            <CustomModal 
                show={modalShow}  
                onHide={() => setModalShow(false)} 
                selected={selected}
                header={ModalHeader}
            />
        </div>
    );
}

export default ModalBtn;