import React, { useState, useEffect } from "react";
import axios from "axios";

function MemberInfo() {
  const [memId, setMemId] = useState("");
  const [member, setMember] = useState(null);

  useEffect(() => {
    // localStorage에서 memId 가져오기
    const loggedInUser = localStorage.getItem("memId");
    if (memId) {
      const user = JSON.parse(memId);
      setMemId(user.memId);
    }
  }, []);

  const getMemberInfo = async () => {
    const response = await axios.get(`/member/myinform?memId=${memId}`);
    setMember(response.data);
  };

  return (
    <div className="admin_update_container">
      <div className="my-admin_update">
        <h4>회원정보</h4>
        <br />
        <div className="inform outline" />
        <br />  
      <p>Logged In User: {memId}</p>
      <button onClick={getMemberInfo}>Get My Info</button>
      {member && (
        <div>
          <p>Name: {member.memName}</p>
          <p>Email: {member.memEmail}</p>
          <p>Phone: {member.memPhone}</p>
          <p>Address: {member.memAddress}</p>
        </div>
      )}
        </div>
    </div>
  );
}

export default MemberInfo;