import axios from "axios";
import { useEffect } from "react";

function MonthlyRank({setMemRank, setCrewRank}) {
    const getData = () => {
        axios.post("http://localhost:3000/getScoreRank")
            .then((resp) => {
              setMemRank(resp.data.memRank);
              setCrewRank(resp.data.crewRank);
            })
            .catch((err) => alert(err));
    }

    useEffect(() => {
        getData();
    }, []);
}


export default MonthlyRank;
