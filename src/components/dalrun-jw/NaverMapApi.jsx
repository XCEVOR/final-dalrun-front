import { Container as MapDiv, NaverMap, Marker, useNavermaps, Overlay, useMap, Polyline} from 'react-naver-maps';
import React, { useState, useEffect, useMemo } from 'react';
import MyPolyline from './diary/Polyline';
import { useDiaryGPXData } from './diary/DiaryGPXData';


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
  const { gpxData } = useDiaryGPXData();
  console.log('gpxData:', JSON.stringify(gpxData));

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
    }), []
    );
    
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
          <NaverMap {...mapOptions}>
            <LocationBtn/>
            <MyPolyline gpxData={gpxData} />
          </NaverMap>
        );
      }, [])}
    </MapDiv>
  );
}
export default NaverMapApi;