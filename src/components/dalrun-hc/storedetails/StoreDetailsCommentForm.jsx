import React, { useEffect, useState } from "react";
import axios from 'axios';

function StoreDetailsCommentForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [productId, setProductId] = useState('TestProductId');
    const [memId, setMemId] = useState('TestMemId');

    const writeComment = () => {
        if(subject === undefined || subject.trim() === ''){
            alert('제목을 입력해 주십시오');
            return;
        }

        axios.post("http://localhost:3000/writeProductInquiry", null, 
                    { params:{ "inqWriter": name, "inqContent": message, "productId": productId, "memId": memId } })
             .then(res => {
                console.log(res.data);
                if(res.data === "SUCCESS"){
                    alert("성공적으로 등록되었습니다");
                    // history('/bbslist');    // bbslist로 이동
                }else{
                    alert("등록되지 않았습니다");
                }
             })
             .catch(function(err){
                alert(err);
             })   
    }

    // useEffect(function(){
    //     let login = JSON.parse(localStorage.getItem("login"));
    //     setId(login.id);
    // }, []);

    return (
        <div className="dalrun_hc">
        <div className="post-comment-form">
            <h4>Leave a Reply </h4>
            <span>Your email address will not be published.</span>
            <div className="bd-contact-form-wrapper mb-30">
                <form action="#">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bd-contact-field mb-30">
                                <input type="text" placeholder="Name"  value={name}  onChange={(e)=>setName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bd-contact-field mb-30">
                                <input type="email" placeholder="Email"  value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="bd-contact-field mb-30">
                                <input type="text" placeholder="Subject"  value={subject}  onChange={(e)=>setSubject(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="bd-contact-field mb-30">
                                <textarea placeholder="Message"  value={message}  onChange={(e)=>setMessage(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="bd-contact-field">
                                <button type="submit" className="theme-btn" onClick={()=>writeComment()}>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default StoreDetailsCommentForm;