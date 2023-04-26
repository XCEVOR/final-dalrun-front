import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModalPortal from "../Portal";
import Modal from "../ModalFrame";
import '../../../assets/dalrun-jw/scss/_modal.scss'

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
      <Dropdown.Toggle id="dropdown" style={{ width: '100%', backgroundColor: 'transparent', border: 'none' }}>
        <img src='https://github.com/mdo.png' alt='mdo' width='24' height='24' className='rounded-circle' />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">마이페이지</Dropdown.Item>
        <Dropdown.Item href="#/action-2">로그아웃</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  );
} // <MYDropdown/>

function UploadModal() {

    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState(null);

    const handleModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };

    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
    const handleContentChange = (e) => {
      setContent(e.target.value);
    };
    const handleFileChange = (e) =>{
      setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // 입력된 정보와 파일을 서버로 보내는 작업을 구현합니다.
      // 이후 모달을 닫는 등의 추가 작업을 수행합니다.
      closeModal();
    };

    return (
      <React.Fragment>
        <button onClick={handleModal} style={{ backgroundColor: "#343a40", border: 0 }}>
          <img src="assets/img/dalrun-jw/file-earmark-arrow-up-fill.svg" />
          <span>업로드</span>
        </button>
        <ModalPortal>
          {modalOpen && (
            <Modal open={modalOpen} close={closeModal} header="다이어리 업로드">
              <form onSubmit={handleSubmit}>
                <label>
                  제목:
                  <input type="text" value={title} onChange={handleTitleChange} autoFocus/>
                </label>
                <label>
                  내용:
                  <textarea value={content} onChange={handleContentChange} />
                </label>
                <label>
                  파일 업로드:<input type="file" onChange={handleFileChange} />
                </label>
                <button type="submit">업로드</button>
              </form>
            </Modal>
          )}
        </ModalPortal>
      </React.Fragment>
    );
} // <UpploadModal/>