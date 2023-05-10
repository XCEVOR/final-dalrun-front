import { useState } from "react";
import AdjustableTextarea from "../AdjustableTextarea";
import ImgUpload from "../ImgUpload";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function ShoereviewUpdate({data, onHide}) {
    const [searchParam, setSearchParam] = useSearchParams();

    const [srSeq, setSrSeq] = useState("");
    const [brand, setBrand] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [section1, setSection1] = useState("");
    const [section2, setSection2] = useState("");
    const [section3, setSection3] = useState("");
    const [price, setPrice] = useState("");
    const [link, setLink] = useState("");
    const [imgList, setImgList] = useState([]);
    const [addimgList, setAddImgList] = useState([]);

    const setInput = (data) => {
        console.log(data);
        const sr = data.sr;
        const srd = data.srd;

        setSrSeq(sr.srSeq);
        setBrand(sr.srBrand);
        setTitle(sr.srTitle);
        setDesc(sr.srCotent);
        setSection1(srd[0].srcomment);
        setSection2(srd[1].srcomment);
        setSection3(srd[2].srcomment);
        setPrice(sr.srPrice);
        setLink(sr.srLink);
        setImgList([sr.srimage]);

        for(const s of srd) {
            setImgList(prev => [...prev, s.srimage]);
        };

        // getProductImgList(product.productCode);
    }

    const getProductImgList = (code) => {
        // axios.post("http://localhost:3000/getProductAllPictureList", null, { params : { "productCode" : code } })
        //     .then((resp) => {
        //         setImgList(resp.data);
        //         console.log(imgList);
        //         setLoading(true);
        //     })
        //     .catch((err) => console.log(err));
    }

    const delImg = (e) => {
        e.preventDefault();

        const idx = e.target.value;
        
        setImgList(imgList.filter((f, index) => index !== Number(idx)));
    }

    useEffect(() => {
        if(data.length === 0) return;
        setInput(data);
    }, [data]);

    const onSubmit = (e) => {
        e.preventDefault();
        
        const sections = [];
        if(section1 !== "") sections.push(section1);
        if(section2 !== "") sections.push(section2);
        if(section3 !== "") sections.push(section3);

        let formdata = new FormData();

        imgList.map((file) => {
            formdata.append("fileList", file);
        });

        sections.map((section) => {
            formdata.append("sections", section);
        });

        formdata.append("srBrand", brand);
        formdata.append("srTitle", title);
        formdata.append("srCotent", desc);
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

    return (
        <div className="admin_update_container">
            <div className="admin_update">
                <form name="frm" onSubmit={onSubmit} encType="multipart/form-data">
                    <fieldset>
                        <ImgUpload max={`${4-imgList.length}`} setImgList={setAddImgList} />
                        <ul className="product_img">
                                {
                                    // !loading ? <div>Loading...</div> : 
                                    imgList.map((pic, index) => (
                                        <li key={index}>
                                            <img
                                                src={`http://localhost:3000/dalrun-hc/review/${srSeq}/${pic}`}
                                                alt={pic}
                                                loading="lazy"
                                            />
                                            <button value={index} onClick={delImg}>X</button>
                                        </li>
                                ))}
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
                            <label htmlFor="desc">운동화 설명</label>
                            <AdjustableTextarea val={desc} setVal={setDesc} />
                        </div>
                        <div>
                            <label htmlFor="section1">섹션1</label>
                            <AdjustableTextarea val={section1} setVal={setSection1} placeholder={"운동화 후기 코멘트를 입력해주세요"} />
                        </div>
                        <div>
                            <label htmlFor="section2">섹션2</label>
                            <AdjustableTextarea val={section2} setVal={setSection2} placeholder={"운동화 후기 코멘트를 입력해주세요"} />
                        </div>
                        <div>
                            <label htmlFor="section3">섹션3</label>
                            <AdjustableTextarea val={section3} setVal={setSection3} placeholder={"운동화 후기 코멘트를 입력해주세요"} />
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