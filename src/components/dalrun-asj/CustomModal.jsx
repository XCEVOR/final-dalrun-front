import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CustomModal(props) {
  const separator = ', ';

  const del = () => {
    axios.post(`http://localhost:3000/admin_${props.cate}`, )
         .then()
         .catch();
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         {props.header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>[ {props.checked.join(separator)} ]</div>
        <p>{props.selected}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>취소</Button>
        <Button variant="primary" onClick={props.onHide}>확인</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;