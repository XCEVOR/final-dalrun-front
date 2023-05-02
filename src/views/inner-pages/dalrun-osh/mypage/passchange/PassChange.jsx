function PassChange() {

    return(
      <div className="inform container">
        <h4 className="title">비밀번호 변경</h4>
        <br />
        <div className="inform outline" />
        <div>
          <div className="search-content inpput">
            <label>현재 비밀번호</label> <input type="password"  />
          </div>
          <div>
            <label>새 비밀번호</label> <input type="password" />
          </div>
          <div>
            <label>새 비밀번호 확인</label> <input type="password"  />
          </div>  
  
          <button>저장</button> <button>취소</button>
        </div>
  
      </div>
  
      );
  }
  
  export default PassChange;