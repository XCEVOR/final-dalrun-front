import React, { useState } from "react";
import { Table } from "react-bootstrap";
import IU from "../IU.jpg"

function MyCrew(){
  const [dataList, setDataList] = useState([]);

    const [imgFile, setImgFile] = useState(null);
  
    const handleImageChange = (event) => {
      const selectedFile = event.target.files[0];
      setImgFile(selectedFile);
    };
  
    const handleImageUploadClick = () => {
      const inputElement = document.getElementById("imageInput");
      inputElement.click();
    };

  return (
  <div className="members container">
    <h4 className="title">내 크루</h4>
    <br />
    <div className="inform outline" />
    <br />

    <div style={{ display: "flex" }}>
      <img src={IU} alt="아이유" style={{ margin: "20px" }} />
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ margin: "20px", minWidth: "80px" }}>크루명</p>
          <input type="text" value=" 발자국 " />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ margin: "20px", minWidth: "80px" }}>리더</p>
          <input type="text" value=" 킹선정 " />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ margin: "20px", minWidth: "80px" }}>인원</p>
          <input type="text" value=" 46 / 50 " />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ margin: "20px", minWidth: "80px" }}>인삿말</p>
          <textarea value=" 안녕하세요. 선두크루 발자국입니다. " style={{ minWidth: "200px" }} />
        </div>
      </div>
    </div>
    <div>
      <input
        type="file"
        id="imageInput"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <button onClick={handleImageUploadClick}>이미지 선택</button>
    </div>    

      <div className="info_con">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>이름</th>
                  <th>아이디</th>
                  <th>직책</th>
                  <th>등급</th>
                  <th>상태</th>
                  <th>포인트</th>
                  <th>가입일</th>
                </tr>
              </thead>
              <tbody>
                {
                  dataList.map((crew, i) => {
                    return (
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{crew.memberName}</td>
                      <td>{crew.memId}</td>
                      <td>{crew.grade}</td>
                      <td>{crew.rating}</td>
                      <td>{crew.state}</td>
                      <td>{crew.point}</td>
                      <td>{crew.regdate}</td>
                    </tr>
                    );
                  })
                }
              </tbody>
            </Table>
          </div>      

  </div>
  )
}

export default MyCrew;