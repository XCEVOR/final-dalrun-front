import React, {useState} from "react";
import CourseList from '../../../components/dalrun-jw/course/CourseList';
import CourseSidebar from '../../../components/dalrun-jw/course/CourseSidebar';
import CourseMap from '../../../components/dalrun-jw/course/CourseMap';

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseItems, setCourseItems] = useState([]);

  const handleCourseSelection = (courseItems) => {
    if (selectedCourse && selectedCourse.courseSeq === courseItems.courseSeq) {
      setSelectedCourse(null);
    } else {
      setSelectedCourse(courseItems);
    }
  }
  return(
    <div className='_diary-flex-container'>
      <div className='_diary-content'>

        {/* 사이드 바 */}
        <div id="sideNav" className='_diary-sideNav'>
          <CourseSidebar />
        </div>

        {/* 기록 리스트 */}
        <div id="list" className='_diary-list'>
          < CourseList 
            courseItems={courseItems}
            onCourseSelect={handleCourseSelection}
            onCourseItemsChange={setCourseItems}
          />
        </div>

        {/* 지도 부분 */}
        <div id="map" className='_diary-map'>
          <CourseMap courseItems={courseItems} selectedCourse={selectedCourse}/>
        </div>
      </div>
     
    </div>
  );
};  // < Course />

export default Course;
