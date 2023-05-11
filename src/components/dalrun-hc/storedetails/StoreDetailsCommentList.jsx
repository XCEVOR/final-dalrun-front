import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

import { Provider, useSelector, useDispatch } from "react-redux";
import myReduxStore from "../myredux/myReduxStore";
import configReduxStore from "../redux/configReduxStore";
import StoreDetailsCommentForm from "./StoreDetailsCommentForm";
import StoreDetailsCommentSubForm from "./StoreDetailsCommentSubForm";

import CommentAppContext from "../../../views/inner-pages/dalrun-chc/store/StoreAppContext";



function StoreDetailsCommentList() {
    let prodParams = useParams();

    const [checkbox_DisplayMode, setCheckbox_DisplayMode] = useState(true);  // TEST MODE

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [productId, setProductId] = useState('TestProductId');
    const [memId, setMemId] = useState('TestMemId');
    const [productCode, setProductCode] = useState('Test_ProductCode');

    const [loading, setLoading] = useState(false);

    const [inquiryList, setInquiryList] = useState([]);
    const [isOffReply, setIsOffReply] = useState(true);
    // const myDispatch = useDispatch();


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
  
    const onClickReply = () => {
        
        setIsOffReply(!isOffReply)
        
    }

    // const testest = () => {
        
    //     myDispatch( {type: "myCounterInSlice/PLUS", step: 2} );
    // }


    return checkbox_DisplayMode 
    // USER_MODE
    ? (
      <><input type='checkbox' onClick={() =>(setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE
        <div>

        <div className="post-comments mb-95">
            
            <Provider store={configReduxStore}>
                <TestReduxLeft2 prodParams={prodParams}></TestReduxLeft2>
            </Provider>

        </div>
    </div>
    </>
    )


    // DEVELOPER_MODE
    : (
      <><input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>DEVELOPER_MODE
        <div>

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
                                <button onClick={onClickReply}>댓글 onoff</button>
                                {isOffReply ? <div></div> : <div><StoreDetailsCommentForm /></div>}
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
            {/* 
            {inquiryList.map((inq, index) => (
            <div className="latest-comments" key={index}>
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
            */}
            {/* <Provider store={myReduxStore}> */}
                {/* <TestReduxLeft></TestReduxLeft> */}
                {/* <TestReduxLeft2></TestReduxLeft2> */}
            {/* </Provider> */}
            <Provider store={configReduxStore}>
                {/* <TestReduxLeft></TestReduxLeft> */}
                <TestReduxLeft2 prodParams={prodParams}></TestReduxLeft2>
            </Provider>

        </div>
        </div>
      </>
    )

}



// ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== 


// function TestReduxLeft () {

//     const number = useSelector(state => state.myCounterInConfigureStore.number)

//     return (
//         <div>
//             <h1>TEST REDUX LEFT: {number}</h1>
//         </div>
//     )
// }

function TestReduxLeft2 (props) {
    const [checkbox_DisplayMode, setCheckbox_DisplayMode] = useState(true);  // TEST MODE

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [productId, setProductId] = useState('TestProductId');
    const [memId, setMemId] = useState('TestMemId');
    const [productCode, setProductCode] = useState('Test_ProductCode');

    const [loading, setLoading] = useState(false);

    const [inquiryList, setInquiryList] = useState([]);
    const [isOffReply, setIsOffReply] = useState(true);
    const [selectedReply, setSelectedReply] = useState(0);

    const storeDetailsCommentSeqDispatch = useDispatch();
    const storeDetailsCommentRefDispatch = useDispatch();

    const { commentContxData } = useContext(CommentAppContext);
    const [commentContxDataState, setCommentContxDataState] = useState(null);


    // const number = useSelector(state => state.myCounterInConfigureStore.number)
    const sliceInqSeq = useSelector(state => state.storeDetailsCommentSeqInConfigureStore.sliceInqSeq)


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
        setCommentContxDataState(false)
    }, [productCode, sliceInqSeq, commentContxData])

    if(loading === false){
        return <div>Loading...</div>
    }


    const onClickReply = (eve) => {
        setSelectedReply(Number(eve.target.value))

        setIsOffReply(!isOffReply)
        storeDetailsCommentRefDispatch( {type: "storeDetailsCommentRefInSlice/CommentRef", sliInqRef: Number(eve.target.value)} )
        console.log("eve.target.value", Number(eve.target.value))
        console.log(" console.log (commentContxData)", commentContxData)
        setCommentContxDataState(prev => !prev)
    }


    return checkbox_DisplayMode 
    // USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ 
    ? (
      <>    <input type='checkbox' onClick={() =>(setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE
        <div>
            {inquiryList.map((inq, index) => (
            <div className="latest-comments" key={index}>
                <ul>

                {inq.productCode !== props.prodParams.productCode 
                ? <div></div> 
                : <div> 
                    {inq.inqDepth === 0 
                      ?
                      <li>
                          <div className="comments-box">
                              <div className="comments-avatar">
                                  <img src="assets/img/blog/blog-sm-6.png" className="img-fluid" alt="img"/>
                              </div>
                              <div className="comments-text">
                                  <div className="avatar-name">
                                      <h5>MAIN: {inq.inqTitle}</h5>
                                      <span className="post-meta">{inq.inqWriter} //</span>
                                      <span className="post-meta"> {inq.inqDate}</span>
                                  </div>
                                  <p>{inq.inqContent}</p>


                                  {Number(inq.inqSeq) !== Number(inq.inqRef) 
                                      ? <div>inqSeq: {inq.inqSeq}, inqSubseq: {inq.inqSubseq} , inqRef: {inq.inqRef} , inqDepth: {inq.inqDepth}</div> 
                                      : <button value={inq.inqRef} onClick={onClickReply}>댓글 달기</button>
                                  }
                                  {commentContxDataState
                                  ? <div> {selectedReply !== Number(inq.inqSeq) ? <div></div> : <div><StoreDetailsCommentSubForm /> </div>}
                                  </div> 
                                  : <div>  </div>}

                              </div>
                          </div>
                      </li>

                      :
                      <li className="children">
                          <div className="comments-box">
                              <div className="comments-avatar">
                                  <img src="assets/img/blog/blog-sm-7.png" className="img-fluid" alt="img"/>
                              </div>
                              <div className="comments-text">
                                  <div className="avatar-name">
                                      <h5>SUB: {inq.inqTitle}</h5>
                                      <span className="post-meta">{inq.inqWriter} //</span>
                                      <span className="post-meta"> {inq.inqDate}</span>
                                  </div>
                                  <p>{inq.inqContent}</p>

                                  {Number(inq.inqSeq) !== Number(inq.inqRef) 
                                      ? <div>inqSeq: {inq.inqSeq}, inqSubseq: {inq.inqSubseq} , inqRef: {inq.inqRef} , inqDepth: {inq.inqDepth}</div> 
                                      : <button value={inq.inqRef} onClick={onClickReply}>inqSeq: {inq.inqSeq}, inqSubseq: {inq.inqSubseq}, inqRef: {inq.inqRef}, inqDepth: {inq.inqDepth} 댓글 onoff</button>
                                  }
                                  {selectedReply !== Number(inq.inqSeq) ? <div></div> : <div><StoreDetailsCommentSubForm /></div>}


                              </div>
                          </div>
                      </li>
                    }
                </div>
                }
                </ul>
            </div>
            ))}
            
        </div>
        </>
    )


    // DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ 
    : (
      <>    <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>DEVELOPER_MODE
        <div>
            <h1>TEST REDUX LEFT: {sliceInqSeq}</h1>
            {commentContxDataState ? <div>열림</div> : <div>닫힘</div>}
            {inquiryList.map((inq, index) => (
            <div className="latest-comments" key={index}>
                <ul>

                {inq.productCode !== props.prodParams.productCode 
                ? <div><p> inq.productCode /// {inq.productCode} !== {props.prodParams.productCode} /// props.prodParams.productCode</p></div> 
                : <div><div><p> inq.productCode /// /// {inq.productCode} === {props.prodParams.productCode} /// /// props.prodParams.productCode</p></div> 
                    {inq.inqDepth == 0 
                      ?
                      <li>
                          <div className="comments-box">
                              <div className="comments-avatar">
                                  <img src="assets/img/blog/blog-sm-6.png" className="img-fluid" alt="img"/>
                              </div>
                              <div className="comments-text">
                                  <div className="avatar-name">
                                      <h5>서버 inqDepth 0: {inq.inqWriter}</h5>
                                      <span className="post-meta">{inq.inqDate}</span>
                                  </div>
                                  <p>{inq.inqContent}</p>
                                  <a href="#" className="comment-reply"><i className="fal fa-reply"></i> Reply</a>


                                  {Number(inq.inqSeq) !== Number(inq.inqRef) 
                                      ? <div>inqSeq: {inq.inqSeq}, inqSubseq: {inq.inqSubseq} , inqRef: {inq.inqRef} , inqDepth: {inq.inqDepth}</div> 
                                      : <button value={inq.inqRef} onClick={onClickReply}>inqSeq: {inq.inqSeq}, inqSubseq: {inq.inqSubseq}, inqRef: {inq.inqRef}, inqDepth: {inq.inqDepth}, inqProductCode: {inq.productCode}  댓글 onoff</button>
                                  }
                                  {commentContxDataState
                                  ? <div>
                                      열림 // {selectedReply !== Number(inq.inqSeq) ? <div></div> : <div><StoreDetailsCommentSubForm />
                                    </div>}
                                  </div> 
                                  : <div>
                                      닫힘 // 
                                    </div>}


                              </div>
                          </div>
                      </li>

                      :
                      <li className="children">
                          <div className="comments-box">
                              <div className="comments-avatar">
                                  <img src="assets/img/blog/blog-sm-7.png" className="img-fluid" alt="img"/>
                              </div>
                              <div className="comments-text">
                                  <div className="avatar-name">
                                      <h5>서버 inqDepth 1: {inq.inqWriter}</h5>
                                      <span className="post-meta">February 20, 2022</span>
                                  </div>
                                  <p>{inq.inqContent}</p>
                                  <a href="#" className="comment-reply"><i className="fal fa-reply"></i> Reply</a>

                                  {Number(inq.inqSeq) !== Number(inq.inqRef) 
                                      ? <div>inqSeq: {inq.inqSeq}, inqSubseq: {inq.inqSubseq} , inqRef: {inq.inqRef} , inqDepth: {inq.inqDepth}</div> 
                                      : <button value={inq.inqRef} onClick={onClickReply}>inqSeq: {inq.inqSeq}, inqSubseq: {inq.inqSubseq} , inqRef: {inq.inqRef} , inqDepth: {inq.inqDepth} 댓글 onoff</button>
                                  }
                                  {selectedReply !== Number(inq.inqSeq) ? <div></div> : <div><StoreDetailsCommentSubForm /></div>}


                              </div>
                          </div>
                      </li>
                    }
                </div>
                }
                </ul>
            </div>
            ))}
            
        </div>
      </>
    )
}

export default StoreDetailsCommentList;

