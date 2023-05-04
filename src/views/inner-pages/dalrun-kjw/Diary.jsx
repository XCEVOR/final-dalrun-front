import React from "react";
import {DiaryGPXDataProvider} from '../../../components/dalrun-jw/diary/DiaryGPXData';
import DiaryContent from './DiaryContent';

function Diary(){
  return(
    <DiaryGPXDataProvider>
      <DiaryContent/>
    </DiaryGPXDataProvider>  
    )
}

export default Diary;