import BasicSearch from "../../../../../components/dalrun-asj/BasicSearch";

function AdminCrew() {
  const optionVal = [
    {value : "crewName", name : "크루명"},
    {value : "memId", name : "리더"}
  ]

  return (
    <div className="member">
      <div className="member-content">
        <BasicSearch {...optionVal} />
        <div className="info outline">크루</div>
      </div>
    </div>
  );
}

export default AdminCrew;
