import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

import { Provider, useSelector, useDispatch } from "react-redux";
import configReduxStore from "../redux/configReduxStore";
import myReduxStore from "../myredux/myReduxStore";

import { PLUS } from "../myredux/countReduxSlice";  // TEST REDUX
import TestReduxLeft from "./StoreDetailsCommentList";  // TEST REDUX
import { configureStore, createSlice } from '@reduxjs/toolkit';  // TEST REDUX


function StoreDetailsCommentSubForm() {
    let prodParams = useParams();

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
        <div>
            <Provider store={configReduxStore}>
                <TestReduxRight2 prodParams={prodParams}></TestReduxRight2>
            </Provider>
        </div>
    )
}





////////// ////////// ////////// ////////// ////////// 
// ===> ./StoreDetailsCommentSubForm.jsx
function TestReduxRight () {    const [name, setName] = useState('');

    const myDispatch = useDispatch();

    return (
        <div>
            <h1>TEST REDUX RIGHT</h1>
            <input type="button" value="  // TEST REDUX +2" onClick={() => myDispatch( {type: "myCounterInSlice/PLUS", step: 2} )}></input>
        </div>
    )
}














////////// ////////// ////////// ////////// ////////// 
// ===> COMMENT
function TestReduxRight2 (props) {
    const [checkbox_DisplayMode, setCheckbox_DisplayMode] = useState(true);  // TEST MODE

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [productId, setProductId] = useState('TestProductId');
    const [memId, setMemId] = useState('TestMemId');


    const myDispatch = useDispatch();
    const storeDetailsCommentSeqDispatch = useDispatch();
    const storeDetailsCommentRefDispatch = useDispatch();

    const sliceInqSeq = useSelector(state => state.storeDetailsCommentSeqInConfigureStore.sliceInqSeq)
    const [inqSeq, setInqSeq] = useState(sliceInqSeq);
    const sliceInqRef = useSelector(state => state.storeDetailsCommentRefInConfigureStore.sliceInqRef)
    const [inqRef, setInqRef] = useState(sliceInqRef);

    const writeCommentSub = () => {
      if (subject === undefined || subject.trim() === "") {
        alert("제목을 입력해 주십시오");
        return;
      }

      console.log(" SUB FORM inqSubseq: inqSeq, ", inqSeq);
      // console.log(" SUB FORM inqSubseq: inqRef, ", inqRef);

      axios
        .post("http://localhost:3000/writeProductInquiryRefDepthSub", null, {
          params: {
            inqRef: inqRef,
            inqWriter: name,
            inqTitle: subject,
            inqContent: message,
            productId: productId,
            memId: memId,
            productCode: props.prodParams.productCode,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data === "SUCCESS") {
            alert("성공적으로 등록되었습니다");
            // history('/bbslist');    // bbslist로 이동
          } else {
            alert("등록되지 않았습니다");
          }
        })
        .catch(function (err) {
          alert(err);
        });
    };

    const myOnClickFunc = () => {
      writeCommentSub();
      storeDetailsCommentRefDispatch( {type: "storeDetailsCommentRefInSlice/CommentSeq", sliInqRef: 2} );
    }



    return checkbox_DisplayMode 
    // USER_MODE
    ? (
      <>    <input type='checkbox' onClick={() =>(setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE
        <div>

            <div className="post-comment-form">
            <div className="bd-contact-form-wrapper mb-30">
                <form action="#">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bd-contact-field mb-30">
                                <input type="text" placeholder="아이디"  value={name}  onChange={(e)=>setName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bd-contact-field mb-30">
                                <input type="email" placeholder="이메일"  value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="bd-contact-field mb-30">
                                <input type="text" placeholder="제목"  value={subject}  onChange={(e)=>setSubject(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="bd-contact-field mb-30">
                                <textarea placeholder="내용"  value={message}  onChange={(e)=>setMessage(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="bd-contact-field">
                                <button type="submit" onClick={myOnClickFunc}>등록</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </>
    )


    // DEVELOPER_MODE
    : (
      <>    <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>DEVELOPER_MODE
        <div>
            <h1>TEST REDUX SUB RIGHT</h1>
            <h2>{sliceInqSeq}, {sliceInqRef}</h2>
            <input type="button" value="  // TEST REDUX +2" onClick={() => storeDetailsCommentSeqDispatch( {type: "storeDetailsCommentSeqInSlice/CommentSeq", step: 2} )}></input>
            <input type="button" value="  // TEST REDUX +2" onClick={() => myDispatch( {type: "myCounterInSlice/PLUS", step: 2} )}></input>
            <input type="button" value="  // TEST REDUX +2" onClick={() => ( console.log("clicked"))}></input>

            <div className="post-comment-form">
            <h4>StoreDetailsCommentSubForm</h4>
            <span>StoreDetailsCommentSubForm</span>
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
                                <button type="submit" className="theme-btn" onClick={myOnClickFunc}>Submit test</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
      </>
    )
}


export default StoreDetailsCommentSubForm;