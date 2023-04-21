import { useState } from "react";
import AdminSearch from "../../../../../../components/dalrun-asj/AdminSerach";

function AdminQna() {
  const [dataList, setDataList] = useState([]);

  return (
    <div>
      <div className="info outline">
        QnA
        <AdminSearch setData={setDataList} />
      </div>
    </div>
  );
}

export default AdminQna;
