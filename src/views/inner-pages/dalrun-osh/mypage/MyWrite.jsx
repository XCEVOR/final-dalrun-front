import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Writecrew from "./inner/mypage-writes/Writecrew";
import WriteQnA from "./inner/mypage-writes/WriteQnA";
import MywriteContent from "./inner/mypage-contents/MywriteContent";
import MypageBtn from "../../../../components/dalrun-sh/MypageBtn";

function Write(){
  const category = [
        {cate:"crew", name:"크루게시판", selected:<Writecrew/>}, 
        {cate:"QnA", name:"QnA게시판", selected:<WriteQnA/>}
  ];

  return(
    <div className="members container">
      <h4 className="title">내 게시글 목록</h4>
      <br />
      <div className="inform outline" />
      <br />      
        <MypageBtn {...category} />
        <Routes>
            <Route path=":cate" element={<MywriteContent {...category} />} />
        </Routes>

    </div>
    )
}

export default Write;