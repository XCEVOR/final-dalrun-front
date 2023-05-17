import { useState } from "react";
import AdjustableTextarea from "../AdjustableTextarea";
import ImgUpload from "../ImgUpload";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function ShoereviewUpdate({data, onHide}) {
    const [searchParam, setSearchParam] = useSearchParams();

    const [srSeq, setSrSeq] = useState("");
    const [srdSeq, setSrdSeq] = useState([]);
    const [brand, setBrand] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [descList, setDescList] = useState([]);
    const [desc, setDesc] = useState([]);
    const [price, setPrice] = useState("");
    const [link, setLink] = useState("");
    const [imgList, setImgList] = useState([]);
    const [addimgList, setAddImgList] = useState([]);
    const [mainImg, setMainImg] = useState("");
    const [mainImgView, setMainImgView] = useState("");

    const setInput = (data) => {
        console.log(data);
        const { sr, srd } = data;

        setSrSeq(sr.srSeq);
        setBrand(sr.srBrand);
        setTitle(sr.srTitle);
        setContent(sr.srCotent);
        setPrice(sr.srPrice);
        setLink(sr.srLink);
        setImgList([sr.srimage]);

        if(srd.length > 0) {
            for(const s of srd) {
                setDescList(prev => [...prev, s.srcomment]);
                setImgList(prev => [...prev, s.srimage]);
                setSrdSeq(prev => [...prev, s.srdSeq].slice(0, 3));
            }
        }
    }

    const delImg = (e) => {
        e.preventDefault();

        const idx = e.target.value;
        
        setImgList(imgList.filter((f, index) => index !== Number(idx)));
        setSrdSeq(prevSrdSeq => prevSrdSeq.filter((f, index) => index !== Number(idx)-1));
    }

    useEffect(() => {
        if(data.length === 0) return;
        setInput(data);
    }, [data]);

    useEffect(() => {
        let max = Math.abs(imgList.length-1+addimgList.length);

        if (descList.length > max) {
            setDescList(prev => prev.slice(0, max));
        }
    }, [imgList, addimgList, descList]);

    const onSubmit = (e) => {
        e.preventDefault();

        let max = Math.abs(imgList.length-1+addimgList.length);

        if(imgList.length === 0) {
            alert("하나 이상의 이미지를 등록해주세요.");
            return;
        }
        else if(max !== descList.length) {
            alert("이미지에 대한 설명을 입력해주세요.");
            return;
        }
        console.log(srdSeq);

        let formdata = new FormData();

        imgList.map((img) => {
            formdata.append("updateImg", img);
        });

        srdSeq.map((seq) => {
            formdata.append("srdSeq", seq);
        });

        if(addimgList.length !== 0) {   // 추가 파일이 존재하는 경우에만 전송
            addimgList.map((img) => {
                formdata.append("addFiles", img);
            });
        }   

        descList.map((desc) => {
            formdata.append("descList", desc);
        });

        formdata.append("mainImg", mainImg);
        formdata.append("srSeq", srSeq);
        formdata.append("srBrand", brand);
        formdata.append("srTitle", title);
        formdata.append("srCotent", content);
        formdata.append("srPrice", price);
        formdata.append("srLink", link);

        axios.post('/admin_updateshoereview', formdata)
            .then((resp) => {
                if(resp.data === "YES") {
                    alert("리뷰수정 성공");
                    onHide();
                    setSearchParam(searchParam.set('target',''));
                } else {
                    alert("리뷰수정 실패");
                }
            })
            .catch((err) => console.log(err));
    }

    const handleMainImg = (e) => {
        const mainImg = e.target.files[0];
        setMainImg(mainImg);

        const render = new FileReader();
        render.readAsDataURL(mainImg);
        render.onload = (e) => {
            setMainImgView(e.target.result);
        }
    }

    const handleTextInput = (e, desc, max) => {
        e.preventDefault();
        
        console.log(max);
        console.log(descList);
        setDescList(prev => [...prev, desc].slice(0, max));
        setDesc("");
    }

    return (
        <div className="admin_update_container">
            <div className="admin_update review_regi_img">
                <form name="frm" onSubmit={onSubmit} encType="multipart/form-data">
                    <fieldset>
                        <div>
                            <label htmlFor="mainImg">대표이미지</label>
                            <input type="file" name="main" onChange={handleMainImg} />
                        </div>
                        <ImgUpload max={`${4-imgList.length}`} setImgList={setAddImgList} />
                        <ul className="product_img">
                                {
                                    // !loading ? <div>Loading...</div> : 
                                    imgList.map((pic, index) => 
                                        mainImg !== "" && index === 0 ? 
                                        <li key={index}>
                                            <img src={mainImgView} loading="lazy" />
                                        </li>
                                        :
                                        <li key={index}>
                                            <img
                                                src={`/dalrun-hc/review/${srSeq}/${pic}`}
                                                alt={pic}
                                                loading="lazy"
                                            />
                                            {index===0 ? '' : <button value={index} onClick={delImg}>X</button>}
                                        </li>
                                    )
                                }
                        </ul>
                        <div className="add_padding">
                            <label htmlFor="brand">브랜드</label>
                            <input type="text" value={brand || ""} onChange={(e) => setBrand(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="title">품명</label>
                            <input type="text" value={title || ""} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="content">운동화 설명</label>
                            <AdjustableTextarea val={content} setVal={setContent} />
                        </div>
                        <div>
                            <label htmlFor="desc">이미지에 대한 설명</label>
                            <div className="text_flex">
                                <AdjustableTextarea val={desc} setVal={setDesc} placeholder={"운동화 후기를 입력해주세요."} />
                                <button onClick={(e) => handleTextInput(e, desc, Math.abs(imgList.length-1+addimgList.length))}>입력</button>
                            </div>
                            <div>
                            {descList.map((d, i) => {
                                return(
                                    <div key={i}>
                                        <label htmlFor="desc">리뷰 {i+1}</label>
                                        <AdjustableTextarea val={d} readOnly={true} />
                                    </div>
                                );
                            })}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="price">가격</label>
                            <input type="number" value={price || ""} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="link">구매링크</label>
                            <input type="text" value={link || ""} onChange={(e) => setLink(e.target.value)} />
                        </div>
                        <input type="submit" value="수정" />
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default ShoereviewUpdate;