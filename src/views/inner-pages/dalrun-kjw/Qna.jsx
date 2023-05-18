import React, {useState} from "react";
import QnABody from "../../../components/dalrun-jw/qna/QnABody";
import { Helmet } from "react-helmet";

import HeadermainPage from "../../../components/dalrun-jy/HeadermainPage";
import AdminPagination from '../../../components/dalrun-asj/AdminPagination';
import CopyRight from '../../../components/dalrun-jy/footer/CopyRight';
import QnAWrite from '../../../components/dalrun-jw/qna/QnAWrite';

const QnA = () => {
  const [showWriting, setShowWriting] =useState(false);
  const [qnaItems, setQnaItems] = useState({});

  const handleQnAButtonClick = () => {
    setShowWriting(true);
  };

  const handleWritingSubmit = (data) => {
    // 글쓰기 컴포넌트에서 전달된 데이터를 처리하는 로직 작성


    setShowWriting(false);
  };



  return (
    <div className="ptf-site-wrapper animsition ptf-is--works-listing">
        <title>달런 달런</title>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        {/* End  HeaderHomeDefault */}
      <Helmet>
        <title>메인 페이지</title>
      </Helmet>

      <HeadermainPage />
        <div className="main">
          <div className="ptf-page ptf-page--portfolio-listing">
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-10">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">QnA</h1>
                    </div>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem" }}
                ></div>
              </div>
              {/* End .container-xxl */}

              {/*=============================================
                Start Portfolio main 
                ============================================== */}
              <div className="container-xxl">
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="text-center">
                {/* <!--Animated Block--> */}
                {showWriting ? (
                  <QnAWrite onSubmit={handleWritingSubmit} />
                ) : (
                  <div>
                    <QnABody />
                    <button onClick={handleQnAButtonClick}>문의하기</button>
                  </div>
                )}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <a className="ptf-load-more" href="#">
                    More
                  </a> */}
                </div>
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
          </div>
          {/* End .ptf-page */}
        </div>
      </div>
      {/* End .main */}

      {/* <!--Footer--> */}
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
          <div className="ptf-footer__top"></div>
          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
                  
        </div>
      </footer>
    </div>
    // End .ptf-is--blog-grid
  );
};

export default QnA;
