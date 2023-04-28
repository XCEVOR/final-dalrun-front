import { useState } from "react";
import AdminSearch from "../../../../../components/dalrun-asj/AdminSerach";
import BasicSearch from "../../../../../components/dalrun-asj/BasicSearch";
import ModalBtn from "../../../../../components/dalrun-asj/ModalBtn";
import { Table } from "react-bootstrap";
import useCheckControl from "../../../../../components/dalrun-asj/useCheckControl";

function AdminShoereview() {
  const [dataList, setDataList] = useState([]);
  const { handleAllCheck, handleSingleCheck, checkedList } = useCheckControl({dataList});

  const optionVal = [
    {value : "memId", name : "작성자"},
    {value : "title", name : "제목"},
    {value : "content", name : "내용"}
  ]

  const category = [
    {cate:"insert", name:"리뷰등록", selected:"리뷰등록 페이지", list:checkedList}, 
    {cate:"update", name:"리뷰수정", selected:"리뷰수정 페이지", list:checkedList}, 
    {cate:"delete", name:"리뷰삭제", selected:"이 리뷰를 삭제하겠습니까?", list:checkedList}
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
                  <th>리뷰번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>등록일</th>
                </tr>
              </thead>
              <tbody>
                {
                   dataList.length !== 0 ?
                  dataList.map((shoe, i) => {
                    return (
                    <tr key={i}>
                      <th>
                        <input 
                          type="checkbox" 
                          onChange={(e) => handleSingleCheck(e.target.checked, shoe.shoereviewSeq)} 
                          checked={checkedList.includes(shoe.shoereviewSeq) ? true : false}
                          />
                      </th>
                      <td>{shoe.shoereviewSeq}</td>
                      <td>{shoe.shoereviewdetailTitle}</td>
                      <td>{shoe.memId}</td>
                      <td>{shoe.shoereviewdetailRegdate}</td>
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

export default AdminShoereview;
