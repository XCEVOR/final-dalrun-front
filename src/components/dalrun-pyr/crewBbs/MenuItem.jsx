import React from "react";

const MenuItem = ({item})=>{
    const {name} = item
    return(
        <li>
            {name}
        </li>
    );
};

export default MenuItem;