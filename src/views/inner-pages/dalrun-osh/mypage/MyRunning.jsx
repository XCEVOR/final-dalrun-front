import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Table } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Running() {
  const [id, setId] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
  const [diaryItems, setDiaryItems] = useState([]);
  const [diaryDayItems, setDiaryDayItems] = useState([]);
  

  // 다이어리 리스트 조회(비동기)
  const fetchDiaryItems = async (pageNumber) => { 
    try {
      const response = await axios.get('/my_diaryList', {
        params: {
          pageNumber: pageNumber,
          "memId" : id
        },
      });
      console.log('가져오는 DiaryItems:',response.data.list);
      setDiaryItems(response.data.list);
      
    } catch (error) {
      console.error('다이어리 리스트를 가져오지 못했습니다.', error);
    }
  };

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
  
    return `${year}-${month}-${day}`;
  }

  // 다이어리 기간별 조회
  function fetchDiaryDayItems(){
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);

    axios.get("/my_diaryday", { 
      params: { 
         "fromwdate" : formattedStartDate,
         "towdate" : formattedEndDate,
         "memId" : id
      } })
    .then(function(resp){
      console.log(startDate, endDate);
      console.log('가져오는 DayItems:',resp.data.list);
      setDiaryDayItems(resp.data.list);
    })
    .catch(function(err){
      console.log(startDate, endDate);
        alert(err); 
    })
  }

  useEffect(() => {
    fetchDiaryItems(); // 페이지 번호를 전달하여 첫 번째 페이지의 다이어리 리스트를 가져옵니다.
    // 초기 데이터 조회
    fetchDiaryDayItems();
  }, [startDate, endDate]);

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
    fetchDiaryItems(0); 
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    fetchDiaryDayItems(); // 날짜 변경 시 fetchDiaryDayItems 함수 호출 
    fetchDiaryItems(0);   
  };

  return (
    <div className="members container">
      <br /><br /><br /><br /><br /><br />
      <h4 className="title">🏃‍♀️내 러닝기록</h4>
      <br />
      <div className="inform outline" />
      <br /><br />
      <h5 className="title">기간별 런닝</h5> 
      <br />
    
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange} 
        startDate={startDate}
        endDate={endDate}
        selectsStart
        placeholderText="시작 날짜 선택"
        dateFormat="yyyy년 MM월 dd일"
      />
      <br />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsEnd
        placeholderText="끝 날짜 선택"
        dateFormat="yyyy년 MM월 dd일"
      />
      <br /><br />
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
          diaryDayItems.map((total) => (
            <tr key={total?.date}>
              <td>{startDate.toLocaleDateString()} ~ {endDate.toLocaleDateString()}</td>
              <td>{total?.totalDist ? (total?.totalDist / 1000).toFixed(2) + " km" : "0 km"}</td>
              <td>{total?.totalTime ? formatTime(total?.totalTime) : "0 분"}</td>
              <td>{total?.kcal ? total?.kcal + " kcal" : "0 kcal"}</td>
            </tr>
          ))
          : <tr style={{textAlign:"center"}}><td colSpan="11">{id}데이터가 없습니다</td></tr>
        }          
        </tbody>
      </table>
      <br /><br /><br />
      <div className="inform outline" />
      <br /><br />
      <h5 className="title">매일기록</h5><br />

      <div>
        <Table responsive hover>
          <thead>
            <tr>
              <th>날짜</th>
              <th>이동거리</th>
              <th>이동시간</th>
              <th>평균페이스</th> 
              <th>칼로리</th> 
            </tr>
          </thead>
          <tbody>
            {
              diaryItems.length !== 0 ?
              diaryItems.map((Items, i) => {
                const wdate = new Date(Items.wdate);
                const formattedDate = wdate.toLocaleDateString('ko-KR');
                return(
                  <tr key={i}>
                    <td>
                      <Link to={'http://localhost:9200/diary'}>{formattedDate}</Link>
                    </td>  
                    <td>{(Items.totalDist/1000).toFixed(2)} km</td>
                    <td>{formatTime(Items.totalTime)}</td>                          
                    <td>{Items.meanPace.toFixed(1)} 분/km </td>
                    <td>{Items.kcal} kcal</td>
                  </tr>
                );
              }) 
              : <tr style={{textAlign:"center"}}><td colSpan="11">{id}데이터가 없습니다</td></tr>
              }
          </tbody>
        </Table>    
      </div>  
      <br /><br /><br /><br />
    </div>
  );
}

export default Running;