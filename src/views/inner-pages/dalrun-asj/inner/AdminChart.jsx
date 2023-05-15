import CrewRankChart from "../../../../components/dalrun-asj/chart/CrewRankChart";
import CrewRankTable from "../../../../components/dalrun-asj/chart/CrewRankTable";
import { useState } from "react";
import MonthlyRank from "../../../../components/dalrun-asj/chart/MonthlyRank";
import MemRankTable from "../../../../components/dalrun-asj/chart/MemRankTable";
import MemRankChart from "../../../../components/dalrun-asj/chart/MemRankChart";

function AdminChart() {
  const [memRank, setMemRank] = useState();
  const [crewRank, setCrewRank] = useState();

  return (
    <div className="chart admin-container">
      <h4 className="title">차트</h4>
      <div className="chart-content">
        <MonthlyRank setMemRank={setMemRank} setCrewRank={setCrewRank} />
        <div className="info">
          <span className="subtitle">개인 달리기 순위</span>
          <MemRankTable dataList={memRank} />
          <MemRankChart dataList={memRank} />
        </div>
        <div className="info">
          <span className="subtitle">크루 순위</span>
          <CrewRankTable dataList={crewRank} />
          <CrewRankChart dataList={crewRank} />
        </div>
      </div>
    </div>
  );
}

export default AdminChart;
