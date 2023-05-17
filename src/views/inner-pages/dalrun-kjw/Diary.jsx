import React, { useState } from "react";
import DiaryMap from '../../../components/dalrun-jw/diary/DiaryMap';
import DiarySidebar from '../../../components/dalrun-jw/diary/DiarySidebar';
import DiaryList from '../../../components/dalrun-jw/diary/DiaryList';
// import {DiaryGPXDataProvider} from '../../../components/dalrun-jw/diary/DiaryGPXData';
// import DiaryContent from './DiaryContent';

function Diary(){
  const [selectedDiary, setSelectedDiary] = useState(null);
  const [diaryItems, setDiaryItems] = useState([]);
  //console.log('다이어리 컴포넌트의 다이어리 데이터 : ',diaryItems);

  const handleDiarySelection = (diaryItems) => {
    if (selectedDiary && selectedDiary.diarySeq === diaryItems.diarySeq) {
      setSelectedDiary(null);
    } else {
      setSelectedDiary(diaryItems);
    }
  }

  return(
    <div className='_diary-flex-container'>
      <div className='_diary-content'>

        {/* 사이드 바 */}
        <div id="sideNav" className='_diary-sideNav'>
          < DiarySidebar/>
        </div>

        {/* 기록 리스트 */}
        <div id="list" className='_diary-list'>
          <DiaryList 
            diaries={diaryItems} 
            onDiarySelect={handleDiarySelection} 
            onDiaryItemsChange={setDiaryItems} 
          />
        </div>

        {/* 지도 부분 */}
        <div id="map" className='_diary-map'>
          <DiaryMap 
            diaries={diaryItems} 
            selectedDiary={selectedDiary}
            setSelectedDiary={setSelectedDiary}   
          />
        </div>

      </div>
    </div>
  )
  // return(
    
    // <DiaryGPXDataProvider>
    //   <DiaryContent/>
    // </DiaryGPXDataProvider>  
  //   )
}

export default Diary;

