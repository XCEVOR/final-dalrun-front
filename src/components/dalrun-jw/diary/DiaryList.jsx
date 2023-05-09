import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminPagination from '../../dalrun-asj/AdminPagination';


const DiaryList = () => {
  const [diaryItems, setDiaryItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCnt, setTotalCnt] = useState(0);  
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchDiaryItems(page - 1);
  }, [search, page]);

  const fetchDiaryItems = async (pageNumber) => {
    try {
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
    setSearch(e.target.value);
    setPage(1); // 검색어가 변경될 때 페이지를 1로 초기화
  };

  const handlePagination = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <div className="diary-list-container">
      <div className="diary-list-header">
        <h5 style={{margin:'0.5rem'}}>다이어리 목록</h5>
        <input type="text" placeholder="아이디 검색" value={search} onChange={handleSearchChange}/>
      </div>
      <div className="diary-list-item first-place">
        <h6>1등</h6>
      </div>
      <div className="diary-list-items">
       {diaryItems.map((item, index) => (
          <div key={index} className="diary-list-item">
            <div className="diary-list-item-title">{item.title}</div>
            <div className='diary-list-item-info'>
              <p className='diary-list-item-date'>{item.wdate}</p>
              <p className="diary-list-item-distance">{item.totalDist}</p>
              <p className="diary-list-item-time">{item.totalTime}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='diary-list-pagination'>
        <AdminPagination page={page} totalCnt={totalCnt} handlePagination={handlePagination}/>
      </div>
    </div>
  );

}
export default DiaryList;