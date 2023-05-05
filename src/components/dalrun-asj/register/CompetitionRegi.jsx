import axios from "axios";
import { useState, useEffect  } from "react";
import { useSearchParams } from "react-router-dom";

function CompetitionRegi({onHide}) {
    const [searchParam, setSearchParam] = useSearchParams();

    const [seq, setSeq] = useState();
    const [title, setTitle] = useState("");
    const [content, setContnet] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [link, setLink] = useState("");
    const [local, setLocal] = useState("");
    const [location, setLocation] = useState("");
    const [locationLat, setLocationLat] = useState(0);
    const [locationLng, setLocationLng] = useState(0);
    const [sponsor, setSponsor] = useState("");
    const [receipEnd, setReceipEnd] = useState("");
    const [receipStart, setReceipStart] = useState("");
    const [regdate, setRegdate] = useState("");

    const handleInput = (e) => {
        const textarea = e.target;
        textarea.style.height = 'auto'; // 높이를 자동으로 조정하기 위해 높이를 초기화
        textarea.style.height = `${textarea.scrollHeight}px`; // 입력한 내용에 맞게 높이 조정
        setContnet(textarea.value); // 입력한 값을 상태값에 저장
    }

    const onSubmit = () => {}

    return(
        <div className="admin_update_container">
            <div className="admin_update">
                <form name="frm" onSubmit={onSubmit} encType="multipart/form">
                    <fieldset>
                        <div>
                            <label htmlFor="title">대회명</label>
                            <input type="text" value={title || ""} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="local">개최 지역</label>
                            <select value={local} onChange={(e) => setLocal(e.target.value)}>
                                <option value="서울">서울</option>
                                <option value="인천/경기">인천/경기</option>
                                <option value="강원">강원</option>
                                <option value="대전/충남">대전/충남</option>
                                <option value="충북">충북</option>
                                <option value="광주/전남">광주/전남</option>
                                <option value="전북">전북</option>
                                <option value="부산/경남">부산/경남</option>
                                <option value="대구/경북">대구/경북</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="location">상세 주소</label>
                            <input type="text" value={location || ""} onChange={(e) => setLocation(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="sponsor">개최측</label>
                            <input type="text" value={sponsor || ""} onChange={(e) => setSponsor(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="content">대회소개</label>
                            <textarea value={content || ""} onChange={(e) => setContnet(e.target.value)} onInput={handleInput} />
                        </div>
                        <div>
                            <label htmlFor="receip">접수 기간</label>
                            <div className="date_flex">
                                <input type="date" value={receipStart || ""} data-placeholder="접수 시작일" onChange={(e) => setReceipStart(e.target.value)} required aria-required="true" />
                                <input type="date" value={receipEnd || ""} data-placeholder="접수 마감일" onChange={(e) => setReceipEnd(e.target.value)} required aria-required="true" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="date">일시</label>
                            <div className="date_flex">
                                <input type="date" value={dateStart || ""} data-placeholder="대회 시작일" onChange={(e) => setDateStart(e.target.value)} required aria-required="true" />
                                <input type="date" value={dateEnd || ""} data-placeholder="대회 마감일" onChange={(e) => setDateEnd(e.target.value)} required aria-required="true" /> 
                            </div>
                        </div>
                        <div>
                            <label htmlFor="link">링크</label>
                            <input type="text" value={link || ""} onChange={(e) => setLink(e.target.value)} />
                        </div>
                        <input type="submit" value="등록" />
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default CompetitionRegi;