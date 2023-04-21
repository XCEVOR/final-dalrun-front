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
// Service
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

// 안선정
import AsjWorkspace from "../views/inner-pages/dalrun-asj/asjWorkspace";

// 장호찬
import JhcWorkspace from "../views/inner-pages/dalrun-jhc/jhcWorkspace";

// 문준영
import MjyWorkspace from "../views/inner-pages/dalrun-mjy/mjyWorkspace";

// 오성혁
import OshWorkspace from "../views/inner-pages/dalrun-osh/oshWorkspace";

// 박예린
import PyrWorkspace from "../views/inner-pages/dalrun-pyr/pyrWorkspace";
import Login from "../views/inner-pages/dalrun-pyr/Login";
import Register from "../views/inner-pages/dalrun-pyr/Register";
import KakaoAuthHandle from "../views/inner-pages/dalrun-pyr/Kakao";
import PasswordResetForm from "../views/inner-pages/dalrun-pyr/PasswordResetForm";
import RegisterComponent from "../views/inner-pages/dalrun-pyr/RegiMain";
import LoginCheck from "../views/inner-pages/dalrun-pyr/Logout";
import Home from "../views/inner-pages/dalrun-pyr/Home";

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
        
        {/* 장호찬 */}
        <Route path='/jhc-work' element={<JhcWorkspace/>} />

        {/* 김종완 */}
        <Route path='/kjw-work' element={<KjwWorkspace/>} />
        <Route path="/course" element={<Course />} />
        <Route path="/qna" element={<Qna />} />

        {/* 문준영 */}
        <Route path='/mjy-work' element={<MjyWorkspace/>} />

        {/* 오성혁 */}
        <Route path='/osh-work' element={<OshWorkspace/>} />

        {/* 박예린 */}
        <Route path='/pyr-work' element={<PyrWorkspace/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path="/oauth/kakao/callback" element={<KakaoAuthHandle/>} />
        <Route path="/passwordreset" element={<PasswordResetForm/>} />
        <Route path="/RegiMain" element={<RegisterComponent/>}/>
        <Route path="/logout" element={<LoginCheck/>}/>
        <Route path="/home" element={<Home/>}/>

      </Routes>
    </>
  );
};

export default AllRoutes;
