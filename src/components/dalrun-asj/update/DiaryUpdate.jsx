import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import CustomEditor from "../CustomEditor";

function DiaryUpdate({data, onHide}) {
    const [searchParam, setSearchParam] = useSearchParams();

    const [diarySeq, setDiarySeq] = useState("");
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [score, setScore] = useState("");
    const [totalDist, setTotalDist] = useState(0);
    const [meanPace, setMeanPace] = useState(0);
    const [regdate, setRegdate] = useState(0);
    const [update, setUpdate] = useState(false);
    const [updatedFiles, setUpdatedFiles] = useState([]);

    let filelist = [];

    const setInput = (data) => {
        setDiarySeq(data.diarySeq);
        setId(data.memId);
        setTitle(data.title);
        setContent(data.content);
        setScore(data.score);
        setTotalDist(data.totalDist/1000);
        setMeanPace(data.meanPace);
        setRegdate(data.wdate);
    }

    const getFilename = (content) => {
        const contentSpilt = content.split('diaryImg/');

        contentSpilt.map((s, i) => {
            if(i>0) {
                const indexof = s.indexOf('.');
                const filename = s.substring(0, indexof+4);  
                console.log(filename); 
                
                filelist.push(filename);
            }
        }); 
    }

    useEffect(() => {
        setInput(data);
    }, []);
    
    const onSubmit = (e) => {
        e.preventDefault();
        
        setUpdate(true);
        getFilename(content);
        setUpdatedFiles(filelist);

        let formdata = new FormData();
        formdata.append("diarySeq", diarySeq);
        formdata.append("memId", id);
        formdata.append("title", title);
        formdata.append("content", content);
        formdata.append("score", score);

        axios.post('http://localhost:3000/admin_updatediary', formdata)
            .then((resp) => {
                if(resp.data === "YES") {
                    alert("수정완료");
                    onHide();
                    setSearchParam(searchParam.set('target',''));
                } else {
                    alert("수정실패");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return(
        <div className="admin_update_container diary_update_container">
            <div className="admin_update">
                <form name="frm" onSubmit={onSubmit} encType="multipart/form">
                    <fieldset>
                        <div>
                            <label htmlFor="id">작성자</label>
                            <input type="text" value={id || ""} readOnly={true} />
                        </div>
                        <div>
                            <label htmlFor="totalDist">이동거리 (km)</label>
                            <input type="text" value={totalDist || ""} readOnly={true} />
                        </div>
                        <div>
                            <label htmlFor="meanPace">평균페이스 (분/km)</label>
                            <input type="text" value={meanPace || ""} readOnly={true} />
                        </div>
                        <div className="score_con">
                            <label htmlFor="score">점수</label>
                            <div className="calcScore">
                                <p>** 이동거리 : 5km이하 +1, 5~6km이상 +2 , 20km이상 +16</p>
                                <p>** 평균페이스 : 7분이상 +1 , 6~7분이상 +2 , 5~6분이상 +3 , 5분이하 +5</p>
                            </div>
                            <input type="number" value={score || ""} onChange={(e) => setScore(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="regdate">작성일</label>
                            <input type="datetime" value={regdate || ""} readOnly={true} />
                        </div>
                        <div>
                            <label htmlFor="title">제목</label>
                            <input type="text" value={title || ""} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="content">내용</label>
                            <CustomEditor val={content} update={update} id={id} updatedFiles={updatedFiles} handleEditorChange={(e) => setContent(e.target.value)} />
                        </div>
                        <input type="submit" value="수정" />
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default DiaryUpdate;