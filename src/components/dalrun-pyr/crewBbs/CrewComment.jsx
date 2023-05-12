import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";

function CrewComment({crewSeq}) {
    const history = useNavigate();

    const params = useParams();
    const [commentList, setCommentList] = useState([]);
    const [comment, setComment] = useState("");
    
    const [login, setLogin] = useState([]);

    const ChangeComment = (e) => setComment(e.target.value);

    function getCrewBbsCommentList(crewSeq){
        axios.get("http://localhost:3000/getCrewBbsCommentList", {params: {"crewSeq":crewSeq}})
        .then(function(res){
            console.log(res.data);

            setCommentList(res.data);
        }).catch(function(err){
            alert(err);
        })
    }
    
    function writeComment() {
        if(comment === undefined || comment.trim() === ""){
            alert("댓글을 입력해주세요");
            return;
        }else {
            axios.get("http://localhost:3000/writeCrewBbsComment", {params:{"cbMemId":login.memId, "cbContent":comment, "crewSeq":params.crewSeq}})
            .then(function(res){
                if(res.data ==="YES"){
                    alert("댓글 작성 성공");
                    setComment("");
                    document.getElementById("inputText").value="";
                    getCrewBbsCommentList(params.crewSeq)
                }else {
                    alert("댓글 작성에 실패했습니다");
                }
            }).catch(function(err){
                alert(err);
                alert(login.memId);
                alert(comment);
                alert(params.crewSeq);
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
        getCrewBbsCommentList(params.crewSeq);
        loading();
    }, []);

    useEffect(()=> {
    }, [commentList]);


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
                <a className='ptf-submit-button ptf-submit-button--style-2' onClick={writeComment}>전송</a>
               
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
                {commentList.map((val, i) => (
                    <li className="ptf-comment-item" key={i}>
                        <div className="ptf-comment-item__inner" key={i}>
                            <div className="ptf-comment-content">
                                <div className="ptf-comment-header">
                                    <h5 className="ptf-comment-name">
                                        <a href="#">{val.cbMemId}</a>
                                    </h5>
                                    <div className="ptf-comment-metas">{val.cbWdate}</div>
                                </div>
                                <div className="ptf-comment-text">
                                    <p>
                                        {val.cbContent}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </li>

                ))}
                {/* End li */}
            </ul>
        </div>
    );
}

export default CrewComment;