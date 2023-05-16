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

  const TotalTime = ({totalTime}) => {
    let h = 0;
    let m = Math.round(totalTime/60);
    let s = totalTime%60;

    if(m >= 60) {
      h =  Math.round(m/60);
      m %= 60;
    }

    const result = `${String(h).padStart(2,0)}:${String(m).padStart(2,0)}:${String(s).padStart(2,0)}`;

    return <td>{result}</td>;
  } 

  return (
    <div className="bbs">
      <div className="bbs-content">
        <BasicSearch {...optionVal} />
        <div className="info">
          <ModalBtn {...category} />
          <div className="info_con">
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
                  <th>번호</th>
                  <th>작성자</th>
                  <th>제목</th>
                  <th>내용</th>
                  <th>총거리(km)</th>
                  <th>총시간</th>
                  <th>칼로리</th>
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
                        <td className="text_overflow">{d.content}</td>
                        <td>{Math.round(d.totalDist/1000*100)/100}</td>
                        <TotalTime totalTime={d.totalTime} />
                        <td>{d.kcal}</td>
                        <td>{d.wdate}</td>
                      </tr>
                    );
                  }) 
                  : <tr style={{textAlign:"center"}}><td colSpan="9">데이터가 없습니다</td></tr>
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
