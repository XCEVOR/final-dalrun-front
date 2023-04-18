import React from "react";

const heroContent = {
  title: "이 주의 러너",
  subTitle1: "abcd",
  detailsDescription: `완주하고 나서 달림 러닝동아리 인스타에서 달림의 일짱이라는 표현을 붙여주었다 ㅎㅎ
  하프마라톤 거리 완주하면서 정말...너무나도 힘들었다.
  그렇지만 완주하고 나니, 내 한계를 뛰어넘어 성장했다는 느낌과 더불어 다른 분들께서도 축하해주시는 모습을 보니 완주하길 잘했다는 생각이 든다!
  다음 목표는 21.0975km 1시간 45분, 또는 30Km 장거리 달리기이다.
  앞으로도 열심히 달려봐야겠다~`,
};

const HeromainPage = () => {
  return (
    <div className="row">
      <div className="col-xl-12">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <h1 className="fz-25 fz-130--lg fz-90--md">{heroContent.title}</h1>
        </div>
        {/* <!--Spacer--> */}

        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <p
            className="
                fz-40
                fw-bold
                lh-1p3
                text-uppercase
                has-white-color
              "
          >
            {heroContent.subTitle1} 님 <br />

          </p>
        </div>
        {/* <!--Spacer--> */}

        {/* <!--Animated Block--> */}


        <div className="container-xxl">
          <div className="row align-items-center">

            <div className="col-xl-4 offset-xl-1 order-xl-2 text-xl-end text-lg-center position-relative">
              <div className="ptf-custom--1560">
                <div className="ptf-mask-image">
                  <img src='assets/img/dalrun-jy/mainreview.jpg' style={{ paddingBottom: '10px', height: '300px', width: '500px' }} />
                </div>
              </div>
            </div>


            <div className="col-xl-5">
              <div style={{ maxWidth: "545px" }}>
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Divider--> */}
                  <div className="ptf-divider"></div>
                  <p className="fz-15 has-black-color">
                    {heroContent.detailsDescription}
                  </p>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  );
};

export default HeromainPage;
