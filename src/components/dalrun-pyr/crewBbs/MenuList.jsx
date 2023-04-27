import React from 'react';
import MenuItem from './MenuItem'

const MenuList = ({menu}) => {
    return (
        <ul className="menu">
            {
                menu.map((item, index)=><MenuItem key={index} item={item}/>)
            }
            
        </ul>
    );
};

export default MenuList;