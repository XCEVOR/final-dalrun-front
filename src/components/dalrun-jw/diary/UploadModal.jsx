import React, { useState } from 'react';
import ModalPortal from "../Portal";
import ModalFrame from "../ModalFrame";
import axios from 'axios';
import CustomEditor from '../CustomEditor';

function UploadModal() {

  // 서버에 회원 정보 같이 보내기
  const loginData = JSON.parse(localStorage.getItem("login"));
  const memId = loginData.memId;

  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);
  const [diary, setDiary] = useState({
    title: '',
    content: '',
    file: null,
  });

  // 모달 열기
  const handleModal = () => setModalOpen(true);
  // 모달 닫기
  const closeModal = () => setModalOpen(false);

  // 다이어리 입력
  const handleInputChange = (e) => {
    setDiary({
      ...diary,
      [e.target.name]: e.target.value,
    });
  };

  // 다이어리 파일 업로드
  const handleFileChange = (e) => {
    setDiary({
      ...diary,
      file: e.target.files[0],
    });
   // console.log(e.target.files[0]);
  };

  // 다이어리 제출
  const handleSubmit = (e) => {
    e.preventDefault();

  // 다이어리 데이터들
  const formData = new FormData();
  formData.append('title', diary.title);
  formData.append('content', diary.content);
  formData.append('memId', memId);
  formData.append('gpxFile', diary.file);
  
  // 서버로 전달
  axios
  .post('http://localhost:3000/gpxUpload', formData)
  .then((resp) => { // success
      console.log(resp.data);
      // gpxData 저장소
      const gpxDataList = resp.data;
      // addGPXData(gpxDataList);
      console.log('업로드 완료');
      closeModal(); // 모달 닫기
      window.location.reload();
      alert('업로드 완료');
  })
  .catch((error) => { // fail
    alert('업로드 실패');
    console.error(error);
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
    };

    return (
      <React.Fragment>
        <button onClick={handleModal} style={{ backgroundColor: "#343a40", border: 0 }}>
          <img src="assets/img/dalrun-jw/file-earmark-arrow-up-fill.svg" />
          <span>업로드</span>
        </button>
        <ModalPortal>
          {modalOpen && (
            <ModalFrame open={modalOpen} close={closeModal} header="다이어리 업로드">
              <form onSubmit={handleSubmit} style={{margin:0}}>
                <label>
                GPX파일
                  {/* <section className="uploadBox" style={{width:'500px', height:'500px', border:'1px solid black'}}>
                    <MyDropzone/>
                  </section> */}
                  <input type="file" name="gpxFile" accept='.gpx' onChange={handleFileChange} />
                </label>
                <label>
                  제목
                  <input type="text" name="title" value={diary.title} onChange={handleInputChange} autoFocus/>
                </label>
                <label>
                  내용
                  <CustomEditor handleEditorChange={handleInputChange} />
                </label>
                <footer>
                  <button type='submit' className="close">
                    업로드
                  </button>
                  &nbsp;&nbsp; 
                  <button className="close" onClick={closeModal}>
                    close
                  </button>
                </footer>
              </form>
            </ModalFrame>
          )}
        </ModalPortal>
      </React.Fragment>
    );
} // <UpploadModal/>
export default UploadModal;