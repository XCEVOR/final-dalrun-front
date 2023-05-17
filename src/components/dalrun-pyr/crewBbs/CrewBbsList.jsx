import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "../../../assets/dalrun-jy/css/design.css";
import Pagination from 'react-js-pagination';

function CrewBbsList(){
    const [bbslist, setBbslist] = useState([]);

    const [choice, setChoice] = useState("");
    const [search, setSearch] = useState("");

    // paging
    const [page, setPage] = useState(1);
    const [totalCnt, setTotalCnt] = useState(0);


    const choiceChange = (e) => setChoice(e.target.value);
    const searchChange = (e) => setSearch(e.target.value);

    const fetchData = async (c, s, p) => {
        await axios.get('/crewBbsMain', { params:{ "choice":c, "search":s, "pageNumber":p  } })
            .then(function(res){
                console.log(res.data.list);
                setBbslist(res.data.list);

                setTotalCnt(res.data.cnt);  // 글의 총수
            })
            .catch(function(err){
                console.log(err);    
            })
    }

    useEffect(()=>{     // initialize 용도
        fetchData('','', 0);
    }, []);

    let navigate = useNavigate();

    function searchBtn(){
        // choice, search 검사

        if(choice.toString().trim() !== "" && search.toString().trim() !== ""){
            navigate('/crewBbsMain/' + choice + "/" + search);
        }
        else{
            navigate('/crewBbsMain/');
        }
        // 데이터를 다시 한번 갖고 온다
        fetchData(choice, search);
    }

    function handlePageChange(page){
        setPage(page);
        fetchData(choice, search, page-1);
    }

    return (
        <div>      
          <table style={{ marginLeft:"auto", marginRight:"auto", marginTop:"3px", marginBottom:"3px" }}>
              <tbody>
              <tr>
                  <td style={{ paddingLeft:"3px"}}>
                      <select className="custom-select" value={choice} onChange={choiceChange}>
                          <option value=''>검색</option>
                          <option value="title">제목</option>
                          <option value="content">내용</option>
                          <option value="memId">작성자</option>  
                      </select>
                  </td>
                  <td style={{ paddingLeft:"5px" }} className="align-middle">
                      <input type="text" className="form-control" placeholder="검색어"
                          value={search} onChange={searchChange}/>
                  </td>
                  <td style={{ paddingLeft:"5px" }}>
                      <span>
                          <button type="button" className="btn btn-dalrun" onClick={()=>searchBtn()}>검색</button>
                      </span>
                  </td>
              </tr>
              </tbody>
          </table>
  
          <br/>
  
          <table className="table table-hover table-sm" style={{ width: "1000" }}>
              <colgroup>
                  <col width="70"/><col width="600"/><col width="100"/><col width="150"/>
              </colgroup>
              <thead>
                  <tr className="bg-primary" style={{ color: "white" }}>
                      <th>번호</th><th>제목</th><th>조회수</th><th>작성자</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      bbslist.map(function(dto, i){
                          return (
                              <TableRow bbs={dto} cnt={i+1} key={i} />
                          )
                      })
                  }                
              </tbody>
          </table> 
  
          <br/>
  
          {/* https://mui.com/material-ui/react-pagination/  */}
          <Pagination
              activePage={page}
              itemsCountPerPage={10}
              totalItemsCount={totalCnt}
              pageRangeDisplayed={5}
              prevPageText={"‹"}
              nextPageText={"›"}
              onChange={handlePageChange} />
  
          <div className="my-5 d-flex justify-content-center">
              <Link className="btn btn-dalrun" to="/bbswrite">글쓰기</Link>    
          </div>
  
        </div>
      )
  }
  
  function TableRow(props){
      return (
          <tr>
              <td>{props.cnt}</td>
  
              {/* <td style={{ textAlign:"left" }}>{getArrow(props.bbs.depth)}{props.bbs.title}</td> */}
              {BbsTitleProc(props)}
  
              <td>{props.bbs.readcount}</td>
              <td>{props.bbs.memId}</td>
          </tr>
      );
  }

  // 제목에 대한 링크 및 삭제된 글의 처리
function BbsTitleProc(props){
    if(props.bbs.del === 0){
        return (
            <td style={{ textAlign:"left" }}>
                {/* {getArrow(props.bbs.depth)}                 */}
                <Link to={`/bbsdetail/${props.bbs.seq}`}>{props.bbs.title}</Link>                
            </td>
        );
    }else{
        return (
            <td>*** 이 글은 작성자에 의해서 삭제되었습니다 ***</td>
        );
    }
}

export default CrewBbsList;
