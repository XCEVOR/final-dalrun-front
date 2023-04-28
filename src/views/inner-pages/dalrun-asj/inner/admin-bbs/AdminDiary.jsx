import { useState } from "react";
import AdminSearch from "../../../../../components/dalrun-asj/AdminSerach";
import BasicSearch from "../../../../../components/dalrun-asj/BasicSearch";
import { Table } from "react-bootstrap";
import useCheckControl from "../../../../../components/dalrun-asj/useCheckControl";
import ModalBtn from "../../../../../components/dalrun-asj/ModalBtn";

function AdminDiary() {
  const [dataList, setDataList] = useState([]);
  const { handleAllCheck, handleSingleCheck, checkedList } = useCheckControl({dataList});

  const optionVal = [
    {value : "memId", name : "작성자"},
    {value : "title", name : "제목"},
    {value : "content", name : "내용"}
  ]
  
  const category = [
    {cate:"update", name:"다이어리 수정", selected:"다이어리수정 페이지", list:checkedList}, 
    {cate:"delete", name:"다이어리 삭제", selected:"이 다이어리를 삭제하겠습니까?", list:checkedList}
  ];

  return (
    <div className="bbs">
      <div className="bbs-content">
        <BasicSearch {...optionVal} />
        <div className="info">
        <ModalBtn {...category} />
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
                  <th>작성자</th>
                  <th>제목</th>
                  <th>소속</th>
                  <th>등록일</th>
                </tr>
              </thead>
              <tbody>
               {
                  dataList.length !== 0 ?
                  dataList.map((d, i) => {
                    return(
                      <tr key={i}>
                        <th>
                          <input 
                            type="checkbox" 
                            onChange={(e) => handleSingleCheck(e.target.checked, d.diarySeq)} 
                            checked={checkedList.includes(d.diarySeq) ? true : false}
                            />
                        </th>
                        <td>{d.diarySeq}</td>
                        <td>{d.memId}</td>
                        <td>{d.title}</td>
                        <td>{d.crewSeq}</td>
                        <td>{d.wdate}</td>
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
    </div>
  );
}

export default AdminDiary;
