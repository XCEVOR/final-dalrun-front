import axios from "axios";
import { useEffect } from "react";

function CrewMonthlyRank({setData}) {
    const getData = () => {
        axios.post("http://localhost:3000/getCrewScoreRank")
            .then((resp) => {
              setData(resp.data);
            })
            .catch((err) => alert(err));
    }

    useEffect(() => {
        getData();
    }, []);
}


export default CrewMonthlyRank;
