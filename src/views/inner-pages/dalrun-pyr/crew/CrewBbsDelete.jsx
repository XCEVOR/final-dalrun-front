import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from 'axios';

function CrewBbsDelete() {
    let history = useNavigate();
    let params = useParams();
    const [loading, setLoading] = useState(false);

    //추가
    const [crewBbsDetails, setCrewBbsDetails]= useState();
    const [crewSeq, setCrewSeq] = useState(params.crewSeq);
  
    const deleteCrewBbs = async (crewSeq) => {
        setLoading(true);
        try {
          console.log("crewSeq delete", crewSeq);
          const response = await axios.post(
            "http://localhost:3000/crewBbsDelete",null,
            { params: {"crewSeq": crewSeq }}
          );
          if (response.data === "YES") {
            alert("게시글이 삭제되었습니다.");
            history('/crewBbsMain');
          } else {
            alert("게시글을 삭제하지 못했습니다.");
          }
        } catch (error) {
          alert(error);
        }
        setLoading(false);
      };
  
    useEffect(() => {
      deleteCrewBbs(params.crewSeq);
    }, [params.crewSeq]);

    if (loading) {
      return <div>Loading...</div>;
    }
  
    return null;
}
  
  export default CrewBbsDelete;