import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ImgUpload from "../ImgUpload";

function ProductRegi({onHide}) {
    const [code, setCode] = useState("");
    const [cate, setCate] = useState("");
    const [productName, setProductName] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState(0);
    const [saleState, setSaleState] = useState("");
    const [imgList, setImgList] = useState([]);
      
    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="admin_update_container">
            <div className="admin_update">
                <form name="frm" onSubmit={onSubmit} encType="multipart/form-data">
                    <fieldset>
                        <ImgUpload max="9" setImgList={setImgList} />
                        <div>
                            <label htmlFor="code">상품코드</label>
                            <input type="text" value={code || ""} onChange={(e) => setCode(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="cate">카테고리</label>
                            <input type="text" value={cate || ""} onChange={(e) => setCate(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="productName">상품명</label>
                            <input type="text" value={productName || ""} onChange={(e) => setProductName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="productDesc">상품설명</label>
                            <input type="text" value={productDesc || ""} onChange={(e) => setProductDesc(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="price">가격</label>
                            <input type="number" value={price || ""} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="stock">창고재고</label>
                            <input type="number" value={stock || ""} onChange={(e) => setStock(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="saleState">판매상태</label>
                            <select id="saleState" value={saleState || ""} onChange={(e) => setSaleState(e.target.value)}>
                                <option value="1">판매</option>
                                <option value="0">품절</option>
                            </select>
                        </div>
                        <input type="submit" value="등록" />
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default ProductRegi;