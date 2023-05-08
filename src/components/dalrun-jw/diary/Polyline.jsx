import { Polyline, Marker } from 'react-naver-maps';
import { useDiaryGPXData  } from './DiaryGPXData';

const MyPolyline = () => {

  // const [data, setData] = useState([]);
  // const [param] = useState([]);

  // useInsertionEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios('http://localhost:3000/gpxList',{param}

  //     );
      
  //     setData(result.data);
  //   };

  //   fetchData();
  // }, []);

  // 
  const { gpxData } = useDiaryGPXData();
  console.log('gpxData:', JSON.stringify(gpxData));

  if (!gpxData || Object.keys(gpxData).length === 0){
    return null; // gpxData가 비어있으면 아무것도 렌더링하지 않음
  };
  
  const markers = [];
  const polylines = Object.keys(gpxData).map((fileSeq) => { 
    // Object.keys(gpxData) => gpxData 객체의 모든 키를 배열로 반환하겠디.

    if(!gpxData[fileSeq]) return null;
    console.log('gpxData[fileSeq]는!', gpxData[fileSeq]);

    const path = gpxData[fileSeq][0].map((data) => ({ // gpxData[fileSeq] = gpxData.fileSeq
      lat: data.latitude,
      lng: data.longitude,
    }));

    if (path.length === 0) {
      return null;
    }

    console.log('path:::: ', path);
    console.log('path is empty:', path.length === 0);
    // 각 fileSeq별 마커를 생성합니다.
    markers.push(
      <Marker
        key={`marker_${fileSeq}`}
        position={{ lat: path[0].lat, lng: path[0].lng }}
        icon={{
          url: '/map_marker.png',
          size: { width: 40, height: 40 },
          anchor: { x: 20, y: 40 },
        }}
      />
    );

    return (
      <Polyline
        key={`polyline_${fileSeq}`}
        path={path}
        clickable={true}
        strokeColor="#f04da8"
        strokeOpacity={1}
        strokeWeight={5}
        // onClick="#74EABC"
      />
    );
  });

  return (
    <>
      {markers}
      {polylines}
    </>
  );
};

export default MyPolyline;
