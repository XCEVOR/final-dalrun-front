import Pagination from "react-js-pagination";

function MypagePagination({page, totalCnt, handlePagination}) {
    return (
        <div>
            <Pagination 
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={totalCnt}
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePagination}
            />
        </div>
    );
}

export default MypagePagination;