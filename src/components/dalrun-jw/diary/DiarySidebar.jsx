import React, { useState, useMemo } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModalPortal from "../Portal";
import ModalFrame from "../ModalFrame";
import '../../../assets/dalrun-jw/scss/_modal.scss'
import MyDropzone from '../MyDropzone';
import axios from 'axios';

const DiarySidebar = () => {
  return (

    <header className='diary-navbar-container'>

      <Link to="/" title="Home" className='logo-Link'>
        <img src="logo.svg" className='logo'/>
      </Link>
      <nav className='head-nav'>
        <ul>
          <li className='nav-item'>
            <Link to="/" title='내 기록'>
              <img src="assets/img/dalrun-jw/person-circle.svg"/>
              <span>내 기록</span>
            </Link>
          </li>
          <li className='nav-item'>
            <UploadModal/>
          </li>
          <li className='nav-item'>
            <Link to="/">
              <img src="assets/img/dalrun-jw/question-circle-fill.svg"/>
              <span>업로드</span>
              <span style={{marginTop:'0', marginRight:'0.2rem'}}>방법</span>
            </Link>
          </li>
        </ul>
        <div className='dropup-container'>
          <MyDropdown/>
        </div>
      </nav>
    </header>

  );
}
export default DiarySidebar

// 프로필 드롭업
function MyDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (

    <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
      <Dropdown.Toggle id="dropdown" style={{ width: '100%', backgroundColor: 'transparent', border: 'none', marginLeft: 'auto' }}>
        <img src='https://github.com/mdo.png' alt='mdo' width='24' height='24' className='rounded-circle' />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">마이페이지</Dropdown.Item>
        <Dropdown.Item href="#/action-2">로그아웃</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  );
} // <MYDropdown/>

// 다이어리 작성
function UploadModal() {

  const loginData = JSON.parse(localStorage.getItem("login"));
  const memId = loginData.memId;

  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);
  const [diary, setDiary] = useState({
    title: '',
    content: '',
    file: null,
  });

  const handleModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    setDiary({
      ...diary,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileChange = (e) => {
    setDiary({
      ...diary,
      file: e.target.files[0],
    });
    console.log(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

  const formData = new FormData();
  formData.append('title', diary.title);
  formData.append('content', diary.content);
  formData.append('memId', memId);
  formData.append('gpxFile', diary.file);

  axios
  .post('http://localhost:3000/gpxUpload', formData)
  .then((resp) => { // success
      console.log(resp.data);
      const gpxDataList = resp.data;
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
              <form onSubmit={handleSubmit}>
                <section className="uploadBox" style={{width:'500px', height:'500px', border:'1px solid black'}}>
                  <MyDropzone/>
                </section>
                <label>
                  <input type="file" name="gpxFile" onChange={handleFileChange} />
                </label>
                <label>
                  제목:
                  <input type="text" name="title" value={diary.title} onChange={handleInputChange} autoFocus/>
                </label>
                <label>
                  내용:
                  <textarea name="content" value={diary.content} onChange={handleInputChange} />
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