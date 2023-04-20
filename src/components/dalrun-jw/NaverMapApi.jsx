import { Container as MapDiv, NaverMap, Marker, useNavermaps, Overlay, useMap} from 'react-naver-maps';
import React, { useState, useRef, useEffect } from 'react';

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
    <div
      style={{
        position: "relative",
      }}
    >
      <button
        onClick={() => {
          if (myLocation) {
            naverMap.panTo({ lat: myLocation[0], lng: myLocation[1] });
            naverMap.setZoom(14);
          } else {
            alert("현재 위치를 가져올 수 없습니다.");
          }
        }}
      >
        현 위치
      </button>
    </div>
  );
}


function NaverMapApi(){
  const navermaps = useNavermaps();
  return(
    <MapDiv
    style={{
      position: 'relative',
      width: '100%',
      height: '100vh'
    }}>
      <NaverMap
        // 로드 시 위치
        defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
        // 로드 시 줌
        defaultZoom={7}
        // 좌측 하단 네이버 Corp 
        mapDataControl={true}
        // 일반 or 위성
        mapTypeControl
        mapTypeControlOptions={{
          position: navermaps.Position.RIGHT_TOP,
        }}
        // 줌 버튼
        zoomControl={true}
        zoomControlOptions={{
          position: navermaps.Position.RIGHT_CENTER,
          style: navermaps.ZoomControlStyle.SMALL,
        }}
      >
        <LocationBtn/>
      </NaverMap>
    </MapDiv>
  )
}
export default NaverMapApi;