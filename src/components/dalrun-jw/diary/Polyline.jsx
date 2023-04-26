import { Polyline } from 'react-naver-maps';

const MyPolyline = () => {

  return(
    <Polyline
      path={[
        {lat:37.544229 , lng:127.217261},
        {lat:37.545284 , lng:127.218261},
        {lat:37.546229 , lng:127.219261},
        {lat:37.547229 , lng:127.220261},
        {lat:37.548229 , lng:127.221261},
      ]}
      clickable={true}
      strokeColor={'#f04da8'}
      strokeOpacity={1}
      strokeWeight={10}
      onClick={'#74EABC'}
      />

  )
}
export default MyPolyline;