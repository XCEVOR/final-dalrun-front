import React, { useState } from 'react';
import ModalPortal from "../Portal";
import ModalFrame from "../ModalFrame";
import axios from 'axios';
import DiaryEditor from './DiaryEditor';

function UploadModal({ open, close}) {

  // 서버에 회원 정보 같이 보내기
  const loginData = JSON.parse(localStorage.getItem("login"));
  let memId = null;
  let crewSeq = null;
  if(loginData != null){
    memId = loginData.memId;
    crewSeq = loginData.crewSeq;
  }

  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);
  const [diary, setDiary] = useState({
    title: '',
    content: '',
    file: null,
  });

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
  formData.append('crewSeq', crewSeq);
  
  // 서버로 전달
  axios
  .post('http://localhost:3000/gpxUpload', formData)
  .then((resp) => { // success
      console.log(resp.data);
      close(); // 모달 닫기
      window.location.reload();
      alert('업로드 완료. 10 포인트가 적립되었습니다.');
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
        <ModalPortal>
          {open && (
            <ModalFrame open={open} close={close} header="다이어리 업로드">
              <form onSubmit={handleSubmit} style={{margin:0}}>
                <label>
                GPX파일
                  <input type="file" name="gpxFile" accept='.gpx' onChange={handleFileChange} />
                </label>
                <label>
                  제목
                  <input type="text" name="title" value={diary.title} onChange={handleInputChange} autoFocus/>
                </label>
                <label>
                  내용
                  <DiaryEditor handleEditorChange={handleInputChange} />
                </label>
                <footer>
                  <button type='submit' className="close">
                    업로드
                  </button>
                  &nbsp;&nbsp; 
                  <button className="close" onClick={close}>
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