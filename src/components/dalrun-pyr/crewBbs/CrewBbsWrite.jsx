import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import '../css/CrewBbsWrite.css';

function PostCrewBbsWriteForm() {

    const history = useNavigate();

    const [memId,setMemId] = useState('');
    const [type, setType] = useState('모집중');
    const [crewName, setCrewName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [crewSetUp, setCrewSetUp] = useState('');
    const [imgFile, setImgFile] = useState([]);
    const [crewcolor, setCrewColor] = useState('');

    //login 검사 & 글작성 권한 검사
    useEffect(()=>{
        const str = localStorage.getItem('login')
        if(str !== null){
            const login = JSON.parse(str);
            setMemId(login.memId);
            if(login.grade === '걸음마' || login.grade === '런니니'){
                alert('글작성 권한이 없습니다.');
                history('/crewBbsMain');
            }
        }else {
            alert('login을 해주세요.');
            history('/login');
        }
    }, [history, setMemId]);

    const memIdChange = (e) => setMemId(e.target.value);
    const typeChange = (e) => setType(e.target.value);
    const crewNameChange = (e) => setCrewName(e.target.value);
    const titleChage = (e) => setTitle(e.target.value);
    const contentChange = (e) => setContent(e.target.value);
    const setupChange = (e) => setCrewSetUp(e.target.value);
    const colorChange = (e) => setCrewColor(e.target.value);

    const fileChange = (e) => {
        const fileList = e.target.files;
        const newFiles = Array.from(fileList);

        setImgFile(newFiles);
       // alert(newFiles.length);
    }

    const writeCrewBbs = () => {
        const fd = new FormData();
        fd.append("dto", `{"memId": "${memId}", "crewName": "${crewName}", "type": "${type}", 
                    "title": "${title}", "content": "${content}", "crewSetUp":"${crewSetUp}", "crewcolor":"${crewcolor}"}`);

        for(let i=0; i<imgFile.length; i++) {
            fd.append("crewImg", imgFile[i]);
        }
       // alert(imgFile);
       // alert(imgFile.length);

            axios.post("http://localhost:3000/crewBbsWrite", fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(function(res){
                if(res.data === "YES"){
                    alert("글작성이 성공적으로 등록되었습니다");
                    console.log('params:', {memId:memId, crewName:crewName, type:type, title:title, content:content, crewImg:imgFile, crewSetUp:crewSetUp, crewcolor:crewcolor});
                    history('/crewBbsMain');
                }else {
                    alert("등록되지 않았습니다.");
                    console.log('params:', {memId:memId, crewName:crewName, type:type, title:title, content:content, crewImg:imgFile, crewSetUp:crewSetUp, crewcolor:crewcolor});
                }
            })
            .catch(function(err){
                alert(err);
            })
    }

    return (
        <div className='pyr-bbsWrite'>
        <table className="pyr-table">
            <colgroup>
                <col width="100px"/><col width="500px"/>
            </colgroup>
            <tbody>
            <tr>
                <th>아이디</th>
                <td>
                    <input type="text" value={memId} onChange={memIdChange} className="form-control form-control-lg" readOnly/>
                </td>
            </tr>
            <tr>
                <th className="align-middle">카테고리</th>
                <td>
                    <select value={type} onChange={typeChange}>
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
                <th className="align-middle">크루 컬러</th>
                <td>
                    <input type="color" value={crewcolor} onChange={colorChange} size="50px" className="form-control form-control-lg" 
                    placeholder="크루컬러 선택" defaultValue='#0000ff' style={{ padding: '6px' }} />
                </td>
            </tr>
            <tr>
                <th className="align-middle">제목</th>
                <td>
                    <input type="text" value={title} onChange={titleChage} size="50px" className="form-control form-control-lg" placeholder="제목기입"/>
                </td>
            </tr>
            <tr>
                <th className="align-middle">크루 소개</th>
                <td>
                    <input type="text" value={crewSetUp} onChange={setupChange} size="50px" className="form-control form-control-lg" placeholder="크루 소개명 기입"/>
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
                    <input multiple={true} type='file' rows="18" onChange={fileChange} className="form-control"/>
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