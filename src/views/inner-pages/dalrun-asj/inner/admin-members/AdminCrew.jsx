import { useState } from "react";
import AdminSearch from "../../../../../components/dalrun-asj/AdminSerach";
import BasicSearch from "../../../../../components/dalrun-asj/BasicSearch";

function AdminCrew() {
  const [dataList, setDataList] = useState([]);

  const optionVal = [
    {value : "crewName", name : "크루명"},
    {value : "memId", name : "리더"}
  ]

  return (
    <div className="member">
      <div className="member-content">
        <BasicSearch {...optionVal} />
        <AdminSearch setData={setDataList} />
        <div className="info outline">크루</div>
      </div>
    </div>
  );
}

export default AdminCrew;
