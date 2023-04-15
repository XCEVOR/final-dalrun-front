import React from "react";
import KakaoMap from '../../../components/dalrun-jw/KakaoMap';

function Diary(){
  return(
    <div className='row'>
      <div className='col-md-2'>
        <div className='d-flex flex-colum flex-shrink-0 gb-body-tertiary ' data-bs-theme="dark" style={{ width:"4.5rem"}}>
          <ul className="nav nav-pills nav-flush felx-column mb-auto text-cneter">
            <li className='nav-item'></li>
          </ul>          
        </div>
      </div>
      <div className='col-md-1'>막대</div>
      <div className='col-md-9'>
        <div className='row'>< KakaoMap/></div>
        <div className='row' style={{textAlign:"center"}}>기록 분석</div>
      </div>
    </div>
    )
}

export default Diary;