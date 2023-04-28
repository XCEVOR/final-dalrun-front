import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function ProductUpdate({data, onHide}) {
    const [searchParam, setSearchParam] = useSearchParams();

    const [id, setId] = useState("");
    const [code, setCode] = useState("");
    const [cate, setCate] = useState("");
    const [productName, setProductName] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState(0);
    const [temporaryStock, setTemporaryStock] = useState("");
    const [saleState, setSaleState] = useState("");
    const [regdate, setRegdate] = useState("");
      
    const setInput = (data) => {
        const product = data.getProduct;
        const orderCnt = data.orderCnt;

        setId(product.productId);
        setCode(product.productCode);
        setCate(product.productCategory);
        setProductName(product.productName);
        setProductDesc(product.productDescription);
        setPrice(product.productPrice);
        setStock(product.productStock);
        setTemporaryStock(product.productStock - orderCnt);
        setSaleState(product.productSale);
        setRegdate(product.productRegiDate);
    }

    useEffect(() => {
        if(data.length === 0) return;
        setInput(data);
    }, [data]);

    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("productId", id);
        formData.append("productCode", code);
        formData.append("productCategory", cate);
        formData.append("productName", productName);
        formData.append("productDescription", productDesc);
        formData.append("productPrice", price);
        formData.append("productStock", stock);
        formData.append("productSale", saleState);
        formData.append("productRegiDate", regdate);

        axios.post('http://localhost:3000/admin_updateproduct', formData)
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

    return (
        <div className="admin_update_container">
            <div className="admin_update">
                <form name="frm" onSubmit={onSubmit} encType="multipart/form">
                    <fieldset>
                        <div>
                            <label htmlFor="id">상품번호</label>
                            <input type="text" value={id || ""} readOnly={true} />
                        </div>
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
                        <div>
                            <label htmlFor="stock">창고재고</label>
                            <input type="number" value={stock || ""} onChange={(e) => setStock(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="temporaryStock">가재고</label>
                            <input type="number" value={temporaryStock || ""} readOnly={true} />
                        </div>
                        <div>
                            <label htmlFor="saleState">판매상태</label>
                            <select id="saleState" value={saleState || ""} onChange={(e) => setSaleState(e.target.value)}>
                                <option value="1">판매</option>
                                <option value="0">품절</option>
                            </select>
                        </div>
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

export default ProductUpdate;