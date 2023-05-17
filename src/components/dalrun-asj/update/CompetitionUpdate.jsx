import axios from "axios";
import { useState, useEffect  } from "react";
import { useSearchParams } from "react-router-dom";
import GeometricDataSearchBtn from "../GeometricDataSearchBtn";
import NaverMapView from "../../dalrun-jy/competition/NaverMapview";
import { useRef } from "react";
import AdjustableTextarea from "../AdjustableTextarea";

function CompetitionUpdate({data, onHide}) {
    const [searchParam, setSearchParam] = useSearchParams();

    const [seq, setSeq] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [link, setLink] = useState("");
    const [local, setLocal] = useState("");
    const [location, setLocation] = useState("");
    const [locationdetail, setLocationdetail] = useState("");
    const [locationLat, setLocationLat] = useState(0);
    const [locationLng, setLocationLng] = useState(0);
    const [sponsor, setSponsor] = useState("");
    const [receipEnd, setReceipEnd] = useState("");
    const [receipStart, setReceipStart] = useState("");
    const [imgFile, setImgFile] = useState("");
    const [uploadImg, setUploadImg] = useState("");

    const imgRef = useRef();

    const viewImgFile = () => {
        const file = imgRef.current.files[0];
        setUploadImg(file); // 업로드할 이미지
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);  // 미리보기 할 이미지
        };
    }

    const setInput = (data) => {
        setSeq(data.compSeq);
        setTitle(data.compTitle);
        setContent(data.compContent);
        setDateEnd(data.compDateEnd);
        setDateStart(data.compDateStart);
        setLink(data.compLink);
        setLocal(data.compLocal);
        setLocation(data.compLocation);
        setLocationLat(data.locationLat);
        setLocationLng(data.locationLng);
        setSponsor(data.compSponsor);
        setReceipEnd(data.receiptEnd);
        setReceipStart(data.receiptStart);
        setImgFile(`${process.env.REACT_APP_API_URL}/dalrun-hc/competition/${data.compimage}`)
    }

    useEffect(() => {
        setInput(data);
    }, [data]);

    const onSubmit = (e) => {
        e.preventDefault();
        
        let formdata = new FormData();
        formdata.append("compSeq", seq);
        formdata.append("compTitle", title);
        formdata.append("compContent", content);
        formdata.append("compDateEnd", dateEnd);
        formdata.append("compDateStart", dateStart);
        formdata.append("compLink", link);
        formdata.append("compLocal", local);
        formdata.append("compLocation", location);
        formdata.append("locationLat", locationLat);
        formdata.append("locationLng", locationLng);
        formdata.append("compSponsor", sponsor);
        formdata.append("receiptStart", receipStart);
        formdata.append("receiptEnd", receipEnd);
        formdata.append("uploadImg", uploadImg);
        formdata.append("oriCompimage", data.oriCompimage);
        formdata.append("compimage", data.compimage);

        axios.post('/admin_updatecomperition', formdata)
            .then((resp) => {
                if(resp.data === "YES") {
                    alert("대회수정 성공");
                    onHide();
                    setSearchParam(searchParam.set('target',''));
                } else {
                    alert("대회수정 실패");
                }
            })
            .catch((err) => console.log(err));
    }

    return(
        <div className="admin_update_container">
            <div className="admin_update">
                <form name="frm" onSubmit={onSubmit} encType="multipart/form-data">
                    <fieldset>
                         <div>
                            <label htmlFor="title">대회명</label>
                            <input type="text" name="compTitle" value={title || ""} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="local">개최 지역</label>
                            <select name="compLocal" value={local} onChange={(e) => setLocal(e.target.value)}>
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
                            <input type="text" value={locationdetail || ""} placeholder="도로명주소" onChange={(e) => setLocation(e.target.value)} />
                            <input type="text" style={{marginTop: "10px"}} value={location || ""} placeholder="장소" onChange={(e) => setLocationdetail(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="location">좌표 찾기</label>
                            <div className="date_flex">
                                <input type="number" value={locationLat || ""} placeholder="위도" onChange={(e) => setLocationLat(e.target.value)} required />
                                <input type="number" value={locationLng || ""} placeholder="경도" onChange={(e) => setLocationLng(e.target.value)} required />
                                <GeometricDataSearchBtn setLat={setLocationLat} setLng={setLocationLng} location={locationdetail} />
                            </div>
                        </div>
                        <NaverMapView mapLat={locationLat} mapLng={locationLng} />
                        <div>
                            <label htmlFor="sponsor">주최측</label>
                            <input type="text" value={sponsor || ""} onChange={(e) => setSponsor(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="content">대회소개</label>
                            <AdjustableTextarea val={content} setVal={setContent} /> 
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
                        <div>
                            <input type="file" onChange={viewImgFile} ref={imgRef}/>
                            <div className="comp_img">
                                <img src={imgFile} alt="대회 이미지"/>
                            </div> 
                        </div>
                        <input type="submit" value="수정" />
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default CompetitionUpdate;