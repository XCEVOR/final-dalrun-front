import { Container as MapDiv, NaverMap, Marker, useNavermaps, Overlay, useMap } from 'react-naver-maps';
import React, { useState } from 'react';

function NaverMapApi(){
  
  return(
    <MapDiv
    style={{
      width: '100%',
      height: '100vh'
    }}>
      <NaverMap/>
    </MapDiv>
  )
}
export default NaverMapApi;