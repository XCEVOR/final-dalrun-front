import Pagination from "react-js-pagination";

function AdminPagination({page, totalCnt, handlePagination}) {
    return (
        <div>
            <Pagination 
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={totalCnt}
                pageRangeDisplayed={5}
                prevPageText={"이전"}
                nextPageText={"다음"}
                onChange={handlePagination}
            />
        </div>
    );
}

export default AdminPagination;