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

  const [center, setCenter] = useState({ lat: 37.3595704, lng: 127.105399 })
  const [zoom, setZoom] = useState(7);

  const calculateCenterAndZoom = (path) => {
    let minLat = 40;
    let maxLat = 0;
    let minLng = 130;
    let maxLng = 0;
  
    path.forEach(({ lat, lng }) => {
      minLat = Math.min(minLat, lat);
      maxLat = Math.max(maxLat, lat);
      minLng = Math.min(minLng, lng);
      maxLng = Math.max(maxLng, lng);
    });
  
    const centerLat = (minLat + maxLat) / 2;
    const centerLng = (minLng + maxLng) / 2;
  
    return { center: { lat: centerLat, lng: centerLng }, zoom: 7 };
  };

  useEffect(() => {
    if (gpxData && Object.keys(gpxData).length > 0) {
      const path = gpxData[Object.keys(gpxData)[0]];
      const { center, zoom } = calculateCenterAndZoom(path);
      setCenter(center);
      setZoom(zoom);
    }
  }, [gpxData]);

  const mapOptions = useMemo(
    () => ({
      // defaultCenter: new navermaps.LatLng(37.3595704, 127.105399),
      // defaultZoom: 7,
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
          <NaverMap {...mapOptions} center={center} zoom={zoom}>
            <LocationBtn/>
            <MyPolyline gpxData={gpxData} />
          </NaverMap>
        );
      }, [])}
    </MapDiv>
  );
}
export default NaverMapApi;