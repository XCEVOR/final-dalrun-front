import { useState } from "react";
import AdminSearch from "../../../../../../components/dalrun-asj/AdminSerach";
import { Table } from "react-bootstrap";
import useCheckControl from "../../../../../../components/dalrun-asj/useCheckControl";

function AdminQna() {
  const [dataList, setDataList] = useState([]);
  const { handleAllCheck, handleSingleCheck, checkedList } = useCheckControl({dataList});

  return (
    <div>
      <div className="info">
        <div className="info_con">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <input 
                    type="checkbox" 
                    onChange={(e) => handleAllCheck(e.target.checked)} 
                    checked={checkedList.length === dataList.length ? true : false}
                    />
                </th>
                <th>번호</th>
                <th>카테고리</th>
                <th>제목</th>
                <th>작성자</th>
                <th>조회수</th>
                <th>작성일</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {
                dataList.length !== 0 ?
                dataList.map((q, i) => {
                  return(
                    <tr key={i}>
                      <th>
                        <input 
                          type="checkbox" 
                          onChange={(e) => handleSingleCheck(e.target.checked, q.qnaSeq)} 
                          checked={checkedList.includes(q.qnaSeq) ? true : false}
                          />
                      </th>
                      <td>{q.qnaSeq}</td>
                      <td>{q.category}</td>
                      <td>{q.qnaTitle}</td>
                      <td>{q.memId}</td>
                      <td>{q.readCount}</td>
                      <td>{q.wdate}</td>
                      <td>{q.del}</td>
                    </tr>
                  );
                }) 
                : <tr style={{textAlign:"center"}}><td colSpan="11">데이터가 없습니다</td></tr>
              }
            </tbody>
          </Table>
          <AdminSearch setData={setDataList} />
        </div>
      </div>
    </div>
  );
}

export default AdminQna;
