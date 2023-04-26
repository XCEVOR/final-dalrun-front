import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function PostCrewBbsWriteForm() {

    const history = useNavigate();

    const [id,setId] = useState('');
    const [category, setCategory] = useState('모집중');
    const [crewName, setCrewName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    //login 검사
    useEffect(()=>{
        let str = localStorage.getItem('login')
        if(str !== null){
            let login = JSON.parse(str);
            setId(login.id);
        }else {
            alert('login을 해주세요.');
            history('/login');
        }
    }, [history]);

    const idChange = (e) => setId(e.target.value);
    const categoryChange = (e) => setCategory(e.target.value);
    const crewNameChange = (e) => setCrewName(e.target.value);
    const titleChage = (e) => setTitle(e.target.value);
    const contentChange = (e) => setContent(e.target.value);
    const imageChange = (e) => setImage(e.target.value);
    
    const writeCrewBbs = () => {
        if(title === undefined || title.trim() === ''){
            alert('제목을 입력해 주십시오.');
            return;
        }

        axios.post("http://localhost:3000/crewBbsWrite", null,
                {params:{"memId":id, "crewName":crewName , "category":category, "title":title, "content":content}})
                .then(res => {
                    console.log(res.data);
                    if(res.data === "YES"){
                        alert("글작성이 성공적으로 등록되었습니다");
                        history('/crewBbsMain');
                    }else {
                        alert("등록되지 않았습니다");
                    }
                })
                .catch(function(err){
                    alert(err);
                })
    }

    return (
        <div className='pyr-bbsWrite'>
        <table className="table table-sm">
            <colgroup>
                <col width="100px"/><col width="500px"/>
            </colgroup>
            <tbody>
            <tr>
                <th>아이디</th>
                <td>
                    <input type="text" value={id} onChange={idChange} className="form-control form-control-lg" />
                </td>
            </tr>
            <tr>
                <th className="align-middle">카테고리</th>
                <td>
                    <select value={category} onChange={categoryChange}>
                    <option value="모집중">모집중</option>
                    <option value="모집완료">모집완료</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th className="align-middle">크루명</th>
                <td>
                    <input type="text" value={crewName} onChange={crewNameChange} size="50px" className="form-control form-control-lg" placeholder="크루명 기입"/>
                </td>
            </tr>
            <tr>
                <th className="align-middle">제목</th>
                <td>
                    <input type="text" value={title} onChange={titleChage} size="50px" className="form-control form-control-lg" placeholder="제목기입"/>
                </td>
            </tr>
            <tr>	
                <td colSpan="2">
                    <textarea rows="18" value={content} onChange={contentChange} className="form-control" placeholder="내용기입"></textarea>
                </td>
            </tr>
            <tr>	
                <th className="align-middle">이미지 업로드</th>
                <td colSpan="2">
                    <input type='file' rows="18" value={image} onChange={imageChange} className="form-control"></input>
                </td>
            </tr>
            <tr>
                <td colSpan="2" align="right" style={{ paddingTop:"20px" }}>
                    <button type="button" onClick={()=>writeCrewBbs()} className="btn btn-primary">글작성 완료</button>
                </td>
            </tr>
            </tbody>
            </table>
    </div>
    )
}

export default PostCrewBbsWriteForm;