// import React, { useState } from 'react';
// import axios from 'axios';
// import { useEffect } from 'react';

// function CrewBbsType() {
//     const [crewBbsList, setCrewBbsList] = useState([]);
//     const [type, setType] = useState("");

//     const [choice, setChoice] = useState("");
//     const [search, setSearch] = useState("");
//     const [cBbsSeq, setCBbsSeq] = useState(crewBbsParams.cBbsSeq);
//      // paging
//     const [page, setPage] = useState(1);
//     const [totalCnt, setTotalCnt] = useState(0);
//     let crewBbsParams = useParams();

//     const choiceChange = (e) => setChoice(e.target.value);
//     const searchChange = (e) => setSearch(e.target.value);
//     const handleTypeChange = (e) => {
//         setType(e.target.value);
//     };

//     const getCrewTypeList = async(c,s,p) => {
//         axios.get('http://localhost:3000/crewBbsMain/{type}', {params:{ "choice":c, "search":s, "pageNumber":p  } })
//         .then(res => {
//             setCrewBbsList(res.data.list);
//             setTotalCnt(res.data.cnt);
//         })
//         .catch(err => {
//             console.log(err);
//             alert(err);
//         });
//     };

//     useEffect(function () {
//         getCrewTypeList();
//     }, [crewBbsParams.cBbsSeq])

//     function searchBtn(){
//         // choice, search 검사
    
//         if(choice.toString().trim() !== "" && search.toString().trim() !== ""){
//             navigate('/crewBbsMain/' + choice + "/" + search);
//         }
//         else{
//             navigate('/crewBbsMain/');
//         }
//         // 데이터를 다시 한번 갖고 온다
//         getCrewBbsList(choice, search);
//     }

//     function handlePageChange(page){
//         setPage(page);
//         getCrewBbsList(choice, search, page-1);
//     }

//     return(
//         <>
//          <select value={type} onChange={handleTypeChange}>
//           <option value="">전체</option>
//           <option value="모집중">모집중</option>
//           <option value="모집완료">모집완료</option>
//         </select>
//         <button onClick={handleGetList}>조회</button>
//         <table style={{ marginLeft:"auto", marginRight:"auto", marginTop:"3px", marginBottom:"3px" }}>
//                 <tbody>
//                 <tr>
//                     <td style={{ paddingLeft:"3px" }}>
//                         <select className="custom-select" value={choice} onChange={choiceChange}>
//                             <option value=''>검색</option>
//                             <option value="title">제목</option>
//                             <option value="content">내용</option>
//                             <option value="memId">작성자</option>
//                         </select>
//                     </td>
//                     <td style={{ paddingLeft:"5px" }} className="align-middle">
//                         <input type="text" className="form-control" placeholder="검색어"
//                             value={search} onChange={searchChange}/>
//                     </td>
//                     <td style={{ paddingLeft:"5px" }}>
//                         <span>
//                             <button type="button" className="btn btn-primary" onClick={()=>searchBtn()}>검색</button>
//                         </span>
//                     </td>
//                 </tr>
//                 </tbody>
//             </table>
          
//           {/* 서버 데이터 */}
//           {crewBbsList.map((singleBbs, i) => (
//             <div className="col-xl-4 col-lg-4" key={i}>
//               <article className="ptf-post ptf-post--style-1">
//                 <div className="ptf-post__media">
//                   <Link className="ptf-work__link" to={`/crewBbsBlogDetails/${singleBbs.cBbsSeq}`}></Link>
//                   <img
//                     src={"http://localhost:3000/getimg?imgid=" + imgid[0]}
//                     alt="blog"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="ptf-post__content">
//                   <header className="ptf-post__header">
//                     <div className="ptf-post__meta">
//                       <span className="cat">{singleBbs.type}</span>
//                       <span className="date">{singleBbs.wdate}</span>
//                     </div>
//                     <h3 className="ptf-post__title">
//                       <span>&lt;{singleBbs.crewName}&gt;</span><br></br>
//                       <Link to={`/crewBbsBlogDetails/${singleBbs.cBbsSeq}`}>{singleBbs.title}</Link>
//                     </h3>
//                   </header>
//                 </div>
//               </article>
//             </div>
//           ))}
//         </>
//       );
//     };

// export default CrewBbsType;