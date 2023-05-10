import React, { useState } from "react";
import ModalContainer from "./ModalContainer";

const ModalButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Show Modal</button>
      {showModal && <ModalContainer onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default ModalButton;