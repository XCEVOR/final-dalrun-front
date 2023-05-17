import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import AdminPagination from "./AdminPagination";

function AdminSearch(props) {
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const [totalCnt, setTotalCnt] = useState(0);  

    const { cate, sub } = useParams();
    const [params] = useState({});

    let searchUrl = `/admin_${cate}list`;

    const searching = () => {
        const choice = searchParams.get("choice");
        const search = searchParams.get("search");

        params.choice = choice;
        params.search = search;
        
        if(cate === "member") {
            const grade = searchParams.get("grade");
            params.grade = grade;
        } else if(cate === "competition") {
            const local = searchParams.get("local");            
            params.local = local;
        } else if(cate === "product") {
            const saleState = searchParams.get("sale");            
            const stockState = searchParams.get("stock");            
            params.sale = saleState;
            params.stock = stockState;
        } else if(cate === "order") {
            const orderState = searchParams.get("order");
            const deliveryState = searchParams.get("delivery");
            params.order = orderState;
            params.delivery = deliveryState;
        } else if(cate === "question") {
            searchUrl = `/admin_${sub}list`;

            if(sub === "productinquiry") {
                const inqState = searchParams.get("inqState");
                params.inqState = inqState;
            }
        }
    }
    
    const getDataList = (page) => {
        params.pageNumber = page;
        
        axios.get(searchUrl, { params: params })
             .then((resp) => {
                console.log(resp.data);
                props.setData(resp.data.list);    // 검색결과리스트 dataList에 저장
                setTotalCnt(resp.data.cnt);
             })
             .catch((err) => {
                console.log(err);
                throw new Error(err);
             });
    }

    const handlePagination = (page) => {
        setPage(page);
        getDataList(page-1);
    }

    // url이 바뀔 때만 렌더링
    useEffect(() => {
        searching();
        getDataList();
    },[searchParams]);

    return <AdminPagination page={page} totalCnt={totalCnt} handlePagination={handlePagination} />;
}

export default AdminSearch;