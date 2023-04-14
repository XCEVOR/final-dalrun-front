import React, { useState } from 'react';
import { ZoomControl } from 'react-kakao-maps-sdk';
import { Map } from 'react-kakao-maps-sdk';
import { MapTypeControl } from 'react-kakao-maps-sdk';

const { kakao} = window;

function KakaoMap(){

  const Main = () => {
    return (
      <>
        <Map // 지도를 표시할 Container
          id="map"
          center={{
            // 지도의 중심좌표
            lat: 36.2683,
            lng: 127.6358,
          }}
          style={{
            width: "100%",
            height: "100vh",
          }}
          level={13} // 지도의 확대 레벨
        >
          <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
          <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT}/>
        </Map>
      </>
    )
  }
  return (<Main/>)
}
export default KakaoMap;