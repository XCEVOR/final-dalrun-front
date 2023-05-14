import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const CourseList = () => {

  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="diary-list-container">
    <div className="diary-list-header">
      <h5 style={{position:'relative', top:'-1rem'}}>코스 추천 페이지</h5>
      <div className="diary-list-search">
        {/* <input type="text" placeholder="제목,아이디,작성일 검색" value={search} />
        <button className='diary-list-searchBtn'>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#51e3d4",}} />
        </button> */}
      </div>
    </div>
    <div className="diary-list-item first-place">
    </div>
    <div className="diary-list-items">
    </div>
  </div>
);
}
export default CourseList;