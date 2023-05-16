import TaskList from "../../../../components/dalrun-asj/dashboard/TaskList";
import WeekSummary from "../../../../components/dalrun-asj/dashboard/WeekSummary";
import DailyVisitorsCnt from "../../../../components/dalrun-asj/dashboard/DailyVisitorsCnt";

function AdminDashboard() {
  return (
    <div className="dashboard admin-container">
      <h4 className="title">대시보드</h4>
      <div className="dashboard-content">
        <div className="todolist">
          <span className="subtitle">오늘 할 일</span>
          <TaskList />
        </div>
        <div className="summary">
          <div className="visiter">
            <span className="subtitle">방문자 현황</span>
            <DailyVisitorsCnt />
          </div>
          <div className="week">
            <span className="subtitle">일자별 요약</span>
            <WeekSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
