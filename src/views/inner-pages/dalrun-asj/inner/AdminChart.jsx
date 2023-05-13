import axios from "axios";
import CrewRankChart from "../../../../components/dalrun-asj/chart/CrewRankChart";
import CrewRankTable from "../../../../components/dalrun-asj/chart/CrewRankTable";
import { useEffect, useState } from "react";
import CrewMonthlyRank from "../../../../components/dalrun-asj/chart/CrewMonthlyRank";

function AdminChart() {
  const [data, setData] = useState();

  return (
    <div className="chart admin-container">
      <h4 className="title">차트</h4>
      <div className="chart-content">
        <div className="info">
          개인달리기순위
        </div>
        <div className="info">
          크루순위
          <CrewMonthlyRank setData={setData} />
          <CrewRankTable dataList={data} />
          <CrewRankChart dataList={data} />
        </div>
      </div>
    </div>
  );
}

export default AdminChart;
