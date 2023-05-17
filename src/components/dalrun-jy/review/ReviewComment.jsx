
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

function ReviewComment({ srSeq }) {

    const params = useParams();
    const [scList, setScList] = useState([]);
    const [comment, setComment] = useState("");

    const [login,setLogin]=useState([]);


    const ChangeComment = (e) => setComment(e.target.value);
    function getReviewCommentList(srSeq) {

        axios.get("/getReviewCommentList", { params: { 'srSeq': srSeq } })
            .then(function (resp) {
                console.log(resp.data);
              
                setScList(resp.data);
            }).catch(function (err) {

            })  
    }  

    function sendComment() {

        if (comment === undefined || comment.trim() === '') {
            alert("답글을 입력해주세요");
            return;
        } else {
            
        axios.get("/ReviewsendComment",{params:{'scmemId':login.memId,"sccontent":comment,"srSeq":params.srSeq}})
            .then(function (resp) {
                if(resp.data==='YES'){
                    console.log("답글 전송 완료");
                    setComment("");
                    document.getElementById("inputText").value="";
                    getReviewCommentList(params.srSeq)
                }else{
                    console.log("답글 전송 실패");
                }
               
            }).catch(function (err) {
                console.log(err);
            })
    }
}
    function loading(){
        const logindata=JSON.parse(localStorage.getItem('login'));
        if(logindata){
          console.log(logindata.memId,"님이 접속하였습니다..")
          document.getElementById('textform').style.display='block';
          setLogin(logindata);
        
          
        }
      }
 

    useEffect(() => {
        

        getReviewCommentList(params.srSeq);
        loading();

    }, []);


    useEffect(() => {


    }, [scList]);

    return (
        <div className="container">

            {/* <!--Animated Block--> */}
            <div
                id='textform'
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
                style={{display:'none'}}
            >
            
                <input type="text" id="inputText" placeholder="답글을 달아주세요.." onChange={ChangeComment} style={{maxWidth:'90%',display:'inline'}} />
                <a className='ptf-submit-button ptf-submit-button--style-2' onClick={sendComment}>전송</a>
               
            </div>

            {/* <!--Spacer--> */}
            <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "1.5625rem" }}
            ></div>

            {/* <!--Animated Block--> */}
            <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
            >
            </div>
            <ul className="ptf-comments">
                {scList.map((val, i) => (
                    <li className="ptf-comment-item" key={i}>
                        <div className="ptf-comment-item__inner" key={i}>
                            <div className="ptf-comment-content">
                                <div className="ptf-comment-header">
                                    <h5 className="ptf-comment-name">
                                        <a href="#">{val.scmemId}</a>
                                    </h5>
                                    <div className="ptf-comment-metas">{val.scwdate}</div>
                                </div>
                                <div className="ptf-comment-text">
                                    <p>
                                        {val.sccontent}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </li>

                ))}
                {/* End li */}
            </ul>






        </div>







        // End .ptf-is--blog-grid
    );
}

export default ReviewComment;