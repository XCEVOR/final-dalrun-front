import React from "react";

function AdminMember() {
  return (
    <div className="member container">
      <h4 className="title">회원관리</h4>
      <button>개인회원</button>
      <button>크루</button>
      <div className="member-content">
        <div className="search outline"></div>
        <div className="member-info outline"></div>
      </div>
    </div>
  );
}

export default AdminMember;
