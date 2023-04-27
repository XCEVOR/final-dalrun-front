import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

import Pagination from 'react-js-pagination';

//서버로부터 json 형태의 데이터 받아야 함
// img : img
// cat : memId
// date : wdate
// title : title

const blogContent = [
  {
    img: "post-1",
    cat: "Product",
    date: "Dec 15, 2021",
    title: "Review product BWIB",
  },
  {
    img: "post-2",
    cat: "Inspiration",
    date: "Dec 7, 2021",
    title: "Contrast in Brand Design",
  },
  {
    img: "post-3",
    cat: "Community",
    date: "Dec 7, 2021",
    title: "The evolution of Swiss style in Interaction Design",
  },
  {
    img: "post-4",
    cat: "Product",
    date: "Dec 15, 2021",
    title: "Site inspiration with Swiss style",
  },
  {
    img: "post-5",
    cat: "Inspiration",
    date: "Dec 7, 2021",
    title: "Minimalist Trends",
  },
  {
    img: "post-6",
    cat: "Community",
    date: "Dec 7, 2021",
    title: "Design Trends - Stage 14",
  },
  {
    img: "post-7",
    cat: "Product",
    date: "Dec 15, 2021",
    title: "Business Card, small but the most important",
  },
  {
    img: "post-8",
    cat: "Inspiration",
    date: "Dec 7, 2021",
    title: "The role of leader in teamwork",
  },
  {
    img: "post-9",
    cat: "Community",
    date: "Dec 7, 2021",
    title: "Simple Logos Collection",
  },
];

const CrewBlogThree = () => {

  const [data, setData] = useState([]);
  useEffect(()=> {
    axios.get('/crewBbsMain')
      .then(response => setData(response.data.dtoList))
      .catch(error => console.log(error))
  }, []);

  return (
    <>
      {blogContent.map((val, i) => (
        <div className="col-xl-4 col-lg-4" key={i}>
          <article className="ptf-post ptf-post--style-1">
            <div className="ptf-post__media">
              <Link className="ptf-work__link" to="/crewBbsBlogDetail"></Link>
              <img
                src={`assets/img/blog/grid/${val.img}.png`}
                alt="blog"
                loading="lazy"
              />
            </div>
            <div className="ptf-post__content">
              <header className="ptf-post__header">
                <div className="ptf-post__meta">
                  <span className="cat">{val.cat}</span>
                  <span className="date">{val.date}</span>
                </div>
                <h3 className="ptf-post__title">
                  <Link to="/crewBbsBlogDetail">{val.title}</Link>
                </h3>
              </header>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default CrewBlogThree;

// function CrewBlogThree(){
//   const [crewBbsList, setCrewBbsList] = useState([]);
  
//   const [choice, setChoice] = useState("");
//   const [search, setSearch] = useState("");

//   //paging
//   const [page, setPage] = useState(1);
//   const [totalCnt, SetTotalCnt] = useState(0);

//   const choiceChange = (e) => setChoice(e.target.value);
//   const searchChange = (e) => setSearch(e.target.value);

//   const fetchData = async (c,s,p) => {
//     await axios.get('http://localhost:3000/crewBbsMain', { params:{ "choice":c, "search":s, "pageNumber":p  } })
//         .then(function(res){
//           console.log(res.data.list);
//           setCrewBbsList(res.data.list);

//           SetTotalCnt(res.data.cnt); //글의 총수
//         })
//         .catch(function(err){
//           console.log(err);
//         })
//   }

//   useEffect(()=> { //initialize
//     fetchData('','',0);
//   }, []);

//   let navigate = useNavigate();

//   function searchBtn(){
//     //choice, search 검사
//     if(choice.toString().trim() !== "" && search.toString().trim() !== ""){
//       navigate('/crewBbsMain/' + choice + "/" + search);
//     }else {
//       navigate('/crewBbsMain/');
//     }
//     // 데이터를 다시 한번 갖고 온다
//     fetchData(choice, search);
//   }

//   function handlePageChange(page){
//     setPage(page);
//     fetchData(choice, search, page-1);
// }

//   return (
//     <div>
//       <table style={{ marginLeft:"auto", marginRight:"auto", marginTop:"3px", marginBottom:"3px" }}>
//         <tbody>
//           <tr>
//             <td style={{ paddingLeft:"3px"}}>
//               <select className="" value={choice} onChange={choiceChange}>
//                 <option value=''>검색</option>
//                 <option value="title">제목</option>
//                 <option value="content">내용</option>
//                 <option value="writer">작성자</option>
//               </select>
//             </td>
//             <td style={{ paddingLeft:"5px" }} className="align-middle">
//                     <input type="text" className="form-control" placeholder="검색어"
//                         value={search} onChange={searchChange}/>
//                 </td>
//                 <td style={{ paddingLeft:"5px" }}>
//                     <span>
//                         <button type="button" className="btn btn-primary" onClick={()=>searchBtn()}>검색</button>
//                     </span>
//                 </td>
//             </tr>
//             </tbody>
//         </table>

//         <br/>

//         <table className="table table-hover table-sm" style={{ width: "1000" }}>
//             <colgroup>
//                 <col width="70"/><col width="600"/><col width="100"/><col width="150"/>
//             </colgroup>
//             <thead>
//                 <tr className="bg-primary" style={{ color: "white" }}>
//                     <th>번호</th><th>제목</th><th>조회수</th><th>작성자</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     crewBbsList.map(function(dto, i){
//                         return (
//                             <TableRow bbs={dto} cnt={i+1} key={i} />
//                         )
//                     })
//                 }                
//             </tbody>
//         </table> 

//         <br/>

//         {/* https://mui.com/material-ui/react-pagination/  */}
//         <Pagination
//             activePage={page}
//             itemsCountPerPage={10}
//             totalItemsCount={totalCnt}
//             pageRangeDisplayed={5}
//             prevPageText={"‹"}
//             nextPageText={"›"}
//             onChange={handlePageChange} />
//       </div>
//     )
// }

// function TableRow(props){
//   return (
//       <tr>
//           <td>{props.cnt}</td>

//           {/* <td style={{ textAlign:"left" }}>{getArrow(props.bbs.depth)}{props.bbs.title}</td> */}
//           {BbsTitleProc(props)}

//           <td>{props.bbs.readcount}</td>
//           <td>{props.bbs.id}</td>
//       </tr>
//   );
// }

// // 제목에 대한 링크 및 삭제된 글의 처리
// function BbsTitleProc(props){
//   if(props.bbs.del === 0){
//       return (
//           <td style={{ textAlign:"left" }}>           
//               <Link to={`/crewBbsBlogDetail/${props.bbs.seq}`}>{props.bbs.title}</Link>                
//           </td>
//       );
//   }else{
//       return (
//           <td>*** 이 글은 작성자에 의해서 삭제되었습니다 ***</td>
//       );
//   }
// }

// export default CrewBlogThree;