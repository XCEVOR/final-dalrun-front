import React, { useEffect, useState } from "react";
import axios from 'axios';

import { Provider, useSelector, useDispatch } from "react-redux";
import configReduxStore from "../redux/configReduxStore";
import myReduxStore from "../myredux/myReduxStore";

import { PLUS } from "../myredux/countReduxSlice";  // TEST REDUX
import TestReduxLeft from "./StoreDetailsCommentList";  // TEST REDUX
import { configureStore, createSlice } from '@reduxjs/toolkit';  // TEST REDUX


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
        <div>
            <Provider store={configReduxStore}>
                {/* <TestReduxLeft></TestReduxLeft> */}{/*  // TEST REDUX*/}
                {/* <TestReduxRight></TestReduxRight> */}
                <TestReduxRight2></TestReduxRight2>
            </Provider>
        {/*             
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
        */}

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
function TestReduxRight2 () {
    const [checkbox_DisplayMode, setCheckbox_DisplayMode] = useState(true);  // TEST MODE

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [productId, setProductId] = useState('TestProductId');
    const [memId, setMemId] = useState('TestMemId');

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
          inqContent: message,
          productId: productId,
          memId: memId,
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
    }

    const myOnClickFunc = () => {
      writeCommentMain();
      myDispatch( {type: "myCounterInSlice/PLUS", step: 2} );
      storeDetailsCommentSeqDispatch( {type: "storeDetailsCommentSeqInSlice/CommentSeq", seq: 2} );
    }



    return checkbox_DisplayMode 
    // USER_MODE
    ? (
      <>    <input type='checkbox' onClick={() =>(setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE
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


    // DEVELOPER_MODE
    : (
      <>    <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>DEVELOPER_MODE

      </>
    )
}


export default StoreDetailsCommentForm;