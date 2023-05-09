import Pagination from 'react-js-pagination';


function CCPagination({page, totalCnt, handlePagination}) {
    return (
        <div>
            <Pagination 
                activePage={page}
                itemsCountPerPage={5}
                totalItemsCount={totalCnt}
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePagination}
            />
        </div>
    );
}

export default CCPagination;