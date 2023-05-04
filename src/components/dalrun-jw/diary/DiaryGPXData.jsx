import { createContext, useContext, useState, useEffect } from 'react';

const DiaryGPXDataContext = createContext();

export const useDiaryGPXData = () => {
  const context = useContext(DiaryGPXDataContext);
  
  if (context === undefined) {  // context 비었을 때
    throw new Error('useDiaryGPXData는 DiaryGPXDataProvider 안에 종속되어 있어야 합니다.');
  }
  return context;
};

export const DiaryGPXDataProvider = ({ children }) => {
  const [gpxData, setGpxData] = useState({});

  const addGPXData = (newData) => {
    setGpxData((prevData) => {
      const fileSeq = newData.fileSeq;
      if (prevData[fileSeq]) {
        return {
          ...prevData,
          [fileSeq]: [...prevData[fileSeq], newData],
        };
      } else {
        return {
          ...prevData,
          [fileSeq]: [newData],
        };
      }
    });
  };

  useEffect(() => {
    console.log('gpxData:', gpxData);
  }, [gpxData]);

  const value = {
    gpxData,
    addGPXData,
  };

  return (
    <DiaryGPXDataContext.Provider value={value}>
      {children}
    </DiaryGPXDataContext.Provider>
  );
};
