import { Modal, Table } from "react-bootstrap";

function OrderDetailsModal(props) {
  const orderdetail = props.orderdetail;

  return(
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          주문번호 : {props.ordernumber}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{marginBottom:"10px"}}>
          <span style={{paddingRight:"15px"}}>총주문수량 : {props.quantity}</span> 
          <span>총금액 : {props.totalPrice}</span>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>상품아이디</th>
              <th>상품명</th>
              <th>옵션1</th>
              <th>옵션2</th>
              <th>수량</th>
              <th>금액</th>
            </tr>
          </thead>
          <tbody>
            {
              orderdetail.length !== 0 ?
              orderdetail.map((detail, i)=>{
                  return(
                  <tr key={i}>
                      <td>{detail.productId}</td>
                      <td>{detail.productName}</td>
                      <td>{detail.option1}</td>
                      <td>{detail.option2}</td>
                      <td>{detail.productQuantity}</td>
                      <td>{detail.productPrice}</td>
                  </tr>
                  )
              })
              : <tr style={{textAlign:"center"}}><td colSpan="11">주문목록이 없습니다</td></tr>
            }
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
}

export default OrderDetailsModal;