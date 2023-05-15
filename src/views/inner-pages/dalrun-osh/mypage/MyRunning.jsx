import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Running() {
  const [id, setId] = useState("");

  const [runningRecords, setRunningRecords] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const history = useNavigate();

  useEffect(()=>{
    const str = localStorage.getItem('login')
    if(str !== null){
        const login = JSON.parse(str);
        setId(login.memId);
    }else {
        alert('login을 해주세요.');
        history('/login');
    }
}, [history, setId]);

  // 다이어리 리스트
  const [diaryItems, setDiaryItems] = useState({});
  const [diaryDayItems, setDiaryDayItems] = useState([]);
  

  // 다이어리 리스트 조회(비동기)
  const fetchDiaryItems = async (pageNumber) => {
    try {
      const search = searchParams.get("search") || '';
      const response = await axios.get('http://localhost:3000/my_diaryList', {
        params: {
          pageNumber: pageNumber,
          "memId" : id
        },
      });
      console.log('가져오는 데이터:',response.data.list);
      setDiaryItems(response.data.list);
      
    } catch (error) {
      console.error('다이어리 리스트를 가져오지 못했습니다.', error);
    }
  };
  // 다이어리 기간별 조회
  function fetchDiaryDayItems(){
    axios.get("http://localhost:3000/my_diaryday", { 
      params: { 
         "fromwdate" : startDate,
         "towdate" : endDate,
         "memId" : id
      } })
    .then(function(resp){
      console.log('가져오는 데이터:',resp.data.list);
      setDiaryDayItems(resp.data.list);
    })
    .catch(function(err){
        alert(err);
    })
  }

  useEffect(() => {
    if (searchParams.get("search") !== null) {// 검색 값이 있을 때만
      navigate('/diary', { replace: true });
    }
  }, []);

  // 시간 표현 형식 변경 메소드
  const formatTime =(sec) => {
    const hours = Math.floor(sec/3600);
    const minutes = Math.floor((sec % 3600)/60);
    const seconds = sec % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  const handleStartDateChange = (date) => {
    setStartDate(date);
    fetchDiaryDayItems(); // 날짜 변경 시 fetchDiaryDayItems 함수 호출    
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    fetchDiaryDayItems(); // 날짜 변경 시 fetchDiaryDayItems 함수 호출    
  };

  const todayRecords = runningRecords.filter(record => {
    return new Date(record.date).toDateString() === startDate.toDateString();
  });

  return (
    <div className="members container">
      <h4 className="title">🏃‍♀️내 러닝기록</h4>
      <br />
      <div className="inform outline" />
      <br />
      <h4 className="title">기간별 런닝</h4>
      <br />
    
      {/* <div>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      </div> */}
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsStart
        placeholderText="시작 날짜 선택"
        dateFormat="yyyy년 MM월 dd일"
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsEnd
        placeholderText="끝 날짜 선택"
        dateFormat="yyyy년 MM월 dd일"
      />
      {/* <button onClick={() => handleSearch(startDate, endDate)}>Search</button>       */}
      
      <table>
        <thead>
          <tr>
            <th>날짜</th>
            <th>거리</th>
            <th>시간</th>
            <th>칼로리</th>
          </tr>
        </thead>
        <tbody>
        {
          diaryDayItems.length !== 0 ?          
          diaryDayItems.map(total => (
            <tr key={total.date}>
              <td>{total.date}</td>
              <td>{total.totalDist}</td>
              <td>{total.totalTime}</td>
              <td>{total.kcal}</td>
            </tr>
          ))
          : <tr style={{textAlign:"center"}}><td colSpan="11">{id}데이터가 없습니다</td></tr>
        }          
        </tbody>
      </table>
      <br />
      <div className="inform outline" />
      <br />
      <h5 className="title">매일기록</h5><br />
      <div className="diary-list-items">
      {diaryItems.length > 0 ? (
        diaryItems.map((item, index) => (
          <div key={index} className="diary-list-item" >
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
                    &nbsp;&nbsp;<FontAwesomeIcon icon={faCircleUser} size="xl" /> {item.memId}
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
                </tr>
              </tbody>
            </table>
          </div>
        ))
      ) 
      : <p>데이터가 없습니다.</p>
      }
      </div>

      
    </div>
  );
}

export default Running;