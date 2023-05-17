import React from 'react';
import { Table } from 'react-bootstrap';

function DetailModal({ diary, onClose}){
  const totalDist = (diary.totalDist/1000).toFixed(2);

  const formatTime =(sec) => {
    const hours = Math.floor(sec/3600);
    const minutes = Math.floor((sec % 3600)/60);
    const seconds = sec % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  const handleEdit = () => {
    // Edit 기능 구현
    console.log('Edit 버튼 클릭');
  }

  const handleDelete = () => {
    // Delete 기능 구현
    console.log('Delete 버튼 클릭');
  }

  const loginData = JSON.parse(localStorage.getItem("login"));
  let memId = null;
  if(loginData){
    memId = loginData.memId;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div style={{ display: "flex", justifyContent: "center", width:"100%", height:"800px", overflow: "auto" }}>
        <Table>
          <colgroup>
            <col style={{width: '200px'}}/>
            <col style={{width: '400px'}}/>
            <col style={{width: '200px'}}/>
            <col style={{width: '400px'}}/>
          </colgroup>
          <tbody>
            <tr>
              <th>작성자</th>
              <th>{diary.memId}</th>
              <th>작성일</th>
              <th>{new Date(diary.wdate).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).replaceAll('. ', '-').replaceAll('.', '')}</th>
            </tr>
            <tr>
              <th>이동 거리</th>
              <th>{totalDist} km</th>
              <th>이동 시간</th>
              <th>{formatTime(diary.totalTime)}</th>
            </tr>
            <tr>
              <th>평균 페이스</th>
              <th>{diary.meanPace.toFixed(1)} 분/km</th>
              <th>소모 칼로리</th>
              <th>{diary.kcal} kcal</th>
            </tr>
            <tr>
              <td colSpan="4" style={{textAlign:"left"}}><h5>{diary.title}</h5></td>
            </tr>
            <tr>
              <td colSpan="4" style={{textAlign:"left"}}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                  <pre style={{ backgroundColor: "white" }} dangerouslySetInnerHTML={{ __html: diary.content }} />
                  <button onClick={onClose}>닫기</button>
                  {memId === diary.memId && (
                    <div>
                      <button onClick={handleEdit}>수정</button>
                      <button onClick={handleDelete}>삭제</button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default DetailModal;