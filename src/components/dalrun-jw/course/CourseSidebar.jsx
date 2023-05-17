import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faCircleUser  } from '@fortawesome/free-solid-svg-icons';
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
      <div id='logoBox' style={{height:'5rem'}}>
      <Link to="/" title="Home" className='logo-Link'>
        <img src="dalrun_logo.png" className='logo'/>
      </Link>
      </div>
    <nav className='head-nav'>
      <ul>
        {memId === "admin" && (
          <li className='nav-item'>
            <button onClick={handleModal}>
              <FontAwesomeIcon icon={faCloudArrowUp} size="xl" style={{color:"#74EABC"}}/>
              <span>업로드</span>
            </button>
            <CourseUpload open={modalOpen} close={closeModal}/>
          </li>
        )}
          <li className='nav-item'>
            <Link to='/diary'>
              <img src='/assets/img/dalrun-jw/diary.png' style={{marginBottom:'0.3rem', marginLeft:'0.5rem'}}/>
              <span>다이어리</span>
            </Link>
          </li>
          <li className='nav-item'>
            <button>
            </button>
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
  let profileImg = null;
  let isLogin = false;
  
  if(loginData){
    profileImg = loginData.profile;
    isLogin = true;
  }
  // console.log(profileImg);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = ( () => {
    localStorage.removeItem("login");
    alert('로그아웃 되었습니다.');
  });

  const renderProfileImg = () => {
    if (profileImg) {
      return (
        <img
          src={`http://localhost:3000/dalrun-yr/profiles/${profileImg}`}
          alt='mdo'
          width='30'
          height='30'
          className='rounded-circle'
        />
      );
    } else {
      return (
        <FontAwesomeIcon icon={faCircleUser} size="xl" />
      );
    }
  };

  return (

    <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
      <Dropdown.Toggle id="dropdown" style={{ width: '100%', backgroundColor: 'transparent', border: 'none', marginLeft: 'auto' }}>
        {renderProfileImg()}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {isLogin ? (
          <>
            <Dropdown.Item href="#/action-1">마이페이지</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
          </>
        ) : (
          <Dropdown.Item href="/login">로그인</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>

  );
} // <MYDropdown/>