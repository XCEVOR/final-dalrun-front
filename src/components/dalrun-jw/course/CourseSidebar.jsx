import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import CourseUpload from './CourseUpload';
import '../../../assets/dalrun-jw/scss/_modal.scss'

const CourseSidebar = () => {
  const loginData = JSON.parse(localStorage.getItem("login"));
  let memId = null;
  if(loginData){
    memId = loginData.memId;
  }

  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = (e) => {
    if(loginData){
      setModalOpen(true);
    } else { 
      e.preventDefault();
      alert('로그인이 필요합니다.');
    }
  };
  const closeModal = () => setModalOpen(false);

  return (
    <header className='diary-navbar-container'>

    <Link to="/" title="Home" className='logo-Link'>
      <img src="logo.svg" className='logo'/>
    </Link>
    <nav className='head-nav'>
      <ul>
        <li className='nav-item'>
          <button onClick={handleModal}>
            <FontAwesomeIcon icon={faCloudArrowUp} size="xl" style={{color:"#74EABC"}}/>
            <span>업로드</span>
          </button>
          <CourseUpload open={modalOpen} close={closeModal}/>
        </li>
        <li className='nav-item'>
          <Link to='/diary'>
            <img src='/assets/img/dalrun-jw/diary.png' style={{marginBottom:'0.3rem', marginLeft:'0.5rem'}}/>
            <span>다이어리</span>
          </Link>
        </li>
      </ul>
      <div className='dropup-container'>
        <MyDropdown/>
      </div>
    </nav>
  </header>
  )

}
export default CourseSidebar;


// 프로필 드롭업
function MyDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const loginData = JSON.parse(localStorage.getItem("login"));
  const profileImg = loginData.profile;
  // console.log(profileImg);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = ( () => {
    sessionStorage.removeItem("login");
  });

  return (

    <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
      <Dropdown.Toggle id="dropdown" style={{ width: '100%', backgroundColor: 'transparent', border: 'none', marginLeft: 'auto' }}>
        <img src={`http://localhost:3000/final-dalrun/src/main/webapp/dalrun-yr/profiles/${profileImg}`} alt='mdo' width='24' height='24' className='rounded-circle' />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">마이페이지</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  );
} // <MYDropdown/>