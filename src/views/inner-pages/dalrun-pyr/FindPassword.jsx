import React, { useState } from "react";

function FindPassword() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if email and name are valid
    if (!email || !name) {
      setError("이메일과 이름을 모두 입력해주세요.");
      return;
    }

    // Send request to server to issue temporary password
    // Replace the following code with your own server request
    fetch("YOUR_SERVER_ENDPOINT", {
      method: "POST",
      body: JSON.stringify({ email, name }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        // Display success message to user
        alert(`임시 비밀번호가 ${data.temporaryPassword} 로 발급되었습니다.`);
      })
      .catch((error) => {
        // Display error message to user
        setError("임시 비밀번호 발급에 실패했습니다. 다시 시도해주세요.");
      });
  };

  return (
    <div className="container">
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          {/* Modal content */}
          <div className="modal-content">
            <div className="modal-header" style={{ padding: "35px 50px" }}>
              <h4>
                <span className="glyphicon glyphicon-lock"></span> 비밀번호 찾기
              </h4>
            </div>
            <div className="modal-body" style={{ padding: "40px 50px" }}>
              <div style={{ color: "#ac2925" }}>
                <center>
                  입력된 정보로 임시 비밀번호가 전송됩니다.
                </center>
              </div>
              <hr />
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="userEmail">
                    <span className="glyphicon glyphicon-user"></span> 이메일
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userEmail"
                    placeholder="가입시 등록한 이메일을 입력하세요."
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userName">
                    <span className="glyphicon glyphicon-eye-open"></span>{" "}
                    이름
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    placeholder="가입시 등록한 이름을 입력하세요."
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-success btn-block"
                  id="checkEmail"
                >
                  확인
                </button>
              </form>
              <hr />
              <div className="text-center small mt-2" id="checkMsg" style={{color: 'red'}}></div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-danger btn-default pull-left" data-dismiss="modal"><span
                className="glyphicon glyphicon-remove"></span> Cancel
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FindPassword;