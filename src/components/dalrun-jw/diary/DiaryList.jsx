import React from 'react';
import {Link} from 'react-router-dom';

const DiaryList = () => {

  const diaryItems = [
    '다이어리 1',
    '다이어리 2',
    '다이어리 3',
    '다이어리 4',
    '다이어리 5',
  ];

  return (
    <div className="diary-list-container">
      <div className="diary-list-header">
        <h4 style={{margin:'0.5rem'}}>다이어리 목록</h4>
        <input type="text" placeholder="검색" />
      </div>
      <div className="diary-list-item first-place">
        <h6>1등</h6>
      </div>
      <div className="diary-list-items">
       {diaryItems.map((item, index) => (
          <div key={index} className="diary-list-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );

}
export default DiaryList;