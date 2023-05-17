import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faRoute} from '@fortawesome/free-solid-svg-icons';
import sidoList from './AreaCode';
import ModalPortal from '../Portal';
import ModalFrame from '../ModalFrame';
import CourseDetailModal from './CourseDetailModal';

const CourseList = ({ course, onCourseSelect, onCourseItemsChange }) => {
  // 코스 리스트
  const [courseItems, setCourseItems] = useState([]); 
  // 검색
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // 코스 선택
  const [selectedCourse, setSelectedCourse] = useState(null);

  // 모달 창 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
  };

  // // 페이지가 마운트될 때 검색 URL을 초기화
  // useEffect(() => {
  //   if (searchParams.get("search") !== null) {// 검색 값이 있을 때만
  //     navigate('/course', { replace: true });
  //   }
  // }, []);

  // 검색창에 검색 시
  useEffect(() => {
    const searchUrl = searchParams.get("search");
    setSearch(searchUrl || '');
    fetchCourseItems();
  }, [searchParams]);

  const fetchCourseItems = async () => {
    try {
      const search = searchParams.get("search") || '';
      const response = await axios.get('/courseList', {
        params: {
          search: search,
        },
      });
      // console.log('코스리스트 데이터:',response.data);
      setCourseItems(response.data);
      onCourseItemsChange(response.data);
    }catch (error) {
      console.error('추천 코스 리스트를 가져오지 못했습니다.', error);
    }
  };

  
  const handleSearchChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
  
    // 기존 검색창(url)이 빈 문자일 때
    if (newSearch.trim() === '') {
      searchParams.delete('search');
      fetchCourseItems();
    } else {
      // 검색창에 입력된 값이 이미 지역 이름인 경우 전체 리스트를 조회하도록 검색창을 비웁니다.
      if (sidoList.some(sido => sido.name === newSearch) && searchParams.get('search') === newSearch) {
        searchParams.delete('search');
      } else { // 그 외(검색입력 시)
        searchParams.set("search", newSearch);
      }
    }
    setSearchParams(new URLSearchParams(searchParams.toString())); // 검색 초기화
  
    // 입력된 걸 다 지웠을 때
    if (newSearch.trim() !== '') {
      fetchCourseItems(); // 입력창 이벤트 시 리스트 렌더링
    }
  };

      // 시간 표현 형식 변경 메소드
  const formatTime =(sec) => {
    const hours = Math.floor(sec/3600);
    const minutes = Math.floor((sec % 3600)/60);
    const seconds = sec % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }


  return (
    <div className="diary-list-container">
    <div className="diary-list-header">
      <h5 style={{position:'relative', top:'-1rem'}}>코스 추천 페이지</h5>
      <div className="diary-list-search">
        <input type="text" placeholder="지역,코스 명, 난이도 검색" value={search} onChange={handleSearchChange} />
        <button className='diary-list-searchBtn'>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#51e3d4",}} />
        </button>
      </div>
    </div>
    <div className="diary-list-item first-place">
      <div className="sido-button-container">
        {sidoList.map(sido => (
          <button 
            key={sido.id} 
            className="sido-button" 
            onClick={() => handleSearchChange({ target: { value: sido.name } })}
          >
            {sido.name}
          </button>
        ))}
      </div>
    </div>
    <div className="diary-list-items">
      {courseItems.length > 0 ? (
        courseItems.map((item, index) => (
          <div key={index} className='course-list-item' onClick={() => onCourseSelect(item)}>
            <table style={{border:"none"}}>
              <colgroup>
                <col style={{width: '150px'}}/>
                <col style={{width: '60px'}} />
                <col style={{width: '90px'}} />
              </colgroup>
              <tbody>
                <tr>
                  <td rowSpan={6}>
                    <img 
                      className='thumbnail' 
                      src={`${process.env.REACT_APP_API_URL}/dalrun-jw/courseThumb/${item.thumbnail}`} 
                      alt={item.courseTitle} 
                      style={{width:'200px', height:'180', objectFitt:'cover'}}
                    />
                  </td>
                  <th colSpan={2}>{item.areaName}</th>
                </tr>
                <tr>
                  <th colSpan={2} style={{overflowX:'hidden'}}>{item.courseTitle}</th>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faRoute} />
                  </td>
                  <td>
                    {(item.aCourseTotalDist/1000).toFixed(2)} km
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src='assets/img/dalrun-jw/slope.png' style={{width:'16px'}} />
                  </td>
                  <td>
                    {item.aCourseMaxSlope} %
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src='assets/img/dalrun-jw/kcal.png' style={{width:'16px'}}/>
                  </td>
                  <td>{item.kcal} </td>
                </tr>
                <tr>
                  <td><img src='assets/img/dalrun-jw/level.png' style={{width:'16px'}}/></td>
                  <td>{item.level}</td>
                </tr>
                <tr>
                  <td style={{color:"grey"}}>
                    <div style={{display:'flex', justifyContent:'flex-start', bottom:0}}>
                      {new Date(item.wdate).toLocaleDateString('ko-KR', {year: 'numeric', month: '2-digit', day: '2-digit'}).replaceAll('. ', '-').replaceAll('.', '')}
                    </div>
                  </td>
                  <td colSpan={2} style={{textAlign:'right'}}>
                    <div className='button-box'>
                      <button onClick={() => openModal(item)}>상세 보기</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
      )
      : <p>데이터가 없습니다.</p>
      }
    </div>
    <ModalPortal>
      {openModal && (
        <ModalFrame open={isModalOpen} close={closeModal} header="추천 코스" >
          <CourseDetailModal course={selectedCourse} onClose={closeModal} />
        </ModalFrame>
      )}
    </ModalPortal>
  </div>
);
}
export default CourseList;