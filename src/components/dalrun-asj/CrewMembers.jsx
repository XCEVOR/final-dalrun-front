import { Modal, Table } from "react-bootstrap";

function CrewMembersModal(props) {
    const crewMemList = props.mem;

    return(
      <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.crewname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{marginBottom:"10px"}}>
            <span style={{paddingRight:"15px"}}>최대인원수 : {props.max}</span> 
            <span>현재인원수 : {props.cnt}</span>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>아이디</th>
                <th>가입일</th>
                <th>수정일</th>
                <th>크루권한</th>
                <th>탈퇴여부</th>
              </tr>
            </thead>
            <tbody>
              {
                crewMemList.length !== 0 ?
                crewMemList.map((cmem, i)=>{
                    return(
                    <tr key={i}>
                        <td>{cmem.memId}</td>
                        <td>{cmem.crewRegDate}</td>
                        <td>{cmem.crewMemUpdate}</td>
                        <td>{cmem.crewAuth}</td>
                        <td>{cmem.crewDel === 1?"탈퇴":""}</td>
                    </tr>
                    )
                })
                : <tr style={{textAlign:"center"}}><td colSpan="11">크루멤버가 없습니다</td></tr>
              }
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    );
}

export default CrewMembersModal;