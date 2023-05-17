import { Container as MapDiv, NaverMap, Marker, useNavermaps, Overlay, useMap, Polyline} from 'react-naver-maps';
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

function DiaryMap({ diaries, selectedDiary, setSelectedDiary }){
  // console.log('네이버맵 다이어리 데이터', diaries);
  console.log('네이버맵-리스트에서 선택된 다이어리: ', selectedDiary);
  const navermaps = useNavermaps();

  const [center, setCenter] = useState({ lat: 37.3595704, lng: 127.105399 });
  const [zoom, setZoom] = useState(7);

  const [gpxData, setGpxData] = useState({});
  const [path, setPath] = useState({});

  useEffect(() => {
    if(diaries && diaries.length > 0){

      // diaries에서 diarySeq만 추출하여 리스트 생성
      const diarySeqList = diaries.map(diary => diary.diarySeq);
      console.log(diarySeqList);

      // diarySeq에 따른 gpxData 호출
      axios.get('http://localhost:3000/gpxDataList', {
        params: {
          diarySeqList: diarySeqList.join(',') // [1, 2, 3] -> 1, 2, 3
        }
      })
      .then(response => {
        // console.log('diarySeq 보내서 받은 데이터', response.data);

        const gpxDataObj = {};
        const pathObj = {};

        response.data.forEach(item => {
          
          const { diarySeq, latitude, longitude } = item;
          // 아이템 객체의 diarySeq, lat, lng의 값을 변수로 추출해서 선언

          // gpxData 객체를 구성
          if (gpxDataObj[diarySeq]) {
            gpxDataObj[diarySeq].push(item);
          } else {
            gpxDataObj[diarySeq] = [item];
          }

           // path 객체를 구성
          if (pathObj[diarySeq]) {
            pathObj[diarySeq].push({ lat: latitude, lng: longitude });
          } else {
            pathObj[diarySeq] = [{ lat: latitude, lng: longitude }];
          }
        });

        setGpxData(gpxDataObj);
        setPath(pathObj); //
      })
      .catch(error => {
        console.log(error);
      });
    }
  }, [diaries]);

  const mapOptions = {
    defaultCenter: new navermaps.LatLng(37.3595704, 127.105399),
    defaultZoom: 7,
    mapDataControl: true,
    mapTypeControl: true,
    mapTypeControlOptions: {
      position: navermaps.Position.RIGHT_TOP,
    },
    zoomControl: true,
    zoomControlOptions: {
      position: navermaps.Position.RIGHT_CENTER,
      style: navermaps.ZoomControlStyle.SMALL,
    },
  };
  
    
  return (
    <MapDiv
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
      }}
    >
      {useMemo(() => {
        return (
          <NaverMap {...mapOptions} center={center} zoom={zoom}>
            <LocationBtn/>
            <MySetCenter
              key={selectedDiary?.diarySeq || 'default'}
              selectedDiary={selectedDiary}
              path={path}
              diaries={diaries}
              setSelectedDiary={setSelectedDiary}
            />
          </NaverMap>
        );
      }, [selectedDiary, path])}
    </MapDiv>
  );
}
export default DiaryMap;


function LocationBtn() {
  const naverMap = useMap();
  const [myLocation, setMyLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setMyLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error('error');
      }
    );
  }, []);

  return (
    <div className='myLocation-wrapper'>
      <button className='myLocation-button'
        onClick={() => {
          if (myLocation) {
            naverMap.setCenter({ lat: myLocation[0], lng: myLocation[1] });
            // naverMap.panTo({ lat: myLocation[0], lng: myLocation[1] });
            naverMap.setZoom(14);
          } else {
            alert("현재 위치를 가져올 수 없습니다.");
          }
        }}

      >
        <span className='myLocation-span'></span>
      </button>
    </div>
  );
}

function MySetCenter({ selectedDiary, path, diaries, setSelectedDiary }) {
  const nMap = useMap();
  const navermaps = useNavermaps();

  useEffect(() => {
    if (selectedDiary) {
      const selectedPath = path[selectedDiary.diarySeq];
      if (selectedPath && selectedPath.length > 0){
        const newCenter = selectedPath[0];
        nMap.setCenter(new navermaps.LatLng(newCenter.lat, newCenter.lng));
        // const naverLatLng = new navermaps.LatLng(newCenter.lat, newCenter.lng);
        // nMap.panTo(naverLatLng);
        nMap.setZoom(13);
      }
    } else {
      const initCenter = { lat: 37.3595704, lng: 127.105399 };
      nMap.setCenter(new navermaps.LatLng(initCenter.lat, initCenter.lng));
      // const naverLatLng = new navermaps.LatLng(initCenter.lat, initCenter.lng);
      // nMap.panTo(naverLatLng);
      nMap.setZoom(7);
    }
  }, [selectedDiary, path]);

  const handleMarkerClick = (diarySeq) => {
    const selected = diaries.find(diary => diary.diarySeq === diarySeq);
    setSelectedDiary(selected);
  };

  return (
    <React.Fragment>
      {!selectedDiary && Object.entries(path).map(([diarySeq, path], index) => {
        if (path && path.length > 0) {
          return (
            <React.Fragment key={index}>
              <Marker 
                key={diarySeq} 
                position={path[0]}
                icon={{
                  url: '/map_marker.png',
                  size: { width: 40, height: 40 },
                  anchor: { x: 20, y: 40 },
                }}
                onClick={() => handleMarkerClick(diarySeq)}
              />
              <Polyline
                  path={path}
                  strokeColor={'#74EABC80'}
                  strokeWeight={4}
              />
            </React.Fragment>
          );
        }
        return null;
      })}
      {selectedDiary && path[selectedDiary.diarySeq] && (
        <React.Fragment>
          <Marker position={path[selectedDiary.diarySeq][0]} />
          <Polyline
            path={path[selectedDiary.diarySeq]}
            strokeColor={'#74EABC'}
            // strokeOpacity={1}
            strokeWeight={8}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
  
}