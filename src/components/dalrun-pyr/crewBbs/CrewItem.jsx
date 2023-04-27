import React from "react";

const CrewItem = ({item})=> {
    const{memId, img, title, wdate, type} = item
    return(
        <li>
            <img src={img}/>
            <h2>분류 :{type}</h2>
            <h3>{title}</h3>
            <p>작성자 : {memId}</p>
            <p>작성일 : {wdate}</p>
        </li>
    );
};

export default CrewItem;