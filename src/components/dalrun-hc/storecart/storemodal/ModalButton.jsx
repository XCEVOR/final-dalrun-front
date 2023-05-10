import React, { useState } from "react";
import ModalContainer from "./ModalContainer";

const ModalButton = ({ modal_productid, modal_quantity }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Show Modal</button>
      {showModal && <ModalContainer modal_productid={modal_productid} modal_quantity={modal_quantity} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default ModalButton;