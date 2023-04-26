import { useState } from "react";
import BasicSearch from "../../../../../components/dalrun-asj/BasicSearch";
import AdminSearch from "../../../../../components/dalrun-asj/AdminSerach";
import ModalBtn from "../../../../../components/dalrun-asj/ModalBtn";
import { Table } from "react-bootstrap";
import useCheckControl from "../../../../../components/dalrun-asj/useCheckControl";

function AdminCompetition() {
  const [dataList, setDataList] = useState([]);
  const { handleAllCheck, handleSingleCheck, checkedList } = useCheckControl({dataList});

  const optionVal = [
    {value : "seq", name : "대회번호"},
    {value : "name", name : "대회명"},
    {value : "location", name : "대회지역"},
    {value : "content", name : "대회내용"},
  ]

  const category = [
    {cate:"insert", name:"대회등록", selected:"대회등록 페이지", list:checkedList}, 
    {cate:"update", name:"대회수정", selected:"대회수정 페이지", list:checkedList}, 
    {cate:"delete", name:"대회삭제", selected:"이 대회를 삭제하겠습니까?", list:checkedList}
  ];

  return (
    <div className="bbs">
      <div className="bbs-content">
        <BasicSearch {...optionVal} />
        <div className="info">
          <ModalBtn {...category} />
          <div  className="info_con">
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
                  <th>대회번호</th>
                  <th>제목</th>
                  <th>지역</th>
                  <th>참가비</th>
                  <th>개최일</th>
                  <th>링크</th>
                </tr>
              </thead>
              <tbody>
                {
                   dataList.length !== 0 ?
                  dataList.map((comp, i) => {
                    return (
                    <tr key={i}>
                      <th>
                        <input 
                          type="checkbox" 
                          onChange={(e) => handleSingleCheck(e.target.checked, comp.compSeq)} 
                          checked={checkedList.includes(comp.compSeq) ? true : false}
                          />
                      </th>
                      <td>{comp.compSeq}</td>
                      <td>{comp.compdetailTitle}</td>
                      <td>{comp.compdetailLocation}</td>
                      <td>{comp.compdetailPrice}</td>
                      <td>{comp.compdetailDate}</td>
                      <td>{comp.compdetailLink}</td>
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

export default AdminCompetition;
