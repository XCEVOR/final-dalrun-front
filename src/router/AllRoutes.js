import React from "react";

import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

// 김종완

import Course from '../views/inner-pages/dalrun-kjw/Course';
import Qna from '../views/inner-pages/dalrun-kjw/Qna';
import Diary from '../views/inner-pages/dalrun-kjw/Diary';

// 안선정

// admin
import Admin from "../views/inner-pages/dalrun-asj/Admin";

// 장호찬

import StoreMain from "../views/inner-pages/dalrun-chc/store/StoreMain";
import StoreRecommend from "../views/inner-pages/dalrun-chc/store/StoreRecommend";
import StoreDetails from "../views/inner-pages/dalrun-chc/store/StoreDetails";
import StoreCart from "../views/inner-pages/dalrun-chc/store/StoreCart";
import StorePayment from "../views/inner-pages/dalrun-chc/store/StorePayment";
import StorePaymentConfirm from "../views/inner-pages/dalrun-chc/store/StorePaymentConfirm";
import BasicEditor from "../views/inner-pages/dalrun-chc/editor/BasicEditor";

// 문준영

import MainPage from"../views/inner-pages/dalrun-mjy/mainPage";
import MainDotMap from "../views/inner-pages/dalrun-mjy/mainDotmap";
import MainFirst from "../views/inner-pages/dalrun-mjy/mainFirst";
import CompetitionMain from "../views/inner-pages/dalrun-mjy/competition/CompetitionMain";
import CompetitionDetails from "../views/inner-pages/dalrun-mjy/competition/CompetitionDetails";
import ReviewMain from "../views/inner-pages/dalrun-mjy/review/ReviewMain";
import ReviewDetails from "../views/inner-pages/dalrun-mjy/review/ReviewDetails";



// 오성혁

import MyPage from "../views/inner-pages/dalrun-osh/Mypage";

// import MyInform from "../views/inner-pages/dalrun-osh/mypage/MyInform";
// import MyCrew from "../views/inner-pages/dalrun-osh/mypage/MyCrew";
// import MyRunning from "../views/inner-pages/dalrun-osh/mypage/MyRunning";
// import MyStore from "../views/inner-pages/dalrun-osh/mypage/MyStore";
// import MyWrite from "../views/inner-pages/dalrun-osh/mypage/MyWrite";
// import MyRating from "../views/inner-pages/dalrun-osh/mypage/MyRating";

// 박예린
import Login from "../views/inner-pages/dalrun-pyr/Login";
import Register from "../views/inner-pages/dalrun-pyr/Register";

import RegisterComponent from "../views/inner-pages/dalrun-pyr/RegiMain";
import Logout from "../views/inner-pages/dalrun-pyr/Logout";
import CrewBbsMain from "../views/inner-pages/dalrun-pyr/crew/CrewBbsMain";
import PostCrewBbsWriteForm from "../components/dalrun-pyr/crewBbs/CrewBbsWrite";
import CrewBbsBlogDetails from "../views/inner-pages/dalrun-pyr/crew/CrewBbsBlogDetails";
import KakaoCallback from "../views/inner-pages/dalrun-pyr/KakaoCallback";
import CrewBbsUpdate from "../views/inner-pages/dalrun-pyr/crew/CrewBbsUpdate";
import CrewBbsDelete from "../views/inner-pages/dalrun-pyr/crew/CrewBbsDelete";
import FindRegi from "../views/inner-pages/dalrun-pyr/FindRegi";
import SignupSuccess from "../views/inner-pages/dalrun-pyr/SignupSuccess";
import CrewMember from "../views/inner-pages/dalrun-pyr/crew/CrewMember";
import CrewMemberWait from "../views/inner-pages/dalrun-pyr/crew/CrewMemberWait";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<MainFirst />} />
       
        <Route path="*" element={<NotFound />} />

        {/* 안선정 */}
  
        {/* Admin */}
        <Route path="/admin/*" element={<Admin />} />
        
        {/* 장호찬 */}
      
        <Route path='/store-main' element={<StoreMain />} />
        <Route path='/store-recommend/:productCode' exact element={<StoreRecommend />} />
        <Route path='/store-details/:productCode' exact element={<StoreDetails />} />
        <Route path='/store-cart' element={<StoreCart />} />
        <Route path='/store-payment' element={<StorePayment />} />
        <Route path='/store-payment-confirm/:ordernumber' exact element={<StorePaymentConfirm />} />
        <Route path='/basic-editor' element={<BasicEditor />} />

        {/* 김종완 */}
    
        <Route path="/course" element={<Course />} />
        <Route path="/qna" element={<Qna />} />
        <Route path="/diary" element={<Diary />} />

        {/* 문준영 */}
        
        <Route path='/mainPage' element={<MainPage/>} />
        <Route path='/dotmap' element={<MainDotMap/>} />
        <Route path='/main' element={<MainFirst/>} />

        <Route path='/competition-main' element={<CompetitionMain />}/>
        <Route path="/competition-detail/:compSeq" element={<CompetitionDetails/>}/>
        <Route path='/review-main' element={<ReviewMain />} />
        <Route path='/review-detail/:srSeq' element={<ReviewDetails />} />
        
        {/* 오성혁 */}
      

        <Route path='/mypage/*' element={<MyPage/>} />

        {/* <Route path='/mypage/myinform' element={<MyInform/>} />
        <Route path='/mypage/mycrew' element={<MyCrew/>} />
        <Route path='/mypage/myrunning' element={<MyRunning/>} />
        <Route path='/mypage/mystore' element={<MyStore/>} />
        <Route path='/mypage/mywrite' element={<MyWrite/>} />
        <Route path='/mypage/myrating' element={<MyRating/>} /> */}

        {/* 박예린 */}
       
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
   
        <Route path="/regimain" element={<RegisterComponent/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/crewBbsMain" element={<CrewBbsMain/>}/>
        <Route path="/crewBbsMain/:choice/:search" element={<CrewBbsMain/>}/>
        <Route path="/crewBbsWrite" element={<PostCrewBbsWriteForm/>}/>
        <Route path="/crewBbsBlogDetails/:crewSeq" exact element={<CrewBbsBlogDetails/>} />
        <Route path="/kakaocallback" element={<KakaoCallback/>}/>
        <Route path="/crewBbsUpdate/:crewSeq" exact element={<CrewBbsUpdate />}/>
        <Route path="/crewBbsDelete/:crewSeq" exact element={<CrewBbsDelete />}/>
        <Route path="/findRegi" element={<FindRegi/>}/>
        <Route path="/signupSuccess" element={<SignupSuccess/>}/>
        <Route path="/crewMember" element={<CrewMember/>}/>
        <Route path="crewMember/crewMemberWait" element={<CrewMemberWait />} />

      </Routes>
    </>
  );
};

export default AllRoutes;
