import { useState } from "react";
import AdminSearch from "../../../../../../components/dalrun-asj/AdminSerach";

function AdminProductinquiry() {
  const [dataList, setDataList] = useState([]);

  return (
    <div>
      <div className="info outline">
        상품문의
        <AdminSearch setData={setDataList} />
      </div>
    </div>
  );
}

export default AdminProductinquiry;
