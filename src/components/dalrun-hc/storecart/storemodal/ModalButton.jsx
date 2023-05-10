import React, { useState } from "react";
import ModalContainer from "./ModalContainer";

const ModalButton = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [pictureLocation1, setPictureLocation1] = useState("");

  const handleClick = () => {
    setPictureLocation1(props.pictureLocation)
    setShowModal(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Show Modal</button>
      {showModal && <ModalContainer pictureLocation2={pictureLocation1} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default ModalButton;