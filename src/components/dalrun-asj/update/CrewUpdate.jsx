import axios from "axios";
import { useRef, useState, useEffect  } from "react";
import { useSearchParams } from "react-router-dom";

function CrewUpdate({data, onHide}) {
    const [searchParam, setSearchParam] = useSearchParams();

    const [seq, setSeq] = useState();
    const [crewName, setCrewName] = useState();
    const [id, setId] = useState();
    const [setup, setSetup] = useState();
    const [level, setLevel] = useState();
    const [score, setScore] = useState();
    const [color, setColor] = useState();
    const [totalMem, setTotalMem] = useState();
    const [maxMem, setMaxMem] = useState();
    const [regdate, setRegdate] = useState();

    const setInput = (data) => {
        setSeq(data.crewSeq);
        setCrewName(data.crewName);
        setId(data.memId);
        setSetup(data.crewSetUp);
        setLevel(data.crewLevel);
        setScore(data.crewScore);
        setColor(data.crewcolor);
        setTotalMem(data.crewMemberCnt);
        setMaxMem(data.maxMem);
        setRegdate(data.crewCreateDate);
    }

    useEffect(() => {
        setInput(data);
    }, [data]);

    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("crewSeq", seq);
        formData.append("crewName", crewName);
        formData.append("memId", id);
        formData.append("crewSetUp", setup);
        formData.append("crewLevel", level);
        formData.append("crewScore", score);
        formData.append("crewcolor", color);
        formData.append("maxMem", maxMem);
        formData.append("crewCreateDate", regdate);

        axios.post('/admin_updatecrew', formData)
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
        <div className="admin_update_container">
            <div className="admin_update">
                <form name="frm" onSubmit={onSubmit} encType="multipart/form">
                    <fieldset>
                        <div>
                            <label htmlFor="seq">크루번호</label>
                            <input type="text" value={seq || ""} readOnly={true} />
                        </div>
                        <div>
                            <label htmlFor="crewName">크루명</label>
                            <input type="text" value={crewName || ""} onChange={(e) => setCrewName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="id">리더</label>
                            <input type="text" value={id || ""} onChange={(e) => setId(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="setup">크루 소개</label>
                            <input type="text" value={setup || ""} onChange={(e) => setSetup(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="level">레벨</label>
                            <input type="number" value={level || ""} onChange={(e) => setLevel(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="score">포인트</label>
                            <input type="number" value={score || ""} onChange={(e) => setScore(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="color">컬러</label>
                            <input type="color" value={color || ""} onChange={(e) => setColor(e.target.value)} />  {color}
                        </div>
                        <div>
                            <label htmlFor="totalMem">인원수</label>
                            <input type="text" value={totalMem || ""} readOnly={true} />
                        </div>
                        <div>
                            <label htmlFor="maxMem">최대인원수</label>
                            <input type="number" value={maxMem || ""} onChange={(e) => setMaxMem(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="regdate">등록일</label>
                            <input type="date" value={regdate || ""} onChange={(e) => setRegdate(e.target.value)} />
                        </div>
                        <input type="submit" value="수정" />
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default CrewUpdate;