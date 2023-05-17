import { Container as MapDiv, NaverMap, Marker, useNavermaps, Overlay, useMap} from 'react-naver-maps';
import { Polyline , Polygon, InfoWindow } from 'react-naver-maps';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import geoJson from "./AreaData.json";
import sidoList from './AreaCode';
import HoverPolygon from './HoverPolygon';

function CourseMap({ courseItems, selectedCourse}) {

  const navermaps = useNavermaps();

  const [center, setCenter] = useState({ lat: 37.3595704, lng: 127.105399 });
  const [zoom, setZoom] = useState(7);

  const [gpxData, setGpxData] = useState({});
  const [path, setPath] = useState({});
  const [polygonData, setPolygonData] = useState({});

  useEffect(() => {
    if(courseItems && courseItems.length > 0){

      // 코스 번호에 따른 gpxData 호출
      axios.get('http://localhost:3000/courseGpxList', null, [])
        .then(response => {

          const gpxDataObj = {};
          const pathObj = {};

          response.data.forEach(item => {

            const { courseSeq, latitude, longitude} = item;
            // 아이템 객체의 diarySeq, lat, lng의 값을 변수로 추출해서 선언

            if (gpxDataObj[courseSeq]) {
              gpxDataObj[courseSeq].push(item);
            } else {
              gpxDataObj[courseSeq] = [item];
            }

            if (pathObj[courseSeq]) {
              pathObj[courseSeq].push({ lat: latitude, lng: longitude });
            } else {
              pathObj[courseSeq] = [{ lat: latitude, lng: longitude}];
            }
          });

          setGpxData(gpxDataObj);
          setPath(pathObj);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [courseItems]);

  let centralCoord = {};
  sidoList.forEach(sido => {
    centralCoord[sido.name] = { lat: sido.lat, lng: sido.lng};
    // console.log('centralCoord',centralCoord);
  });

  // 행정구역 별 polygon
  useEffect(() => {
    const areaData = geoJson.features;
    const polygons = {};

    areaData.forEach((feature) => {
      const { properties, geometry } = feature;
      
      if (geometry.type === 'Polygon') {
        const coordinates = geometry.coordinates[0];
        polygons[properties.CTP_KOR_NM] = [coordinates]; 
      } else if (geometry.type === 'MultiPolygon') {
        const coordinates = geometry.coordinates.map((polygon) => polygon[0]);
        polygons[properties.CTP_KOR_NM] = coordinates;
      }
    });
    setPolygonData(polygons);
  }, []);
  // console.log("도시 데이터가 잘 들어갔나~", polygonData);

  
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
        <NaverMap {... mapOptions} >
          <LocationBtn/>
          <MySetCenter selectedCourse={selectedCourse} path={path} />
          {/* {Object.keys(polygonData).map((areaName) =>
            polygonData[areaName].map((polygon, index) => {
              const position = centralCoord[areaName];
              return (
                <HoverPolygon
                  key={`${areaName}-${index}`}
                  paths={polygon.map(coord => new navermaps.LatLng(coord[1], coord[0]))}
                  strokeColor="#004c80"
                  fillColor="#fff"
                  fillOpacity={0.5}
                  name={areaName}
                  position={position}
                />
              );
            })
          )} */}
        </NaverMap>
      </MapDiv>
    )
}
export default CourseMap;


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
            naverMap.setCenter({ lat: myLocation[0], lng: myLocation[1]});
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

function MySetCenter({ selectedCourse, path }) {
  const nMap = useMap();
  const navermaps = useNavermaps();

  useEffect(() => {
    if (selectedCourse) {
      const selectedPath = path[selectedCourse.courseSeq];
      if (selectedPath && selectedPath.length > 0){
        const newCenter = selectedPath[0];
        nMap.setCenter(new navermaps.LatLng(newCenter.lat, newCenter.lng));
        nMap.setZoom(13);
      }
    } else {
      const initCenter = { lat: 37.3595704, lng: 127.105399 };
      nMap.setCenter(new navermaps.LatLng(initCenter.lat, initCenter.lng));
      nMap.setZoom(7);
    }
  }, [selectedCourse, path]);

  return (
    <>
      {Object.entries(path).map(([courseSeq, path]) => {
        if (path && path.length > 0) {
          return (
            <React.Fragment key={courseSeq}>
              <Marker 
                key={`marker-${courseSeq}`} 
                position={path[0]}
                icon={{
                  url: '/map_marker.png',
                  size: { width: 40, height: 40 },
                  anchor: { x: 20, y: 40 },
                }}
              />
              <Polyline
                key={`polyline-${courseSeq}`}
                path={path}
                strokeColor={selectedCourse && selectedCourse.courseSeq === courseSeq ? '#74EABC' : '#000000'}
                strokeWeight={8}
              />
            </React.Fragment>
          );
        }
        return null;
      })}
    </>
  );
  
}
