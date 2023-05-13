import React from "react";
import Preview from "../views/Preview";
// Homepage Demo
import HomeDefault from "../views/all-home-version/HomeDefault";
import HomeStudio from "../views/all-home-version/HomeStudio";
import HomeAgency from "../views/all-home-version/HomeAgency";
import HomeMinimal from "../views/all-home-version/HomeMinimal";
import HomeTrending from "../views/all-home-version/HomeTrending";
import HomeFreelancer from "../views/all-home-version/HomeFreelancer";
import HomeDark from "../views/all-home-version/HomeDark";
import HomeModern from "../views/all-home-version/HomeModern";
// Serviceb
import Service from "../views/inner-pages/service/Service";
import ServiceDetails from "../views/inner-pages/service/ServiceDetails";

// About
import AboutUs from "../views/inner-pages/about/AboutUs";
import AboutMe from "../views/inner-pages/about/AboutMe";

// Blog
import BlogGrid from "../views/inner-pages/blog/BlogGrid";
import BlogMasonry from "../views/inner-pages/blog/BlogMasonry";
import BlogSidebar from "../views/inner-pages/blog/BlogSidebar";
import BlogDetails from "../views/inner-pages/blog/BlogDetails";
import BlogDetailsSidebar from "../views/inner-pages/blog/BlogDetailsSidebar";

// Portfolio
import WorksGrid from "../views/inner-pages/portfolio/WorksGrid";
import WorksMasonry from "../views/inner-pages/portfolio/WorksMasonry";
import WorksListing from "../views/inner-pages/portfolio/WorksListing";
import WorksCarousel from "../views/inner-pages/portfolio/WorksCarousel";
import WorksShowcase from "../views/inner-pages/portfolio/WorksShowcase";

// Others
import Contact from "../views/inner-pages/Contact";
import PricingInner from "../views/inner-pages/PricingInner";
import Team from "../views/inner-pages/Team";
import ComingSoon from "../views/inner-pages/ComingSoon";
import Faq from "../views/inner-pages/Faq";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

// 김종완
import KjwWorkspace from "../views/inner-pages/dalrun-kjw/KjwWorkspace";
import Course from '../views/inner-pages/dalrun-kjw/Course';
import Qna from '../views/inner-pages/dalrun-kjw/Qna';
import Diary from '../views/inner-pages/dalrun-kjw/Diary';

// 안선정
import AsjWorkspace from "../views/inner-pages/dalrun-asj/asjWorkspace";
// admin
import Admin from "../views/inner-pages/dalrun-asj/Admin";

// 장호찬
import ChcWorkspace from "../views/inner-pages/dalrun-chc/chcWorkspace";
import StoreMain from "../views/inner-pages/dalrun-chc/store/StoreMain";
import StoreRecommend from "../views/inner-pages/dalrun-chc/store/StoreRecommend";
import StoreDetails from "../views/inner-pages/dalrun-chc/store/StoreDetails";
import StoreCart from "../views/inner-pages/dalrun-chc/store/StoreCart";
import StorePayment from "../views/inner-pages/dalrun-chc/store/StorePayment";
import StorePaymentConfirm from "../views/inner-pages/dalrun-chc/store/StorePaymentConfirm";
import BasicEditor from "../views/inner-pages/dalrun-chc/editor/BasicEditor";

// 문준영
import MjyWorkspace from "../views/inner-pages/dalrun-mjy/mjyWorkspace";
import MainPage from"../views/mjy-view/mainPage";
import MainDotMap from "../views/mjy-view/mainDotmap";
import CompetitionMain from "../views/mjy-view/competition/CompetitionMain";
import CompetitionDetails from "../views/mjy-view/competition/CompetitionDetails";
import ReviewMain from "../views/mjy-view/review/ReviewMain";
import ReviewDetails from "../views/mjy-view/review/ReviewDetails";

// 오성혁
import OshWorkspace from "../views/inner-pages/dalrun-osh/oshWorkspace";
import MyPage from "../views/inner-pages/dalrun-osh/Mypage";

// import MyInform from "../views/inner-pages/dalrun-osh/mypage/MyInform";
// import MyCrew from "../views/inner-pages/dalrun-osh/mypage/MyCrew";
// import MyRunning from "../views/inner-pages/dalrun-osh/mypage/MyRunning";
// import MyStore from "../views/inner-pages/dalrun-osh/mypage/MyStore";
// import MyWrite from "../views/inner-pages/dalrun-osh/mypage/MyWrite";
// import MyRating from "../views/inner-pages/dalrun-osh/mypage/MyRating";

