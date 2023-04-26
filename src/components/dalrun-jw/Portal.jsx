import reactdom from 'react-dom';

const ModalPortal = ({ children }) => {
  const el = document.getElementById("root-modal");
  return reactdom.createPortal(children, el);
};

export default ModalPortal;