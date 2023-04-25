import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import AdminPagination from "./AdminPagination";

function AdminSearch(props) {
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState(0);
    const [totalCnt, setTotalCnt] = useState(0);  

    const { cate } = useParams();
    const [params] = useState({"pageNumber" : page});

    const searching = () => {
        const choice = searchParams.get("choice");
        const search = searchParams.get("search");

        params.choice = choice;
        params.search = search;

        if(choice === null || search === null) {
            return;
        } else if(cate === "member") {
            const grade = searchParams.get("grade");
            params.grade = grade;
        } else if(cate === "competition") {
            const date = searchParams.get("date");            
            params.date = date;
        } else if(cate === "product") {
            const saleState = searchParams.get("sale");            
            const stockState = searchParams.get("stock");            
            params.sale = saleState;
            params.stock = stockState;
        }
    }

    const getDataList = () => {
        axios.get(`http://localhost:3000/admin_${cate}list`, { params: params })
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
        getDataList();
    }

    // url이 바뀔 때만 렌더링
    useEffect(() => {
        searching();
        getDataList();
    },[searchParams]);

    return <AdminPagination page={page} totalCnt={totalCnt} handlePagination={handlePagination} />;
}

export default AdminSearch;