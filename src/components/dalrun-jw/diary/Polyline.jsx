import { Polyline } from 'react-naver-maps';
import DiaryGPXData from '../DiaryGPXData';

const MyPolyline = ({ gpxfileSeq }) => {
  const { addGPXData } = DiaryGPXData();

  const handleGPXData = (path) => {
    const newData = {
      gpxfileSeq,
      path,
      clickable: true,
      strokeColor: '#f04da8',
      strokeOpacity: 1,
      strokeWeight: 5,
      onClick: '#74EABC',
    };
    addGPXData(newData);
  };

  return(
    <Polyline path={handleGPXData} />
  );
}
export default MyPolyline;