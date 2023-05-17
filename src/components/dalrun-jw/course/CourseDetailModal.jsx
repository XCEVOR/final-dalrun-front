import React from 'react';
import { Table } from 'react-bootstrap';

function CourseDetailModal({ course, onClose}){
  const totalDist = (course.aCourseTotalDist/1000).toFixed(2);

  const loginData = JSON.parse(localStorage.getItem("login"));
  const memId = loginData.memId;
  return(
    <div onClick={onClose}>
      <div style={{ display: "flex", justifyContent: "center", width:"100%", height:"800px", overflow: "auto" }}>
        <Table>
          <colgroup>
            <col style={{width: '200px'}}/>
            <col style={{width: '400px'}}/>
            <col style={{width: '200px'}}/>
            <col style={{width: '400px'}}/>
          </colgroup>
          <thead>
            <th colSpan={4} style={{textAlign:'center'}}>
              <h4>{course.courseTitle}</h4>
            </th>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2} rowSpan={3}>
                <img src={`http://localhost:3000/dalrun-jw/courseThumb/${course.thumbnail}`} />
              </td>
              <th>작성일</th><th>{new Date(course.wdate).toLocaleDateString('ko-KR', {year: 'numeric', month: '2-digit', day: '2-digit'}).replaceAll('. ', '-').replaceAll('.', '')}</th>
            </tr>
            <tr>
              <th>이동 거리</th><th>{totalDist} km</th>
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
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr style={{ textAlign: "right" }}>
                <td colSpan={3}></td>
                <td colSpan={2}>
                {memId === 'admin' && (
                    <>
                    <td>
                      <button style={{ width: '100px', height: '40px', backgroundColor: '#74EABC', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '14px', cursor: 'pointer' }}>수정</button>
                    </td>
                    <td>
                      <button style={{ width: '100px', height: '40px', backgroundColor: '#74EABC', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '14px', cursor: 'pointer' }}>삭제</button>
                    </td>
                  </>
                )}
                <td>
                <button onClick={onClose} style={{ width: '100px', height: '40px', backgroundColor: '#74EABC', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '14px', cursor: 'pointer' }}>
                  닫기
                </button>
                </td>
              </td>
            </tr>
          </tfoot>
        </Table>
    </div>
  </div>
  )
}
export default CourseDetailModal;