import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const CourseSidebar = () => {

  return (
    <header className='diary-navbar-container'>

    <Link to="/" title="Home" className='logo-Link'>
      <img src="logo.svg" className='logo'/>
    </Link>
    <nav className='head-nav'>
      <ul>
        <li className='nav-item'>
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