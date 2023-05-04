import { Container as MapDiv, NaverMap, Marker, useNavermaps, Overlay, useMap, Polyline} from 'react-naver-maps';



const NaverMapView =({mapLat, mapLng})=> {
    return (
        <>
        <MapDiv
                style={{
                  height: 400,
                }}
              >
                <NaverMap
                    id="react-naver-maps"
                    style={{ width: '100%', height: '100vh' }}
                    center={{ lat: mapLat, lng: mapLng }}
                >
                    <Marker position={{ lat: mapLat, lng: mapLng }}/>
                </NaverMap>
                </MapDiv>
        </>
    )
}

export default NaverMapView;