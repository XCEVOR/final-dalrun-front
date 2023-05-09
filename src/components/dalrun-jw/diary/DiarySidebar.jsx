import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import UploadModal from './UploadModal';
import '../../../assets/dalrun-jw/scss/_modal.scss'


const DiarySidebar = () => {
  const loginData = JSON.parse(localStorage.getItem("login"));
  const memId = loginData.memId;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/diary?search=${memId}`);
  };

  return (

    <header className='diary-navbar-container'>

      <Link to="/" title="Home" className='logo-Link'>
        <img src="logo.svg" className='logo'/>
      </Link>
      <nav className='head-nav'>
        <ul>
          <li className='nav-item'>
            <button title='내 기록' onClick={() => handleClick()}>
              <img src="assets/img/dalrun-jw/person-circle.svg"/>
              <span>내 기록</span>
            </button>
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