import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MemberUpdate from './update/MemberUpdate';
import { Route, Routes, useParams, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function CustomModal(props) {
  const separator = ', ';
  const {cate, sub} = useParams();
  const [data, setData] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  const getTarget = () => {
    if(props.checked.length !== 0) {
      axios.post(`http://localhost:3000/get${cate}`, null, { params:{ "target":props.checked[0] } })
          .then((resp) => {
              setData(resp.data);
              console.log("getMember");
          })
          .catch((err) => {
              console.log(err);
          })
    }
}

  const ModalBody = () => {
    if(cate === "member" && props.category === "update") return <MemberUpdate data={data} />;
  }

  useEffect(()=>{
    getTarget();
  }, [props.checked[0]]);

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
        {/* {props.selected} */}
        <ModalBody />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>취소</Button>
        <Button variant="primary" onClick={props.onHide}>확인</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;