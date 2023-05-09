import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function WeekSummary() {
    const [weekData, setWeekData] = useState([]);
    const [getData, setGetData] = useState(false);

    const getWeekSummaryData = () => {
        axios.get('http://localhost:3000/getWeekSummaryData')
                .then((resp) => {
                    setGetData(true);
                    setWeekData(resp.data);
                })
                .catch((err) => console.log(err));
    }
  
    const WeekDataSum = () => {
        let orderCnt = 0;
        let orderTotalprice = 0;
        let accountCnt = 0;
        let inquiryWaitingCnt = 0;
        let reviewCnt = 0;

        for(let i=0; i<weekData.length; i++) {
            orderCnt += weekData[i].orderCnt;
            orderTotalprice += weekData[i].orderTotalprice;
            accountCnt += weekData[i].accountCnt;
            inquiryWaitingCnt += weekData[i].inquiryWaitingCnt;
            reviewCnt += weekData[i].reviewCnt;
        }

        return (
            <>
                <td className="text_end">{orderCnt}</td>
                <td className="text_end">{orderTotalprice}원</td>
                <td className="text_end">{accountCnt}</td>
                <td className="text_end">{inquiryWaitingCnt}</td>
                <td className="text_end">{reviewCnt}</td>
            </>
        );
    }

    useEffect(() => {
    getWeekSummaryData();
    console.log(weekData);
    }, [getData]);

    return(
        <div>
            <Table responsive hover>
                <thead>
                    <tr>
                        <th>일자</th>
                        <th>주문수</th>
                        <th>매출액</th>
                        <th>가입</th>
                        <th>문의</th>
                        <th>후기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        weekData.map((day, i) => {
                            return(
                                <tr key={i}>
                                    <td className="text_center">{day.weekDate}</td>
                                    <td className="text_end">{day.orderCnt}</td>
                                    <td className="text_end">{day.orderTotalprice}원</td>
                                    <td className="text_end">{day.accountCnt}</td>
                                    <td className="text_end">{day.inquiryWaitingCnt}</td>
                                    <td className="text_end">{day.reviewCnt}</td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td className="text_center">합계</td>
                        <WeekDataSum />
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default WeekSummary;