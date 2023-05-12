import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import BlogCommentForm from "../../../../components/blog/BlogCommentForm";
import RelatedPost from "../../../../components/blog/RelatedPost";
import CopyRight from "../../../../components/footer/copyright/CopyRight";
import Footer from "../../../../components/footer/Footer";
import Header from "../../../../components/dalrun-pyr/Header";
import CrewComment from "../../../../components/dalrun-pyr/crewBbs/CrewComment";
import '../css/CrewBbsBlogDetils.css';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

const CrewBbsBlogDetails = () => {
  let history = useNavigate();
  
    let crewBbsParams = useParams();
    console.log("crewBbsParams : ", crewBbsParams);
    console.log("crewBbsParams.crewSeq : ", crewBbsParams.crewSeq);
  
    const [crewBbsDetails, setCrewBbsDetails]= useState();
    const [loading, setLoading] = useState(false);
    const [crewSeq, setCrewSeq] = useState(crewBbsParams.crewSeq);
    const [imgid, setImgId] = useState([]);
    
    //const [likecount, setLikecount] = useState(crewBbsParams.likeCount);
    const [isLiked, setIsLiked] = useState(false);
    var likecount = 0;
  
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
  
    useEffect(() => {
      handleGetLike();
    }, []);
  
    useEffect(()=> {
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

    const crewBbsDetailsData = (crewSeq) => {
      axios.get('http://localhost:3000/crewBbsBlogDetail', {params:{crewSeq: crewSeq}})
        .then((res) => {
          setCrewBbsDetails(res.data);
          likecount = res.data.likeCount;
          setLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
  
    if(loading === false){
      return <div>Loading...</div> //show user - randering 
    }
  
    const updateBbs = () => {
      history("/crewBbsUpdate/" + crewBbsDetails.crewSeq);
  }
  
    const deleteBbs = () => {
      history("/crewBbsDelete/" + crewBbsDetails.crewSeq);
    }
  
    // const handleLike = () => {
    //   const str = JSON.parse(localStorage.getItem('login'));
    //   const memId = str.memId;
    //   axios.post("http://localhost:3000/like", {
    //         memId: memId,
    //         crewSeq: crewSeq
    //     })
    //     .then((response) => {
    //       console.log(response);
    //       setIsLiked(true);
    //       //alert("성공");
    //       alert(response.data);
    //       setLikecount(likecount+1);
    //       console.log("str", str.memId);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };

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
          //alert("성공");
          alert(response.data);
          likecount += 1;
          console.log("str", str.memId);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    // const handleCancelLike = () => {
    //  const str = JSON.parse(localStorage.getItem('login'));
    //  const memId = str.memId;
    //   axios.post("http://localhost:3000/cancellike", {
    //         memId: memId,
    //         crewSeq: crewSeq
    //     })
    //     .then((response) => {
    //       console.log(response);
    //       setIsLiked(false);
    //       //alert("좋아요 취소 성공");
    //       setLikecount(likecount-1);
    //       alert(response.data);
    //       console.log("str", str.memId);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };

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
           likecount -= 1;
           alert(response.data);
           console.log("str", str.memId);
         })
         .catch((error) => {
           console.log(error);
         });
     };
  
    // login한 id와 작성자 id와 같을 시에는 버튼을 보여줌
    function UpdateButtonLoad(){
      let str = localStorage.getItem('login');
      let login = JSON.parse(str);
  
      if(login.memId !== crewBbsDetails.memId){
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
          <Header />
          {/* End  Header */}
  
          <div className="main">
            <article className="ptf-single-post">
              {/* <!--Post Header--> */}
              <header className="ptf-single-post__header ptf-single-post__header--style-1">
                <div className="container-xxl">
                  <h1 className="ptf-single-post__title">
                    {/* 크루명 가져오기 */}
                    &lt;{crewBbsDetails.type}&gt;<br></br>{crewBbsDetails.crewName}
                  </h1>
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
              <div className="ptf-single-post__media">
                <div className="container-xxl">
                  {/* 크루 대표 이미지 -> 글작성시 첨부한 이미지 */}
                     <img src={"http://localhost:3000/getimg?imgid=" + imgid[0]} alt="blog post" loading="lazy" />
                </div>
              </div>
              <div className="ptf-single-post__excerpt">
                      {crewBbsDetails.crewSetUp}
                      </div>
              {/* <!--Post Wrapper--> */}
              <div className="ptf-single-post__wrapper">
                <div className="container-xxl">
                  <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                      {/* <!--Post Info--> */}
                      <div className="ptf-single-post__info">
                        <a className="author" href="#">
                          <i className="lnil lnil-user"></i> <span>크루소개</span>
                        </a>
                        <a className="view" href="#">
                          <i className="lnil lnil-eye"></i>크루멤버
                        </a>
                        <button className="pyr_crewBnt">가입</button>
                        <a className="report" href="#">
                          <i className="lnil lnil-warning"></i>좋아요  {likecount}
                          {/* <i className="lnil lnil-warning"></i>좋아요  {lc} */}
                          {/* <LikeButton /> */}
                        </a>
                      </div>
  
                        <div>
                          {isLiked ? (
                            <button onClick={handleCancelLike}>좋아요 취소</button>
                          ) : (
                            <button onClick={handleLike}>좋아요</button>
                          )}
                          <button onClick={handleGetLike}>좋아요 여부 확인</button>
                        </div>
  
                      {/* <!--Post Excerpt--> */}
                      {/* <span className="has-accent-1">Pavel Murren</span> -> 강조*/}
                      {/* title */}
                      <div className="ptf-single-post__excerpt">
                      {crewBbsDetails.title}
                      </div>
  
                      {/* <!--Post Content--> */}
                      {/* content */}
                      <div className="ptf-single-post__content">
                        {crewBbsDetails.content}
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                        ></div>
                        {/* 이미지 리스트 뿌리기 */}
                      {/* {imgid.map((img) => (
                     <img src={"http://localhost:3000/getimg?imgid=" + img} alt="blog post" loading="lazy" />
                  ))} */}
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
                        <UpdateButtonLoad />
                        {/* <!--Spacer--> */}
                        <div
                          className="ptf-spacer"
                          style={{
                            "--ptf-xxl": "6.25rem",
                            "--ptf-md": "3.125rem",
                          }}
                        ></div>
                      </div>
  
                      {/* <!--About Author--> */}
                      {/* <BlogPostAuthor /> */}
                      {/* End .ptf-about-author */}
  
                      {/* <!--Related Posts--> */}
                      <div className="ptf-related-posts">
                        <h2 className="ptf-related-posts__title">
                          Related Posts
                        </h2>
                        <div className="ptf-isotope-grid">
                          <div
                            className="row"
                            style={{ "--bs-gutter-y": "2rem" }}
                          >
                            <RelatedPost />
                          </div>
                        </div>
                      </div>
                      {/* End .ptf-related-posts */}
  
                      {/* <!--Comments--> */}
                      <section className="ptf-page-comments">
                        {/* <!--Comments list--> */}
                        <div className="ptf-page-comments__list">
                          <h2 className="ptf-page-comments__title">
                            Comments:
                          </h2>
                          <CrewComment cBbsSeq={`${crewBbsDetails.crewSeq}`} />
                          {/* <BlogComment /> */}
                        </div>
  
                        {/* <!--Comments form--> */}
                        <div className="ptf-page-comments__form">
                          <h2 className="ptf-page-comments__title">
                            Leave a comment:
                          </h2>
                          <BlogCommentForm />
                        </div>
                      </section>
  
                      {/* <!--Post Navigation--> */}
                      <div className="ptf-post-navigation ptf-post-navigation--style-1">
                        <span>Next Post</span>
                        <Link className="h1 ptf-filled-link" to="/blog-details-sidebar">
                          Minimalist Trends
                        </Link>
                      </div>
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
            <div className="ptf-footer__top">
              <Footer />
            </div>
            <div className="ptf-footer__bottom">
              <CopyRight />
            </div>
          </div>
        </footer>
      </div>
    );
  };
  

export default CrewBbsBlogDetails;