import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
// import { load } from "npm";

function CrewBbsDetail(){
    const history = useNavigate();

    const [crewBbs, setCrewBbs] = useState();

    // 데이터를 모두 읽어 들일 때까지 rendering을 조절하는 변수
    const [loading, setLoading] = useState(false);

    let params = useParams();
    console.log(params.cBbsSeq);

    const crewBbsData = async(cBbsSeq) => {
        const response = await axios.get('http://localhost:3000/getCrewBbs', { params:{"cBbsSeq" : cBbsSeq} });

        setCrewBbs(response.data);

        setLoading(true); //여기서 rendering 해줌
}
    useEffect(() => {
        crewBbsData(params.cBbsSeq);
    }, [params.cBbsSeq])

    if(loading === false) {
        return <div>Loading중입니다.</div>
    }

    const answerCrewBbs = () => {
        history("/" + crewBbs.cBbsSeq);
    }

    const updateCrewBbs = () => {
        history("/" + crewBbs.cBbsSeq);
    }

    // login한 id와 작성자 id와 같을 시에는 버튼을 보여줌
    function UpdateButtonLoad(){
        let str = localStorage.getItem('login');
        let login = JSON.parse(str);

        if(login.memId !== crewBbs.memId){
            return ""
        }
        return (
            <span>
                &nbsp;<button type="button" onClick={updateCrewBbs} className="btn btn-primary">글 수정</button>
            </span>
        )
    }

}

export default CrewBbsDetail;