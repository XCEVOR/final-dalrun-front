import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ImgUpload from "../ImgUpload";

function ProductRegi({onHide}) {
    const [searchParam, setSearchParam] = useSearchParams();

    const [code, setCode] = useState("");
    const [brand, setBrand] = useState("");
    const [cate, setCate] = useState("");
    const [productName, setProductName] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [stock, setStock] = useState(0);
    const [saleState, setSaleState] = useState(1);
    const [imgList, setImgList] = useState([]);
      
    const onSubmit = (e) => {
        e.preventDefault();

        let formdata = new FormData();

        imgList.map((file) => {
            formdata.append("fileList", file);
        });

        formdata.append("productBrand", brand);
        formdata.append("productCategory", cate);
        formdata.append("productCode", code);
        formdata.append("productName", productName);
        formdata.append("productDescription", productDesc);
        formdata.append("productPrice", price);
        formdata.append("productColor", color);
        formdata.append("productSize", size);
        formdata.append("productStock", stock);
        formdata.append("productSale", saleState);

        axios.post('http://localhost:3000/productRegi', formdata)
            .then((resp) => {
                if(resp.data === "YES") {
                    alert("상품등록 성공");
                    onHide();
                    setSearchParam(searchParam.set('target',''));
                } else {
                    alert("상품등록 실패");
                }
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="admin_update_container">
            <div className="admin_update">
                <form name="frm" onSubmit={onSubmit} encType="multipart/form-data">
                    <fieldset>
                        <ImgUpload max="9" setImgList={setImgList} />
                        <div className="add_padding">
                            <label htmlFor="code">상품코드</label>
                            <input type="text" value={code || ""} onChange={(e) => setCode(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="cate">카테고리</label>
                            <input type="text" value={cate || ""} onChange={(e) => setCate(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="brand">브랜드</label>
                            <input type="text" value={brand || ""} onChange={(e) => setBrand(e.target.value)} />
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
                            <label htmlFor="color">색상</label>
                            <input type="text" value={color || ""} onChange={(e) => setColor(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="size">사이즈</label>
                            <input type="number" value={size || ""} onChange={(e) => setSize(e.target.value)} />
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