// 박예린
import PyrWorkspace from "../views/inner-pages/dalrun-pyr/pyrWorkspace";
import Login from "../views/inner-pages/dalrun-pyr/Login";
import Register from "../views/inner-pages/dalrun-pyr/Register";
import Home from "../views/inner-pages/dalrun-pyr/Home";
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

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<Preview />} />
        {/*  Homepage Demo */}
        <Route path="/home-default" element={<HomeDefault />} />
        <Route path="/home-studio" element={<HomeStudio />} />
        <Route path="/home-agency" element={<HomeAgency />} />
        <Route path="/home-minimal" element={<HomeMinimal />} />
        <Route path="/home-trending" element={<HomeTrending />} />
        <Route path="/home-freelancer" element={<HomeFreelancer />} />
        <Route path="/home-dark" element={<HomeDark />} />
        <Route path="/home-modern" element={<HomeModern />} />

        {/* Service */}
        <Route path="/service" element={<Service />} />
        <Route path="/service-details" element={<ServiceDetails />} />

        {/* About */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-me" element={<AboutMe />} />

        {/* Blog */}
        <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-masonry" element={<BlogMasonry />} />
        <Route path="/blog-sidebar" element={<BlogSidebar />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/blog-details-sidebar" element={<BlogDetailsSidebar />} />

        {/* Portfolio */}
        <Route path="/works-grid" element={<WorksGrid />} />
        <Route path="/works-masonry" element={<WorksMasonry />} />
        <Route path="/works-listing" element={<WorksListing />} />
        <Route path="/works-carousel" element={<WorksCarousel />} />
        <Route path="/works-showcase" element={<WorksShowcase />} />

        {/* others */}
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<PricingInner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />

        {/* 안선정 */}
        <Route path='/asj-work' element={<AsjWorkspace/>} />
        {/* Admin */}
        <Route path="/admin/*" element={<Admin />} />
        
        {/* 장호찬 */}
        <Route path='/chc-work' element={<ChcWorkspace/>} />
        <Route path='/store-main' element={<StoreMain />} />
        <Route path='/store-recommend/:productCode' exact element={<StoreRecommend />} />
        <Route path='/store-details/:productCode' exact element={<StoreDetails />} />
        <Route path='/store-cart' element={<StoreCart />} />
        <Route path='/store-payment' element={<StorePayment />} />
        <Route path='/store-payment-confirm/:ordernumber' exact element={<StorePaymentConfirm />} />
        <Route path='/basic-editor' element={<BasicEditor />} />

        {/* 김종완 */}
        <Route path='/kjw-work' element={<KjwWorkspace/>} />
        <Route path="/course" element={<Course />} />
        <Route path="/qna" element={<Qna />} />
        <Route path="/diary" element={<Diary />} />

        {/* 문준영 */}
        <Route path='/mjy-work' element={<MjyWorkspace/>} />
        <Route path='/mainPage' element={<MainPage/>} />
        <Route path='/dotmap' element={<MainDotMap/>} />
        <Route path='/competition-main' element={<CompetitionMain />}/>
        <Route path="/competition-detail/:compSeq" element={<CompetitionDetails/>}/>
        <Route path='/review-main' element={<ReviewMain />} />
        <Route path='/review-detail/:srSeq' element={<ReviewDetails />} />
        
        {/* 오성혁 */}
        <Route path='/osh-work' element={<OshWorkspace/>} />

        <Route path='/mypage/*' element={<MyPage/>} />

        {/* <Route path='/mypage/myinform' element={<MyInform/>} />
        <Route path='/mypage/mycrew' element={<MyCrew/>} />
        <Route path='/mypage/myrunning' element={<MyRunning/>} />
        <Route path='/mypage/mystore' element={<MyStore/>} />
        <Route path='/mypage/mywrite' element={<MyWrite/>} />
        <Route path='/mypage/myrating' element={<MyRating/>} /> */}

        {/* 박예린 */}
        <Route path='/pyr-work' element={<PyrWorkspace/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path="/home" element={<Home/>}/>
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

      </Routes>
    </>
  );
};

export default AllRoutes;
