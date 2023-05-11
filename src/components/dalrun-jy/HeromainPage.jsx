import React, { useEffect, useState } from "react";


const heroContent = [{
  subTitle1: "폭주기관차",
  detailsDescription: `완주하고 나서 달림 러닝동아리 인스타에서 달림의 일짱이라는 표현을 붙여주었다 ㅎㅎ
  하프마라톤 거리 완주하면서 정말...너무나도 힘들었다.
  그렇지만 완주하고 나니, 내 한계를 뛰어넘어 성장했다는 느낌과 더불어 다른 분들께서도 축하해주시는 모습을 보니 완주하길 잘했다는 생각이 든다!
  다음 목표는 21.0975km 1시간 45분, 또는 30Km 장거리 달리기이다.
  앞으로도 열심히 달려봐야겠다~`,
  img: 'thisweek1'
},
{
  subTitle1: "러닝사랑",
  detailsDescription: `수많은 갈등 끝에 러닝하였습니다.
  장거리 러닝을 1주일에 1회씩 하면서 매번 스스로에게 핑계를 대봅니다.
  미세먼지 때문에, 몸 컨디션 때문에, 수면 부족 때문에.. 오늘은 그냥 패스하자… 라는 악마의 속삭임이 계속됩니다.
  그러나 다시 마음을 붙잡고 집에서 지하철을 타고 도림천역으로 향합니다. 그리고 신정교 밑에서 뛰고 있는 제 자신을 발견합니다.
  오늘 러닝은 약간 힘들었지만 17km 완주 후에 해냈다는 사실만으로 제 자신을 칭찬합니다.`,
  img: 'thisweek2'

},
{
  subTitle1: "Awan",
  detailsDescription: `언제가 될지 모르는 대회참가를 위해 지속적으로 준비를 해야겠다. 
  나름 월 목표를 조금씩 늘려나가며, 건강과 성취감을 모두 챙길 수 있는 그런 런닝생활을 이어 가야할 것이다. 
  이제 지천명을 바라보는 나의 인생에 달리기(跑步)가 함께 하길 바라며… `,
  img: 'thisweek3'

}
];
const HeromainPage = () => {

  const [index, setIndex] = useState(0);
  function alertSet() {
    if (index >= 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }

  }
  useEffect(() => {
    let timer = setTimeout(alertSet, 4000);
  });

  return (

    <div className="row" style={{
      backgroundImage: `url(assets/img/dalrun-jy/${heroContent[index].img}.jpg)`
      , backgroundSize: 'cover', height: '800px',position: 'relative'
    }}>

     

        <footer className="ptf-post__footer"  style={{ backgroundColor: 'rgba(0, 255,133, 0.3 )'
        ,position: 'absolute',bottom:'0%' }}>

          <h2 style={{ color: 'white' ,marginBottom:'50px'}}>
              {heroContent[index].subTitle1} 님 <br />
            </h2>
          <p
            className="
                fz-30
                fw-bold
                lh-1p2
                text-uppercase
                has-white-color
              ">
            {heroContent[index].detailsDescription}
          </p>
            
        </footer>
      </div>




  );
};

export default HeromainPage;
