import BasicSearch from "../../../../../components/dalrun-asj/BasicSearch";

function AdminShoereview() {
  const optionVal = [
    {value : "memId", name : "작성자"},
    {value : "title", name : "제목"},
    {value : "content", name : "내용"}
  ]

  return (
    <div className="bbs">
      <div className="bbs-content">
        <BasicSearch {...optionVal} />  
        <div className="info outline">리뷰</div>
      </div>
    </div>
  );
}

export default AdminShoereview;
