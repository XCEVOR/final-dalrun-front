import Pagination from 'react-js-pagination';


function CrewBbsPagination({page, totalCnt, handlePagination}) {
    return (
        <div>
            <Pagination 
                activePage={page} //현재 페이지 번호
                itemsCountPerPage={10} //페이지당 아이템 수
                totalItemsCount={totalCnt} //전체 아이템 수
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePagination}
            />
        </div>
    );
}

export default CrewBbsPagination;