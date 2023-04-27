import React from "react";
import CrewItem from './CrewItem'

const CrewList = ({data})=>{
    return (
        <ul className="">
            {
                data.map(item =><CrewItem key={item.id} item={item}/>)
            }
        </ul>
    );
};

export default CrewList;