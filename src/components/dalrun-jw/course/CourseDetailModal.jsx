import React from 'react';
import { Table } from 'react-bootstrap';

function CourseDetailModal({ course, onClose}){
  const totalDist = (course.totalDist/1000).toFixed(2);

  return(
    <div className='modal-overlay' onClick={onClose}>
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
              <th>작성일</th><th>{new Date(course.wdate).toLocaleDateString('ko-KR', {year: 'numeric', month: '2-digit', day: '2-digit'}).replaceAll('. ', '-').replaceAll('.', '')}</th>
            </tr>
            <tr>
              <th>이동 거리</th><th>{totalDist}</th>
            </tr>
            <tr>
              <th>소모 칼로리</th><th>{course.kcal} kcal</th>
            </tr>
            <tr>
                <td colSpan="4" style={{textAlign:"left"}}><h5>{course.title}</h5></td>
            </tr>
            <tr>
              <td colSpan="4" style={{textAlign:"left"}}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                  <pre style={{ backgroundColor: "white" }} dangerouslySetInnerHTML={{ __html: course.content }} />
                  <button onClick={onClose}>닫기</button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
    </div>
  </div>
  )
}
export default CourseDetailModal;