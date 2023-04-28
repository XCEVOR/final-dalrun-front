import { useState } from "react";
import AdminSearch from "../../../../../components/dalrun-asj/AdminSerach";
import BasicSearch from "../../../../../components/dalrun-asj/BasicSearch";
import { Table } from "react-bootstrap";
import useCheckControl from "../../../../../components/dalrun-asj/useCheckControl";
import ModalBtn from "../../../../../components/dalrun-asj/ModalBtn";

function AdminCrew() {
  const [dataList, setDataList] = useState([]);
  const { handleAllCheck, handleSingleCheck, checkedList } = useCheckControl({dataList});

  const optionVal = [
    {value : "crewName", name : "크루명"},
    {value : "memId", name : "리더"}
  ]

  const category = [
    {cate:"update", name:"크루수정", selected:"크루수정 페이지", list:checkedList}, 
    {cate:"delete", name:"크루삭제", selected:"이 크루를 삭제시키시겠습니까?", list:checkedList}
  ];

  return (
    <div className="member">
      <div className="member-content">
        <BasicSearch {...optionVal} />
        <div className="info">
          <div className="info_con">
            <ModalBtn {...category} />
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
                  <th>크루번호</th>
                  <th>크루명</th>
                  <th>리더</th>
                  <th>소개</th>
                  <th>레벨</th>
                  <th>포인트</th>
                  <th>색상</th>
                  <th>인원수</th>
                  <th>등록일</th>
                  <th>수정일</th>
                </tr>
              </thead>
              <tbody>
                {
                  dataList.length !== 0 ?
                  dataList.map((crew, i) => {
                    return (
                    <tr key={i}>
                      <th>
                        <input 
                          type="checkbox" 
                          onChange={(e) => handleSingleCheck(e.target.checked, crew.crewSeq)} 
                          checked={checkedList.includes(crew.crewSeq) ? true : false}
                          />
                      </th>
                      <td>{crew.crewSeq}</td>
                      <td>{crew.crewName}</td>
                      <td>{crew.memId}</td>
                      <td>{crew.crewSetUp}</td>
                      <td>{crew.crewLevel}</td>
                      <td>{crew.crewScore}</td>
                      <td>{crew.crewcolor}</td>
                      <td>{crew.crewMemberCnt}/{crew.maxMem}명</td>
                      <td>{crew.crewCreateDate}</td>
                      <td>{crew.crewUpdate}</td>
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

export default AdminCrew;
