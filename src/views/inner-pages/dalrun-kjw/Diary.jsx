﻿import React from "react";
import KakaoMap from '../../../components/dalrun-jw/KakaoMap';
import NaverMapApi from '../../../components/dalrun-jw/NaverMapApi';
import DiarySidebar from '../../../components/dalrun-jw/diary/DiarySidebar';
import DiaryList from '../../../components/dalrun-jw/diary/DiaryList';


function Diary(){
  return(
    <div className='_diary-flex-container'>
      <div className='_diary-content'>

        {/* 사이드 바 */}
        <div id="sideNav" className='_diary-sideNav'>
          < DiarySidebar/>
        </div>

        {/* 기록 리스트 */}
        <div id="list" className='_diary-list'>
          < DiaryList />
        </div>

        {/* 지도 부분 */}
        <div id="map" className='_diary-map'>
          <NaverMapApi/>
        </div>
      </div>
    </div>
    )
}

export default Diary;