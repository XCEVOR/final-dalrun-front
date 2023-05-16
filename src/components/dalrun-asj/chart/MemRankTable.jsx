import { Table } from "react-bootstrap";

function MemRankTable({ dataList }) {
    if(dataList === undefined || dataList.length === 0) return;

    console.log(dataList);

    return(
        <div>
            <Table responsive hover className="rank_table">
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>총 포인트</th>
                        <th>총 이동거리 (km)</th>
                        <th>아이디</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        dataList.length !== 0 ?
                        dataList.map((monthly, i) => {
                            return(
                                <tr key={i}>
                                    <th>{monthly.ranking}</th>
                                    <td>{monthly.monthlyScore}</td>
                                    <td>{Math.round(monthly.monthlyTotalDist/1000*100)/100}</td>
                                    <td>{monthly.memId}</td>
                                </tr>
                            );    
                        }) 
                        : ''
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default MemRankTable;