import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminPagination from '../../dalrun-asj/AdminPagination';
import { Link, useNavigate, useSearchParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCrown, faLocationPin} from '@fortawesome/free-solid-svg-icons';
import { faCircleUser, faTrophy } from '@fortawesome/free-solid-svg-icons';
import ModalPortal from '../Portal';
import DetailModal from './DetailModal';
import ModalFrame from '../ModalFrame';


const DiaryList = ({ diaries, onDiarySelect, onDiaryItemsChange }) => {
  // 다이어리 리스트
  const [diaryItems, setDiaryItems] = useState({});
  // 페이지 설정
  const [page, setPage] = useState(1);
  const [totalCnt, setTotalCnt] = useState(0);  
  // 검색
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // 기록 1등
  const [todayTopScore, setTodayTopScore] = useState([]);

  // 모달 창 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 다이어리 선택
  const [selectedDiary, setSelectedDiary] = useState(null);

  const openModal = (diary) => {
    setSelectedDiary(diary);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedDiary(null);
    setIsModalOpen(false);
  };


  // 페이지가 마운트될 때 검색 URL을 초기화
  useEffect(() => {
    if (searchParams.get("search") !== null) {// 검색 값이 있을 때만
      navigate('/diary', { replace: true });
    }
  }, []);

  // 검색창에 검색 시
  useEffect(() => {
    const searchUrl = searchParams.get("search");
    setSearch(searchUrl || '');
    fetchDiaryItems(page - 1);
  }, [searchParams, page]);

  // 다이어리 리스트 조회(비동기)
  const fetchDiaryItems = async (pageNumber) => {
    try {
      const search = searchParams.get("search") || '';
      const response = await axios.get('http://localhost:3000/diaryList', {
        params: {
          Search: search,
          pageNumber: pageNumber,
        },
      });
      // console.log('가져오는 데이터:',response.data.list);
      setDiaryItems(response.data.list);
      onDiaryItemsChange(response.data.list);
      setTotalCnt(response.data.cnt);
    } catch (error) {
      console.error('다이어리 리스트를 가져오지 못했습니다.', error);
    }
  };

  // 검색창 입력 변환 시
  const handleSearchChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);

    // 기존 검색창(url)이 빈 문자일 때
    if (newSearch.trim() === '') {
      searchParams.delete('search');
      fetchDiaryItems(page - 1);
    } else{ // 그 외(검색입력 시)
      searchParams.set("search", newSearch);
    }
    setSearchParams(new URLSearchParams(searchParams.toString())); // 검색 초기화
    setPage(1); // 검색어가 변경될 때 페이지를 1로 초기화

    // 입력된 걸 다 지웠을 때
    if (newSearch.trim() !== '') {
      fetchDiaryItems(page - 1); // 입력창 이벤트 시 리스트 렌더링
    }
  };

  // 페이지 변경 메소드
  const handlePagination = (selectedPage) => {
    setPage(selectedPage);
  };

  // 시간 표현 형식 변경 메소드
  const formatTime =(sec) => {
    const hours = Math.floor(sec/3600);
    const minutes = Math.floor((sec % 3600)/60);
    const seconds = sec % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  // Today 기록 1등
  useEffect(() => {
    fetchTopScore();
  }, [diaryItems])

  const fetchTopScore = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getTodayTopScore');
      console.log('TodayTopScore 데이터: ', response.data[0]);
      setTodayTopScore(response.data[0]);
    }catch (error) {
      console.error('기록 1등 다이어리를 조회할 수 없습니다.', error);
    }
  };

  return (
    <div className="diary-list-container">
      <div className="diary-list-header">
          <Link to="/diary" style={{ textDecoration: 'none' }}>
            <h5 style={{ position: 'relative', top: '-1rem' }}>다이어리 페이지</h5>
          </Link>
        <div className="diary-list-search">
          <input type="text" placeholder="제목,아이디,작성일 검색" value={search} onChange={handleSearchChange}/>
          <button className='diary-list-searchBtn' onClick={() => fetchDiaryItems(page - 1)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#51e3d4",}} />
          </button>
        </div>
      </div>
      <div className="diary-list-item first-place">
          {!todayTopScore ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
              <FontAwesomeIcon icon={faCrown} title='1등' beat size="2x" style={{ color: "#f5dc3d", marginBottom: "10px" }} />
              <p style={{ margin: "0" }}>오늘의 1등 기록에 도전하세요!!</p>
            </div>
          ) : (
            <table>
              <colgroup>
                <col style={{width:'30px'}} />
                <col style={{width:'70px'}} />
                <col style={{width:'50px'}} />
                <col style={{width:'50px'}} />
                
              </colgroup>
            <tbody>
              <tr>
                <th>
                  <h6 style={{marginLeft:'0.2rem'}}>1위</h6>
                </th>
                <td rowSpan={2}>
                  <img
                    src={`http://localhost:3000/dalrun-yr/profiles/${todayTopScore.profile}`}
                    className='rounded-circle'
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;{todayTopScore.memId}
                </td>
                <td>
                  이동거리
                </td>
                <td>
                  {(todayTopScore.totalDist/1000).toFixed(2)} km
                </td>
              </tr>
              <tr>
                <td rowSpan={2}>
                  <FontAwesomeIcon icon={faTrophy} bounce size="2x" style={{color: "#f5dc3d"}}/>
                </td>
                <td>이동시간</td>
                <td>{formatTime(todayTopScore.totalTime)}</td>
              </tr>
              <tr>
                <td>
                  {new Date(todayTopScore.wdate).toLocaleDateString('ko-KR', {year: 'numeric', month: '2-digit', day: '2-digit'}).replaceAll('. ', '-').replaceAll('.', '')}
                </td>
                <td colSpan={2} style={{textAlign:'right'}}>
                  <button className='btn_today' onClick={() => openModal(todayTopScore)}>상세 보기</button>
                </td>
              </tr>
            </tbody>
          </table>
          )}
      </div>
      <div className="diary-list-items">
      {diaryItems.length > 0 ? (
        diaryItems.map((item, index) => (
          <div key={index} className="diary-list-item" onClick={() => onDiarySelect(item)}>
            <table style={{border:"none"}}>
              <colgroup>
                <col style={{width: '20px'}}/>
                <col style={{width: '120px'}}/>
                <col style={{width: '20px'}}/>
                <col style={{width: '120px'}}/>
                <col style={{width: '20px'}}/>
              </colgroup>
              <tbody>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faLocationPin} size="xl" style={{color: "#51e3d4",}} />
                  </td>
                  <td>
                    {item.profile != null ? (
                      <div>
                      <img src={`http://localhost:3000/dalrun-yr/profiles/${item.profile}`}
                        className='rounded-circle'
                      /> 
                      &nbsp;&nbsp;&nbsp;
                      {item.memId}
                      </div>
                    )
                    : (
                      <div>
                      &nbsp;&nbsp;<FontAwesomeIcon icon={faCircleUser} size="xl" /> 
                      {item.memId}
                      </div>
                    )}
                  </td>
                  <td colSpan={3} style={{overflowX:'hidden'}}>{item.title}</td>
                </tr>
                <tr>
                  <td colSpan={2} className='tableItem'>이동 거리 {(item.totalDist/1000).toFixed(2)} km</td>
                  <td></td><td colSpan={2} className='tableItem'>평균 페이스 {item.meanPace.toFixed(1)} 분/km </td>
                </tr>
                <tr>
                  <td colSpan={2} className='tableItem'>이동 시간 {formatTime(item.totalTime)} </td>
                  <td></td><td colSpan={2} className='tableItem'>칼로리 {item.kcal} kcal</td>
                </tr>
                <tr>
                  <td colSpan={3} style={{color:"grey"}}>{new Date(item.wdate).toLocaleDateString('ko-KR', {year: 'numeric', month: '2-digit', day: '2-digit'}).replaceAll('. ', '-').replaceAll('.', '')}</td>
                  <td colSpan={2} style={{textAlign:'right'}}>
                    <button onClick={() => openModal(item)}>상세 보기</button>
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
      <div className='diary-list-pagination'>
        <AdminPagination page={page} totalCnt={totalCnt} handlePagination={handlePagination}/>
      </div>
      <ModalPortal>
        {openModal && (
          <ModalFrame open={isModalOpen} close={closeModal} header="다이어리" >
            <DetailModal diary={selectedDiary} onClose={closeModal} />
          </ModalFrame>
        )}
      </ModalPortal>
    </div>
  );

}
export default DiaryList;