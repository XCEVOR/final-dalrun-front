import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

import { Provider, useSelector, useDispatch } from "react-redux";
import configReduxStore from "../redux/configReduxStore";
import myReduxStore from "../myredux/myReduxStore";

import { PLUS } from "../myredux/countReduxSlice";  // TEST REDUX
import TestReduxLeft from "./StoreDetailsCommentList";  // TEST REDUX
import { configureStore, createSlice } from '@reduxjs/toolkit';  // TEST REDUX

import CommentAppContext from "../../../views/inner-pages/dalrun-chc/store/StoreAppContext";


function StoreDetailsCommentForm() {
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
// ===> ../myredux/countReduxSlice.jsx
// const countReduxSlice = createSlice({
//     name: "myCounterInSlice",
//     initialState: {number: 0},
//     reducers: {
//         PLUS: (state, action) => {
//             console.log("  @@ console.log(action); ", action);
//             state.number = state.number + action.step;
//         }
//     }
// })


////////// ////////// ////////// ////////// ////////// 
// ===> ../myredux/myReduxStore.jsx
// const myReduxStore = configureStore({
//     reducer: {
//         myCounterInConfigureStore: countReduxSlice.reducer
//     }
// })


////////// ////////// ////////// ////////// ////////// 
// ===> ./StoreDetailsCommentList.jsx
// function TestReduxLeft () {

//     const number = useSelector(state => state.myCounterInConfigureStore.number)

//     return (
//         <div>
//             <h1>TEST REDUX LEFT: {number}</h1>
//         </div>
//     )
// }


////////// ////////// ////////// ////////// ////////// 
// ===> ./StoreDetailsCommentForm.jsx
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
    console.log(" console.log(props.productCode);", props.prodParams.productCode);

    let storage_memId = "x";
    let storage_memEmail = "x";
    let json_login = localStorage.getItem("login");
    if (json_login === null) {
        storage_memId = "user01test";
        storage_memEmail = "user@email.com";
    }
    else {
        storage_memId = JSON.parse(json_login).memId;
        storage_memEmail = JSON.parse(json_login).email;
    }

    const [name, setName] = useState(storage_memId);
    const [email, setEmail] = useState(storage_memEmail);
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [productId, setProductId] = useState('TestProductId');
    const [memId, setMemId] = useState('TestMemId');

    const { setCommentContxData } = useContext(CommentAppContext);


    const myDispatch = useDispatch();
    const storeDetailsCommentSeqDispatch = useDispatch();

    const sliceInqSeq = useSelector(state => state.storeDetailsCommentSeqInConfigureStore.sliceInqSeq)
    const [inqSeq, setInqSeq] = useState(sliceInqSeq);

    const writeCommentMain = () => {
    if(subject === undefined || subject.trim() === ''){
        alert('제목을 입력해 주십시오');
        return;
    }

    axios
      .post("http://localhost:3000/writeProductInquiryRefDepth", null, {
        params: {
          inqDepth: 0,
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
          setSubject("");
          setMessage("");
        } else {
          alert("등록되지 않았습니다");
        }
      })
      .catch(function (err) {
        alert(err);
      });   
    }

    useEffect (() => {
    }, [setCommentContxData])

    const myOnClickFunc = () => {
      writeCommentMain();
      myDispatch( {type: "myCounterInSlice/PLUS", step: 2} );
      storeDetailsCommentSeqDispatch( {type: "storeDetailsCommentSeqInSlice/CommentSeq", seq: 2} );
      setCommentContxData(prev => !prev);
    }



    return checkbox_DisplayMode 
    // USER_MODE
    ? (
      <>    <input type='checkbox' onClick={() =>(setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE
        <div>
            <div className="post-comment-form">
            <h4 className="inquiry_regi_form_title">문의 사항을 남겨주세요</h4>
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
                                <textarea placeholder="내용을 입력하세요"  value={message}  onChange={(e)=>setMessage(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="bd-contact-field">
                                <button className="inquiry_regi_btn" type="submit" onClick={myOnClickFunc}>등록</button>
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
            <h1>TEST REDUX RIGHT</h1>
            <input type="button" value="  // TEST REDUX +2" onClick={() => myDispatch( {type: "myCounterInSlice/PLUS", step: 2} )}></input>

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


export default StoreDetailsCommentForm;