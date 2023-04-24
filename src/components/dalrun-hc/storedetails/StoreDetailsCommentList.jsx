import React, { useEffect, useState } from "react";
import axios from 'axios';

function StoreDetailsCommentList() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [productId, setProductId] = useState('TestProductId');
    const [memId, setMemId] = useState('TestMemId');
    const [productCode, setProductCode] = useState('Test_ProductCode');

    const [loading, setLoading] = useState(false);

    const [inquiryList, setInquiryList] = useState([]);

    const getCommentList = (productCode) => {
        axios.post("http://localhost:3000/getProductInquiry", null, 
                    { params:{ "productCode": productCode } })
             .then(res => {
                console.log(res.data);
                setInquiryList(res.data);
                // if(res.data === "SUCCESS"){
                //     alert("성공적으로 등록되었습니다");
                //     // history('/bbslist');    // bbslist로 이동
                // }else{
                //     alert("등록되지 않았습니다");
                // }
                setLoading(true);  // 이 코드 전에는 div에 productDetails.productName 등등 적용안됨.
             })
             .catch(function(err){
                alert(err);
             })   
    }

    useEffect(() => {
        getCommentList(productCode);
      }, [productCode])
    
      if(loading === false){
        return <div>Loading...</div>
      }
  

    return (
        <div className="post-comments mb-95">
        <div className="post-comment-title mb-40">
            <h3>3 Comments</h3>
        </div>
        <div className="latest-comments">
            <ul>
                <li>
                    <div className="comments-box">
                        <div className="comments-avatar">
                            <img src="assets/img/blog/blog-sm-6.png" className="img-fluid" alt="img"/>
                        </div>
                        <div className="comments-text">
                            <div className="avatar-name">
                                <h5>프론트: David Angel Makel</h5>
                                <span className="post-meta">February 26, 2022</span>
                            </div>
                            <p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nut argy bargy vagabond buggered dropped.</p>
                            <a href="#" className="comment-reply"><i className="fal fa-reply"></i> Reply</a>
                        </div>
                    </div>
                </li>
                <li className="children">
                    <div className="comments-box">
                        <div className="comments-avatar">
                            <img src="assets/img/blog/blog-sm-7.png" className="img-fluid" alt="img"/>
                        </div>
                        <div className="comments-text">
                            <div className="avatar-name">
                                <h5>프론트: Bailey Wonger</h5>
                                <span className="post-meta">February 20, 2022</span>
                            </div>
                            <p>Do one say wind up buggered bobby bite your arm off gutted mate, David victoria sponge cup of char chap fanny around.</p>
                            <a href="#" className="comment-reply"><i className="fal fa-reply"></i> Reply</a>
                        </div>
                    </div>
                </li>
                <li className="children">
                    <div className="comments-box">
                        <div className="comments-avatar">
                            <img src="assets/img/blog/blog-sm-8.png" className="img-fluid" alt="img"/>
                        </div>
                        <div className="comments-text">
                            <div className="avatar-name">
                                <h5>프론트: Hilary Ouse</h5>
                                <span className="post-meta">February 21, 2022</span>
                            </div>
                            <p>Baking cakes is cobblers wellies William geeza bits and bobs what a plonker it's your round,</p>
                            <a href="#" className="comment-reply"><i className="fal fa-reply"></i> Reply</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        {inquiryList.map((inq, index) => (
        <div className="latest-comments">
            <ul>
                <li>
                    <div className="comments-box">
                        <div className="comments-avatar">
                            <img src="assets/img/blog/blog-sm-6.png" className="img-fluid" alt="img"/>
                        </div>
                        <div className="comments-text">
                            <div className="avatar-name">
                                <h5>서버: {inq.inqWriter}</h5>
                                <span className="post-meta">{inq.inqDate}</span>
                            </div>
                            <p>{inq.inqContent}</p>
                            <a href="#" className="comment-reply"><i className="fal fa-reply"></i> Reply</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        ))}
    </div>
    )

}

export default StoreDetailsCommentList;

