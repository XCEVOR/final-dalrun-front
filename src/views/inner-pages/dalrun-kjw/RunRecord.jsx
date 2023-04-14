import React from "react";
import KakaoMap from '../../../components/dalrun-jw/KakaoMap';

function RunRecord(){
  return(
    <div className='row'>
      <div className='col-md-2'>막대</div>
      <div className='col-md-10'>
        <div className='row'>< KakaoMap/></div>
        <div className='row' style={{textAlign:"center"}}>기록 분석</div>
      </div>
    </div>
    )
}

export default RunRecord;