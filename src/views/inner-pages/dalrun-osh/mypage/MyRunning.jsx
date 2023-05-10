import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Running() {
  const [runningRecords, setRunningRecords] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const todayRecords = runningRecords.filter(record => {
    return new Date(record.date).toDateString() === startDate.toDateString();
  });

  const totalDistance = todayRecords.reduce((total, record) => {
    return total + record.distance;
  }, 0);

  const totalDuration = todayRecords.reduce((total, record) => {
    return total + record.duration;
  }, 0);

  const totalCalories = todayRecords.reduce((total, record) => {
    return total + record.calories;
  }, 0);

  return (
    <div className="members container">
      <h4 className="title">내 러닝기록</h4>
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
            {/* <th>ID</th> */}
            <th>날짜</th>
            <th>거리</th>
            <th>시간</th>
            <th>칼로리</th>
          </tr>
        </thead>
        <tbody>
          {runningRecords.map(record => (
            <tr key={record.date}>
              {/* <td>{record.id}</td> */}
              <td>{record.date}</td>
              <td>{record.distance}</td>
              <td>{record.duration}</td>
              <td>{record.calories}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="1">{startDate.toDateString()}~{endDate.toDateString()}</td>
            <td>{totalDistance.toFixed(2)} km</td>
            <td>{totalDuration} min</td>
            <td>{totalCalories} kcal</td>
          </tr>
        </tfoot>
      </table>
      <br />
      <div className="inform outline" />
      <br />
      <h5 className="title">매일기록</h5><br />
      <table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>날짜</th>
            <th>거리</th>
            <th>시간</th>
            <th>칼로리</th>
          </tr>
        </thead>
        <tbody>
          {runningRecords.map(record => (
            <tr key={record.date}>
              {/* <td>{record.id}</td> */}
              <td>{record.date}</td>
              <td>{record.distance}</td>
              <td>{record.duration}</td>
              <td>{record.calories}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="1">날짜</td>
            <td>{totalDistance.toFixed(2)} km</td>
            <td>{totalDuration} min</td>
            <td>{totalCalories} kcal</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Running;