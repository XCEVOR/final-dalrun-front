import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

function MemRankChart({ dataList }) {  
    if(dataList === undefined) return;

    const year = dataList[0].year;
    const month = dataList[0].month;

    const data = {
        labels: dataList.map(data => data.memId),
        datasets: [
            {
                label: '점수',
                data: dataList.map(data => data.monthlyScore),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: '이동거리 (km)',
                data: dataList.map(data => Math.round(data.monthlyTotalDist/1000*100)/100),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    }

    const options = {
        response: true
    }

    return(
        <div>
            <Bar
                data = {data}
                options = {options}
            />
            <div className='charting_month'>{year}년 {month}월</div>
        </div>
    );
}

export default MemRankChart;