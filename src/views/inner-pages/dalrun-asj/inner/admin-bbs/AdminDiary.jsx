import { useState } from "react";
import AdminSearch from "../../../../../components/dalrun-asj/AdminSerach";
import BasicSearch from "../../../../../components/dalrun-asj/BasicSearch";

function AdminDiary() {
  const [dataList, setDataList] = useState([]);

  const optionVal = [
    {value : "memId", name : "작성자"},
    {value : "title", name : "제목"},
    {value : "content", name : "내용"},
    {value : "crew", name : "소속"}
  ]
  
  return (
    <div className="bbs">
      <div className="bbs-content">
        <BasicSearch {...optionVal} />
        <AdminSearch setData={setDataList} />
        <div className="info outline">다이어리</div>
      </div>
    </div>
  );
}

export default AdminDiary;
