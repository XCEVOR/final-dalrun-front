import React from "react";
import KakaoMap from '../../../components/dalrun-jw/KakaoMap';
import DiarySidebar from '../../../components/dalrun-jw/DiarySidebar';
import DiaryList from '../../../components/dalrun-jw/DiaryList';
import "bootstrap/dist/css/bootstrap.css";

function Diary(){
  return(
    <div className='row'>

      {/* 사이드 바 */}
      <div className='col-md-1 min-vh-100 bg-dark'>
        < DiarySidebar/>
      </div>

      {/* 기록 리스트 */}
      <div className='col-md-2'>
        < DiaryList />
      </div>
      {/* 지도 부분 */}
      <div className='col-md-9'>< KakaoMap/></div>
    </div>
    )
}

export default Diary;