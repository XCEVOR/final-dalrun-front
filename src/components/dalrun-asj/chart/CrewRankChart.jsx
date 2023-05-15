import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

function CrewRankChart({ dataList }) {  
    if(dataList === undefined) return;

    const year = dataList[0].year;
    const month = dataList[0].month;

    const data = {
        labels: dataList.map(data => data.crewName),
        datasets: [
            {
                label: '점수',
                data: dataList.map(data => data.monthlyScore),
                backgroundColor: 'rgba(38, 174, 154, 0.7)',
            },
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

export default CrewRankChart;