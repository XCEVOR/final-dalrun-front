import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import AdminPagination from "./AdminPagination";

function AdminSearch(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [grade, setGrade] = useState("");
    const [date, setDate] = useState("");
    const [saleState, setSaleState] = useState("");
    const [stockState, setStockState] = useState("");
    const [page, setPage] = useState(1);
    const [totalCnt, setTotalCnt] = useState(0);        
    
    const { cate } = useParams();
    const choice = searchParams.get("choice");
    const search = searchParams.get("search");

    const [params, setParams] = useState({"choice" : choice, "search" : search, "pageNumber" : page});

    const Search = () => {
        if(choice === null || search === null) {
            return;
        } else if(cate === "member") {
            setGrade(searchParams.get("grade"));
            setParams({...params, "grade":grade});
        } else if(cate === "competition") {
            setDate(searchParams.get("date"));
            setParams({...params, "date":date});
        } else if(cate === "product") {
            setSaleState(searchParams.get("sale"));
            setStockState(searchParams.get("stock"));
            setParams({...params, "stock":stockState, "productSale":saleState});
        }
    }

    const getDataList = () => {
        axios.get(`http://localhost:3000/${cate}`, { params: params })
             .then((resp) => {
                console.log(resp);
                props.getData(resp.data.list);    // 검색결과리스트 dataList에 저장
                setTotalCnt(resp.data.cnt);
             })
             .catch((err) => {
                console.log(err);
             });
    }

    const handlePagination = (page) => {
        setPage(page);
        // getDataList();
    }

    // url이 바뀔 때만 렌더링
    useEffect(() => {
        Search();
        // getDataList();
    },[searchParams]);

    return <AdminPagination page={page} totalCnt={totalCnt} handlePagination={handlePagination} />;
}

export default AdminSearch;