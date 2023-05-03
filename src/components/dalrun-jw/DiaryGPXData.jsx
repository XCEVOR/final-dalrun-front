import React,{ useState } from 'react';

function DiaryGPXData() {

  const [gpxData, setGPXData] = useState([]);

  const addGPXData = (newData) => {
    setGPXData((prevData) => [...prevData, newData]);
  };

  return {
    gpxData,
    addGPXData,
  };
}

export default DiaryGPXData;