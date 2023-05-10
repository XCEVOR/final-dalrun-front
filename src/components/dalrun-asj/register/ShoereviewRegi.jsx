import { useState } from "react";
import AdjustableTextarea from "../AdjustableTextarea";
import ImgUpload from "../ImgUpload";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function ShoereviewRegi({onHide}) {
    const [searchParam, setSearchParam] = useSearchParams();

    const [brand, setBrand] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [descList, setDescList] = useState([]);
    const [desc, setDesc] = useState([]);
    const [price, setPrice] = useState("");
    const [link, setLink] = useState("");
    const [imgList, setImgList] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();

        if(imgList.length === 0) {
            alert("하나 이상의 이미지를 등록해주세요.");
            return;
        }
        else if(imgList.length-1 !== descList.length) {
            alert("이미지에 대한 설명을 입력해주세요.");
            return;
        }

        let formdata = new FormData();

        imgList.map((file) => {
            formdata.append("fileList", file);
        });

        descList.map((desc) => {
            formdata.append("descList", desc);
        });

        formdata.append("srBrand", brand);
        formdata.append("srTitle", title);
        formdata.append("srCotent", content);
        formdata.append("srPrice", price);
        formdata.append("srLink", link);

        console.log(formdata);
        axios.post('http://localhost:3000/shoereviewRegi', formdata)
            .then((resp) => {
                if(resp.data === "YES") {
                    alert("리뷰등록 성공");
                    onHide();
                    setSearchParam(searchParam.set('target',''));
                } else {
                    alert("리뷰등록 실패");
                }
            })
            .catch((err) => console.log(err));
    }

    const handleTextInput = (e, desc, max) => {
        e.preventDefault();

        setDescList(prev => [...prev, desc].slice(0, max));
        setDesc("");

        if (descList.length > max) {
            setDescList(prev => prev.slice(0, max));
        }
    }

    useEffect(() => {
        let max = imgList.length-1;

        if (descList.length > max) {
            setDescList(prev => prev.slice(0, max));
        }
    }, [imgList]);

    return (
        <div className="admin_update_container">
            <div className="admin_update review_regi_img">
                <form name="frm" onSubmit={onSubmit} encType="multipart/form-data">
                    <fieldset>
                        <ImgUpload max="4" setImgList={setImgList} />
                        <div className="add_padding">
                            <label htmlFor="brand">브랜드</label>
                            <input type="text" value={brand || ""} onChange={(e) => setBrand(e.target.value)} />
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
                                <button onClick={(e) => handleTextInput(e, desc, imgList.length-1)}>입력</button>
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
                        <input type="submit" value="등록" />
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default ShoereviewRegi;