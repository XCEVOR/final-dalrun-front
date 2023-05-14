import axios from "axios";
import { useRef, useState, useEffect  } from "react";
import { useSearchParams } from "react-router-dom";

function PassChange(onHide) {

  const [searchParam, setSearchParam] = useSearchParams();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("memId", id);
    formData.append("password", pwd);

    axios.post('http://localhost:3000/my_updatememberpass', formData)
        .then((resp) => {
            // console.log(resp.data);
            if(resp.data === "YES") {
                alert("수정완료");
                onHide();
                setSearchParam(searchParam.set('target',''));
            } else {
                alert("수정실패");
            }
        })
        .catch((err) => {
            console.log(err);
        });
}
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
  
          <input type="submit" value="수정" /> <button>취소</button>
        </div>
  
      </div>
  
      );
  }
  
  export default PassChange;