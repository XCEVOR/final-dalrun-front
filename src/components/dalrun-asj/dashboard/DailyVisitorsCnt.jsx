import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

function DailyVisitorsCnt({ cntList }) {
    const [visitorsCnt, setVisitorsCnt] = useState([]);
    const [getData, setGetData] = useState(false);

    const getDailyVisitorsCnt = () => {
        axios.get('/getDailyVisitorsCnt')
                .then((resp) => {
                    setGetData(true);
                    setVisitorsCnt(resp.data);
                })
                .catch((err) => console.log(err));
    }

    const options = {
        responsive: true
    };
    
    const data = {
        labels: visitorsCnt.map(data => data.weekDate),
        datasets: [
            {
            label: 'Dataset 1',
            data: visitorsCnt.map(data => data.dailyVisitorsCnt),
            borderColor: 'rgba(255, 99, 132, 0.7)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    useEffect(() => {
        getDailyVisitorsCnt();
        console.log(visitorsCnt);
    }, [getData]);

    return <Line options={options} data={data} />; 
}

export default DailyVisitorsCnt;