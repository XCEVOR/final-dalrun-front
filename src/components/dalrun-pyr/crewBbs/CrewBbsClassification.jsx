//전체 게시글
//모집중 게시글
//모집완료 게시글

//전체          모집중          모집완료 -> return에서
//전체 게시글 보여주는 jsx
//모집중 게시글만 보여주는 jsx
//모집완료 게시글만 보여주는 jsx

import React, {useState} from "react";
import MenuList from './MenuList';
import CrewList from './CrewList';


const CrewBbsClassification = () => {
    const [data, setData] = useState();
    const [menu, setMenu] = useState([
        {name : '전체'},
        {name : '모집중'},
        {name : '모집완료'}
    ]) //메뉴설정


    return (
        <div className="">
            <MenuList menu={menu}/>
            <CrewList data={data}/>
        </div>
    )
}
