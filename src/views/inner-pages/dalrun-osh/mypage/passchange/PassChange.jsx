function PassChange() {

    return(
      <div className="inform container">
        <h4 className="title">회원정보</h4>
        <br />
        <div className="inform outline" />
        <div>
          <div className="search-content inpput">
            <label>아이디</label> <input type="text" value=" id " />
          </div>
          <div>
            <label>이메일</label> <input type="text" value=" mulcam@naver.com " />
          </div>
          <div>
            <label>전화번호</label> <input type="text" value=" 01023139112 " />
          </div>
          <div>
           <label>닉네임</label> <input type="text" value=" 화이팅 " />
          </div> 
          <div>
           <label>비밀번호</label> <button>변경</button>
          </div>
  
  
          <button>저장</button> <button>탈퇴</button>
        </div>
  
      </div>
  
      );
  }
  
  export default PassChange;