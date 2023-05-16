// import React from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import ReactTooltip from "react-tooltip";
// import { Link } from "react-router-dom";

// const portfolioMenu = [
//   "크루멤버 소개",
//   "크루멤버 대기",
// ];

// const portfolioContent = [
//   {
//     tabContent: [
//       {
//         cat: "park1234",
//         title: "질문 1",
//         date: "2023.04.25",
//         routerLink: "/portfolio-details",
//         dataId: "work-1",
//       },
//       {
//         cat: "park1234",
//         title: "질문 2",
//         date: "2023.04.25",
//         routerLink: "/portfolio-details",
//         dataId: "work-2",
//       },
//       {
//         cat: "park1234",
//         title: "질문 3",
//         date: "2023.04.25",
//         routerLink: "/portfolio-details",
//         dataId: "work-3",
//       },
//       {
//         cat: "park1234",
//         title: "질문 3",
//         date: "2023.04.25",
//         routerLink: "/portfolio-details",
//         dataId: "work-4",
//       },
//       {
//         cat: "park1234",
//         title: "질문 3",
//         date: "2023.04.25",
//         routerLink: "/portfolio-details",
//         dataId: "work-5",
//       },
//       {
//         cat: "park1234",
//         title: "질문 3",
//         date: "2023.04.25",
//         routerLink: "/portfolio-details",
//         dataId: "work-6",
//       },
//       {
//         cat: "park1234",
//         title: "질문 3",
//         date: "2023.04.25",
//         routerLink: "/portfolio-details",
//         imgPopup: "work-7",
//         dataId: "work-7",
//       },
//     ],
//   },
//   {
//     tabContent: [
//       {
//         cat: "park1234",
//         title: "질문 3",
//         date: "2023.04.25",
//         routerLink: "/portfolio-details",
//         imgPopup: "work-3",
//         dataId: "work-3",
//       },
//       {
//         cat: "park1234",
//         title: "질문 3",
//         date: "2023.04.25",
//         routerLink: "/portfolio-details",
//         imgPopup: "work-4",
//         dataId: "work-4",
//       },
//       {
//         cat: "park1234",
//         title: "질문 3",
//         date: "2023.04.25",
//         routerLink: "/portfolio-details",
//         imgPopup: "work-5",
//         dataId: "work-5",
//       },
//     ],
//   },
//   {
//     tabContent: [
//       {
//         cat: "park1234",
//         title: "질문 3",
//         date: "2023.04.25",
//         routerLink: "/portfolio-details",
//         imgPopup: "work-5",
//         dataId: "work-5",
//       },
//       {
//         cat: "park1234",
//         title: "질문 3",
//         date: "2023.04.25",
//         routerLink: "/portfolio-details",
//         imgPopup: "work-6",
//         dataId: "work-6",
//       },
//       {
//         cat: "park1234",
//         title: "질문 3",
//         date: "2023.04.25",
//         routerLink: "/portfolio-details",
//         imgPopup: "work-7",
//         dataId: "work-7",
//       },
//     ],
//   },
// ];

// const CrewMemberBody = () => {
//   return (
//     <>
//       <Tabs>
//         {/* <!--Animated Block--> */}
//         <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
//           <TabList className="ptf-filters ptf-filters--style-1">
//             {portfolioMenu.map((item, i) => (
//               <Tab className="filter-item " key={i}>
//                 {item}
//               </Tab>
//             ))}
//           </TabList>
//         </div>

//         {/* <!--Spacer--> */}
//         <div
//           className="ptf-spacer"
//           style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
//         ></div>

//         {portfolioContent.map((item, i) => (
//           <TabPanel key={i}>
//             {/* <!--Animated Block--> */}
//             <div
//               className="ptf-animated-block"
//               data-aos="fade"
//               data-aos-delay="0"
//             >
//               <div className="ptf-isotope-grid">
//                 <div className=" grid-item ">
//                   {/* <!--Portfolio Item--> */}
//                   {item.tabContent.map((val, i) => (
//                     <article
//                       className="ptf-work ptf-work--style-4"
//                       data-tip
//                       data-for={val.dataId}
//                       key={i}
//                     >
//                       <Link
//                         className="ptf-work__link"
//                         to="/works-showcase"
//                       ></Link>
//                       <div className="ptf-work__category">{val.cat}</div>
//                       <h4 className="ptf-work__title">{val.title}</h4>
//                       <div className="ptf-work__date">{val.date}</div>
//                     </article>
//                   ))}
//                 </div>
//                 <div></div>
//               </div>
//             </div>
//           </TabPanel>
//         ))}
//       </Tabs>
//     </>
//   );
// };

// export default CrewMemberBody;
