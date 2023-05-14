import React, {useEffect} from "react";
import CourseList from '../../../components/dalrun-jw/course/CourseList';
import CourseSidebar from '../../../components/dalrun-jw/course/CourseSidebar';
import CourseMap from '../../../components/dalrun-jw/course/CourseMap';

const Course = () => {
  return(
    <div className='_diary-flex-container'>
      <div className='_diary-content'>

        {/* 사이드 바 */}
        <div id="sideNav" className='_diary-sideNav'>
          <CourseSidebar />
        </div>

        {/* 기록 리스트 */}
        <div id="list" className='_diary-list'>
          < CourseList />
        </div>

        {/* 지도 부분 */}
        <div id="map" className='_diary-map'>
          <CourseMap />
        </div>
      </div>
     
    </div>
  );
};  // < Course />

export default Course;
