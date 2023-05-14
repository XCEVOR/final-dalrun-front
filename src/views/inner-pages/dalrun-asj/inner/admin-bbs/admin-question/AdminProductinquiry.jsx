import { useState } from "react";
import AdminSearch from "../../../../../../components/dalrun-asj/AdminSerach";
import { Table } from "react-bootstrap";
import useCheckControl from "../../../../../../components/dalrun-asj/useCheckControl";
import ModalBtn from "../../../../../../components/dalrun-asj/ModalBtn";

function AdminProductinquiry() {
  const [dataList, setDataList] = useState([]);
  const { handleAllCheck, handleSingleCheck, checkedList } = useCheckControl({dataList});

  const category = [
    {cate:"update", name:"문의답변", list:checkedList}, 
    {cate:"delete", name:"문의삭제", list:checkedList}
  ];

  return (
    <div>
      <div className="info">
        <ModalBtn {...category} />
        <div  className="info_con">
          <Table responsive hover>
            <thead>
              <tr>
                <th>
                <input 
                  type="checkbox" 
                  onChange={(e) => handleAllCheck(e.target.checked)} 
                  checked={checkedList.length === dataList.length ? true : false}
                  />
                </th>
                <th>문의번호</th>
                <th>상품코드</th>
                <th>작성자</th>
                <th>이름</th>
                <th>제목</th>
                <th>문의내용</th>
                <th>답변상태</th>
                <th>답글수</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {
                dataList.length !== 0 ?
                dataList.map((inq, i) => {
                  return (
                  <tr key={i}>
                    <th>
                      <input 
                        type="checkbox" 
                        onChange={(e) => handleSingleCheck(e.target.checked, inq.inqSeq)} 
                        checked={checkedList.includes(inq.inqSeq) ? true : false}
                        />
                    </th>
                    <td>{inq.inqSeq}</td>
                    <td>{inq.productCode}</td>
                    <td>{inq.memId}</td>
                    <td>{inq.inqWriter}</td>
                    <td>{inq.inqTitle}</td>
                    <td>{inq.inqContent}</td>
                    <td>{inq.replyCnt > 1 ? "답변완료" : "답변대기"}</td>
                    <td>{inq.replyCnt-1}</td>
                    <td>{inq.inqDate}</td>
                  </tr>
                  );
                })
                : <tr style={{textAlign:"center"}}><td colSpan="10">데이터가 없습니다</td></tr>
              }
            </tbody>
          </Table>
          <AdminSearch setData={setDataList} />
        </div>
      </div>
    </div>
  );
}

export default AdminProductinquiry;
