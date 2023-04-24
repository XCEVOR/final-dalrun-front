import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);


  return (

    <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
      <Dropdown.Toggle id="dropdown" style={{ width: '100%', backgroundColor: 'transparent', border: 'none' }}sv>
        <img src='https://github.com/mdo.png' alt='mdo' width='24' height='24' className='rounded-circle' />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">마이페이지</Dropdown.Item>
        <Dropdown.Item href="#/action-2">로그아웃</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  );
}


function DiarySidebar() {
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
            <Link to="/">
              <img src="assets/img/dalrun-jw/file-earmark-arrow-up-fill.svg"/>
              <span>업로드</span>
            </Link>
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
          {/* <Link to="#"  className='d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
            <img src='https://github.com/mdo.png' alt='mdo' width='24' height='24' className='rounded-circle' />
          </Link>
          <ul className='dropdown-menu text-small shadow'>
            <li><Link to='#' className='dropdown-item'>마이페이지</Link></li>
            <li><Link to='#' className='dropdown-item'>로그아웃</Link></li>
          </ul> */}
      </nav>
    </header>

  );
}
export default DiarySidebar