import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import RelatedPost from "../../../../components/blog/RelatedPost";
import CopyRight from "../../../../components/dalrun-jy/footer/CopyRight";

import HeadermainPage from "../../../../components/dalrun-jy/HeadermainPage";
import CrewComment from "../../../../components/dalrun-pyr/crewBbs/CrewComment";
import '../css/CrewBbsBlogDetils.css';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';	//icons 모듈을 갖고옴

const CrewBbsBlogDetails = () => {
  let history = useNavigate();

  let crewBbsParams = useParams();
  console.log("crewBbsParams : ", crewBbsParams);
  console.log("crewBbsParams.crewSeq : ", crewBbsParams.crewSeq);

  // 로그인 정보
  const [login, setLogin] = useState([]);

  const [crewBbsDetails, setCrewBbsDetails] = useState();
  const [loading, setLoading] = useState(false);
  const [crewSeq, setCrewSeq] = useState(crewBbsParams.crewSeq);
  const [imgid, setImgId] = useState([]);
  const [isJoined, setIsJoined] = useState(false);
  //const [likecount, setLikecount] = useState();
  const [isLiked, setIsLiked] = useState(false);

  const [loginTF, setLoginTF] = useState(false);

  var likecount = 0;

  //좋아요 여부 확인
  const handleGetLike = () => {
    const str = JSON.parse(localStorage.getItem('login'));
    const memId = str.memId;
    axios.post("http://localhost:3000/getllike", {
      memId: memId,
      crewSeq: crewSeq
    })
      .then((response) => {
        console.log(response.data);
        if (response.data === "이미 추천했습니다.") {
          setIsLiked(true);
        } else {
          setIsLiked(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };



  function joinCrew() {
    let memId = login.memId
    console.log(memId + " " + crewSeq)

    axios.post("http://localhost:3000/joinCrew", null, { params: { 'memId': memId, 'crewSeq': crewSeq } })
      .then(function (resp) {
        if (resp.data === 'success') {
          alert("성공적으로 신청이 됐습니다. 리더의 승인을 기다려주세요.");
          setIsJoined(true);
        } else {
          alert("가입 실패")
        }
      }).catch(function (err) {
        console.log(err)
      })
  }

  function OutCrew() {
    axios.post("http://localhost:3000/OutCrew", null, { params: { 'memId': login.memId, 'crewSeq': crewSeq } })
      .then(function (resp) {
        if (resp.data === true) {
          alert("신청이 취소 됐습니다.");
          setIsJoined(false);

        } else {
          alert("취소 실패")
        }
      }).catch(function (err) {
        console.log(err)
      })
  }






  function login_loading() {
    const logindata = JSON.parse(localStorage.getItem('login'));
    if (logindata) {
      console.log(logindata.memId, "님이 접속하였습니다..")
      setLogin(logindata);
      CheckWaiting();
      handleGetLike();
      setLoginTF(true);
    }
  }




  useEffect(() => {

    login_loading();


  }, []);

  useEffect(() => {

    crewBbsDetailsData(crewBbsParams.crewSeq);
    getimgstr();

  }, [crewBbsParams.crewSeq])







  //크루 이미지 리스트
  function getimgstr() {
    axios.get("http://localhost:3000/getimgstr", {
      params: {
        "crewSeq": crewSeq
      }
    })
      .then((res) => {
        const imgid = res.data.split('/');
        setImgId(imgid); //상태 변수 업데이트
        const firstImg = imgid[0];
      });
  }



  function CheckWaiting() {
    axios.get('http://localhost:3000/checkWaiting', { params: { memId: login.memId } })
      .then((resp) => {
        console.log(resp.data);
        if (resp.data === false) {
          setIsJoined(true);
        } else if (resp.data === true) {
          setIsJoined(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const crewBbsDetailsData = (crewSeq) => {
    axios.get('http://localhost:3000/crewBbsBlogDetail', { params: { crewSeq: crewSeq } })
      .then((res) => {
        setCrewBbsDetails(res.data);
        likecount = res.data.likeCount;
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //가입버튼
  const handleJoin = () => {
    joinCrew();

  }

  //가입취소버튼
  const handleCancelJoin = () => {
    OutCrew();

  }


  if (loading === false) {
    return <div>Loading...</div> //show user - randering 
  }

  const updateBbs = () => {
    history("/crewBbsUpdate/" + crewBbsDetails.crewSeq);
  }

  const deleteBbs = () => {
    history("/crewBbsDelete/" + crewBbsDetails.crewSeq);
  }

  //좋아요
  const handleLike = () => {
    const str = JSON.parse(localStorage.getItem('login'));
    const memId = str.memId;
    axios.post("http://localhost:3000/like", {
      memId: memId,
      crewSeq: crewSeq
    })
      .then((response) => {
        console.log(response);
        setIsLiked(true);
        // //alert("성공");
        // alert(response.data);
        // //console.log("likecount ", likecount);
        likecount += 1;
        // //console.log("likecount ", likecount);
        console.log("str", str.memId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //좋아요 취소
  const handleCancelLike = () => {
    const str = JSON.parse(localStorage.getItem('login'));
    const memId = str.memId;
    axios.post("http://localhost:3000/cancellike", {
      memId: memId,
      crewSeq: crewSeq
    })
      .then((response) => {
        console.log(response);
        setIsLiked(false);
        //alert("좋아요 취소 성공");
        //console.log("likecount ", likecount);
        likecount -= 1;
        //console.log("likecount ", likecount);
        // alert(response.data);
        console.log("str", str.memId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // login한 id와 작성자 id와 같을 시에는 버튼을 보여줌
  function UpdateButtonLoad() {
    let str = localStorage.getItem('login');
    let login = JSON.parse(str);

    if (login.memId !== crewBbsDetails.memId) {
      return ""
    }
    return (
      <span>
        &nbsp;<button type="button" onClick={updateBbs} className="btn btn-primary">글 수정</button>
        &nbsp;<button type="button" onClick={deleteBbs} className="btn btn-primary">글 삭제</button>
      </span>
    )
  }


  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>DalrunDalrun - Crew Bbs Details</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeadermainPage />
        {/* End  Header */}

        <div className="main" style={{ textAlign: 'center' }}>
          <article className="ptf-single-post">

            {/* <!--Post Header--> */}
            <header className="ptf-single-post" >
              <h1 className="ptf-single-post__title">
                {/* 크루명 가져오기 */}
                &lt;{crewBbsDetails.type}&gt;
              </h1>
              <div>
                <div id="crewbackground" style={{ backgroundImage: 'url(http://localhost:3000/getimg?imgid=' + imgid[0] }} >
                  <h1 className="ptf-single-post__title crewheader">
                    {crewBbsDetails.crewName}
                  </h1>
                </div>

              </div>
              <div className="container-xxl" >
                <div className="ptf-single-post__meta">
                  {/* 글쓴 회원 아이디 */}
                  <span className="cat">{crewBbsDetails.memId}</span>
                  {/* 글 작성일 */}
                  <span className="date">{crewBbsDetails.crewCreateDate}</span>
                  {/* 조회수 */}
                  <span className="date">조회수 : {crewBbsDetails.readCount}</span><br></br>
                </div>

              </div>

            </header>

            {/* <!--Post Media--> */}

            {/* <!--Post Wrapper--> */}
            <div className="ptf-single-post__wrapper">
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-8 offset-xl-2">
                    {/* <!--Post Info--> */}

                    <div className="ptf-single-post__info">
                      <div className="detailSetup" style={{ maxWidth: '50%' }}> </div>
                      <div>
                        
                      {/* 여백을 위한 추가적인 <div> */}
                      <div style={{ marginTop: '1rem' }}></div>

                      <a className="author A" href="#">
                        <i className="lnil lnil-user"></i> <span>크루소개</span>
                      </a>
                      <Link className="comments A" to={`/crewmember/${crewSeq}`}>
                        <i className="lnil lnil-eye"></i>크루멤버
                      </Link>
                      </div>

                      {loginTF ?
                        <>
                          <div className="A">
                            {login.crewSeq!==0 ?
                              //이미 크루가 존재

                              <p> </p>
                              :
                              // 크루가 없을 때 
                              <>
                                {!isJoined && (
                                  <button className="pyr_crewBnt" onClick={handleJoin}>가입</button>
                                )}
                                {isJoined && (
                                  <button className="pyr_crewBnt" onClick={handleCancelJoin}>가입 취소</button>
                                )}
                              </>


                            }

                          </div>
                          <i className="icons-list A" style={{ marginLeft: '10px' }}>
                            {isLiked ? (
                              <HeartFilled style={{ color: 'red', fontSize: '25px' }} onClick={handleCancelLike}></HeartFilled> //좋아요 취소 - 비어있는 하트
                            ) : (
                              <HeartOutlined style={{ fontSize: '25px' }} onClick={handleLike}></HeartOutlined> //좋아요 - 꽉차있는 하트
                            )}
                            {/* 좋아요  {likecount} */}
                          </i>
                        </>
                        :
                        <div>
                          <div className="A">
                            <a href="/login" style={{ textDecoration: 'underline', color: '#0d6efd', fontSize: '15px', padding: '0.5rem' }}>로그인 하기</a>
                          </div>
                        </div>

                      }
                    </div>

                    {/* <div>
                          {/* <button onClick={handleGetLike}>좋아요 여부 확인</button>
                        </div> */}

                    {/* <!--Post Excerpt--> */}
                    {/* <span className="has-accent-1">Pavel Murren</span> -> 강조*/}
                    {/* title */}
                    <div className="ptf-single-post__excerpt">
                      {crewBbsDetails.title}<br></br>
                      - {crewBbsDetails.crewSetUp}-
                    </div>

                    {/* <!--Post Content--> */}
                    {/* content */}
                    <div className="ptf-single-post__content">
                      {crewBbsDetails.content}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                      ></div>
                      {imgid.map((imgid) => (
                        <img key={imgid} src={`http://localhost:3000/getimg?imgid=${imgid}`} alt="blog post" loading="lazy" />
                      ))}

                      {/* <ImageGridTwo /> */}

                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                      ></div>
                      {/* 수정, 삭제 버튼 show */}
                      {
                        login.length !== 0 ?
                          <UpdateButtonLoad /> :
                          <></>

                      }
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{
                          "--ptf-xxl": "6.25rem",
                          "--ptf-md": "3.125rem",
                        }}
                      ></div>
                    </div>


                    {/* <!--Comments--> */}
                    <section className="ptf-page-comments">
                      {/* <!--Comments list--> */}
                      <div className="ptf-page-comments__list">

                        <CrewComment cBbsSeq={`${crewBbsDetails.crewSeq}`} />
                        {/* <BlogComment /> */}
                      </div>
                    </section>

                    {/* <!--Post Navigation--> */}

                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      {/* End .main */}

      {/* <!--Footer--> */}
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">

          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer>
    </div>
  );
};


export default CrewBbsBlogDetails;