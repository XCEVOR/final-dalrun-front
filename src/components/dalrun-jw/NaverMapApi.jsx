import { Container as MapDiv, NaverMap, Marker, useNavermaps, Overlay, useMap, Polyline} from 'react-naver-maps';
import React, { useState, useEffect } from 'react';
import MyPolyline from './diary/Polyline';
import { useMemo } from 'react';

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
            naverMap.panTo({ lat: myLocation[0], lng: myLocation[1] });
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


function NaverMapApi(){
  const navermaps = useNavermaps();

  const mapOptions = useMemo(
    () => ({
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
    }),
    []
  );
  return(
    <MapDiv
    style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
    }}>
      {useMemo(()=> {
        return(
          <NaverMap {...mapOptions}>
            <LocationBtn/>
            <MyPolyline/>
          </NaverMap>
        );
      }, [])}
      {/* <NaverMap
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
        <MyPolyline/>
      </NaverMap> */}
    </MapDiv>
  );
}
export default NaverMapApi;