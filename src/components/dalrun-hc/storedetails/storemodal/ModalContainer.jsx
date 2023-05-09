import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  height: 100vh;
  overflow-y: hidden;
`;

const zoomIn = keyframes`
  0% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1.0);
  }
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  padding: 20px;
  max-width: 1200px;
  position: relative;
  animation: ${zoomIn} 0.2s ease-in-out;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
`;

const ModalContainer = ({ props, onClose }) => {
  const modalRef = useRef();

  // const [productPictureList, setProductPictureList] = useState([props.productPictureList]);


  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div>
      <ModalWrapper>
        <ModalContent ref={modalRef}>
          <CloseButton onClick={onClose}>×</CloseButton>
          <h2>Modal Title</h2>
          <p>Modal Content</p>
          <img src="http://localhost:3000/dalrun-hc/store/products/NBAL-FRFO/NBAL-FRFO-01.png" loading="lazy"/>
        </ModalContent>
      </ModalWrapper>
    </div>
  );
};

export default ModalContainer;
