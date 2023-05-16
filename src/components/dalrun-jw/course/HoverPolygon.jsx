import React,{useState, useRef} from 'react';
import { Container as MapDiv, useNavermaps, InfoWindow, Polygon} from 'react-naver-maps';

function HoverPolygon({ paths, strokeColor, fillColor, fillOpacity, name, position }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const navermaps = useNavermaps();

  return (
    <>
      <Polygon
        paths={paths}
        strokeColor={strokeColor}
        fillColor={fillColor}
        fillOpacity={fillOpacity}
        onMouseover={()=>setShowOverlay(true)}
        onMouseout={() => setShowOverlay(false)}
        onClick={() => alert(`${name}`)}
        clickable={true}
      />
      {showOverlay && (
        <InfoWindow
          position={new navermaps.LatLng(position.lat, position.lng)}
          content={name}
        />
      )}
    </>
  );
}
export default HoverPolygon;
