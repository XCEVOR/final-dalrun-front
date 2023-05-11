import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminPagination from '../../dalrun-asj/AdminPagination';
import { useNavigate, useSearchParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';


const DiaryList = () => {
  const [diaryItems, setDiaryItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCnt, setTotalCnt] = useState(0);  
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();


  useEffect(() => {
    // 페이지가 마운트될 때 검색 URL을 초기화
    if (searchParams.get("search") !== null) {// 검색 값이 있을 때만
      navigate('/diary', { replace: true });
    }
  }, []);

  useEffect(() => {
    const searchUrl = searchParams.get("search");
    setSearch(searchUrl || '');
    fetchDiaryItems(page - 1);
  }, [searchParams, page]);

  const fetchDiaryItems = async (pageNumber) => {
    try {
      const search = searchParams.get("search") || '';
      const response = await axios.get('http://localhost:3000/diaryList', {
        params: {
          Search: search,
          pageNumber: pageNumber,
        },
      });
      setDiaryItems(response.data.list);
      setTotalCnt(response.data.cnt);
    } catch (error) {
      console.error('다이어리 리스트를 가져오지 못했습니다.', error);
    }
  };

  const handleSearchChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);

    // 기존 검색창(url)이 빈 문자일 때
    if (newSearch.trim() === '') {
      searchParams.delete('search');
      fetchDiaryItems(page - 1);
    } else{ // 그 외(검색입력 시)
      searchParams.set("search", newSearch);
    }
    setSearchParams(new URLSearchParams(searchParams.toString())); // 검색 초기화
    setPage(1); // 검색어가 변경될 때 페이지를 1로 초기화

    // 입력된 걸 다 지웠을 때
    if (newSearch.trim() !== '') {
      fetchDiaryItems(page - 1); // 입력창 이벤트 시 리스트 렌더링
    }
  };

  const handlePagination = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <div className="diary-list-container">
      <div className="diary-list-header">
        <h5 style={{position:'relative', top:'-1rem'}}>다이어리 목록</h5>
        <div className="diary-list-search">
          <input type="text" placeholder="제목,아이디,작성일 검색" value={search} onChange={handleSearchChange}/>
          <button className='diary-list-searchBtn' onClick={() => fetchDiaryItems(page - 1)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#51e3d4",}} />
          </button>
        </div>
      </div>
      <div className="diary-list-item first-place">
        <div style={{marginTop:'1.3rem'}}>
          <FontAwesomeIcon icon={faCrown} title='1등' bounce size="2xl" style={{color: "#f5dc3d",}}/>
        </div>
      </div>
      <div className="diary-list-items">
      {diaryItems.length > 0 ? (
        diaryItems.map((item, index) => (
          <div key={index} className="diary-list-item">
            <div className="diary-list-item-title">{item.title}</div>
            <div className="diary-list-item-info">
              <p className="diary-list-item-date">{item.wdate}</p>
              <p className="diary-list-item-distance">{item.totalDist}</p>
              <p className="diary-list-item-time">{item.totalTime}</p>
              <p className="diary-list-item-time">{item.memId}</p>
              <button>상세 보기</button>
            </div>
          </div>
        ))
      ) 
      : <p>데이터가 없습니다.</p>
      }
      </div>
      <div className='diary-list-pagination'>
        <AdminPagination page={page} totalCnt={totalCnt} handlePagination={handlePagination}/>
      </div>
    </div>
  );

}
export default DiaryList;