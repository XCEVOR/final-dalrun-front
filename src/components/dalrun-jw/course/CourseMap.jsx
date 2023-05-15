import { Container as MapDiv, NaverMap, Marker, useNavermaps, Overlay, useMap} from 'react-naver-maps';
import { Polygon } from 'react-naver-maps';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import geoJson from "./AreaData.json"

function CourseMap() {

  const navermaps = useNavermaps();
  const [polygonData, setPolygonData] = useState({});

  useEffect(() => {
    const areaData = geoJson.features;
    const polygons = {};

areaData.forEach((feature) => {
  const { properties, geometry } = feature;
  
  if (geometry.type === 'Polygon') {
    const coordinates = geometry.coordinates[0];
    polygons[properties.CTP_KOR_NM] = [coordinates]; // Wrap in array for consistency
  } else if (geometry.type === 'MultiPolygon') {
    const coordinates = geometry.coordinates.map((polygon) => polygon[0]); // Assuming each polygon is a simple ring
    polygons[properties.CTP_KOR_NM] = coordinates;
  }
});


    setPolygonData(polygons);
  }, []);
  console.log("도시 데이터가 잘 들어갔나~", polygonData);

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
            {Object.keys(polygonData).map((areaName) =>
              polygonData[areaName].map((polygon, index) => (
                <Polygon
                  key={`${areaName}-${index}`}
                  paths={polygon}
                  strokeColor="#004c80"
                  fillColor="#fff"
                  fillOpacity={0.5}
                />
              ))
            )}
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