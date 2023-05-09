import TaskList from "../../../../components/dalrun-asj/dashboard/TaskList";
import WeekSummary from "../../../../components/dalrun-asj/dashboard/WeekSummary";

function AdminDashboard() {
  return (
    <div className="dashboard admin-container">
      <span className="title">대시보드</span>
      <div className="dashboard-content">
        <div className="todolist">
          <span className="subtitle">오늘 할 일</span>
          <TaskList />
        </div>
        <div className="summary">
          <div className="visiter">
            <span className="subtitle">방문자 현황</span>
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
