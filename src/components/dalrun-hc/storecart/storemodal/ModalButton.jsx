import React, { useState } from "react";
import ModalContainer from "./ModalContainer";

const ModalButton = ({ modal_cartid, modal_productid, modal_productcode, modal_productcolor, modal_productsize, modal_quantity }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <button className="store_cart_edit_btn" onClick={handleClick}>변경</button>
      {showModal && <ModalContainer 
                      modal_cartid={modal_cartid}
                      modal_productid={modal_productid} 
                      modal_productcode={modal_productcode}
                      modal_productcolor={modal_productcolor}
                      modal_productsize={modal_productsize}
                      modal_quantity={modal_quantity}
                      onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default ModalButton;