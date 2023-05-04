import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

function ProductInqReply({data, onHide}) {
    const [searchParam, setSearchParam] = useSearchParams();
    const [id, setId] = useState("adminId");
    const [replyCon, setReplyCon] = useState("");
    const [inqList, setInqList] = useState([]);

    useEffect(() => {
        // setReplyTitle(`re: ${data[0].inqTitle}`);
    }, [data]);

    const handleUpdate = (con, seq) => {
        const updateReply = {
            "inqSeq" : seq,
            "inqContent" : con
        }

        axios.post("http://localhost:3000/updatereply", null, { params : updateReply })
            .then((resp) => {
                if(resp.data === "YES") {
                    alert("답변 수정 완료");
                    onHide();
                } else {
                    alert("답변 수정 실패");
                }
            })
            .catch((err) => console.log(err));
      }

    const onSubmit = (e) => {
        e.preventDefault();

        let formdata = new FormData();
        formdata.append("inqRef", data[0].inqSeq);
        formdata.append("inqWriter", "관리자");
        formdata.append("inqTitle", `re: ${data[0].inqTitle}`);
        formdata.append("inqContent", replyCon);
        formdata.append("productId", data[0].productId);
        formdata.append("memId", id);

        axios.post("http://localhost:3000/writeProductInquiryRefDepthSub", formdata)
            .then((resp) => {
                if(resp.data === "SUCCESS") {
                    alert('답변 등록 성공');
                    onHide();
                    setSearchParam(searchParam.set('target',''));
                } else {
                    alert('답변 등록 실패');
                }
            })
            .catch((err) => console.log(err));
    }

    return(
        <div>
            <Table striped bordered hover className="modalInTable">
                <thead>
                    <tr>
                        <th>문의상품</th>
                        <th>작성자</th>
                        <th>이름</th>
                        <th>제목</th>
                        <th>문의내용</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((inq, i) => {
                            return(
                            <tr key={i}>
                                <td>{inq.productId}</td>
                                <td>{inq.memId}</td>
                                <td>{inq.inqWriter}</td>
                                <td>{inq.inqTitle}</td>
                                {inq.inqDepth !== 0 ? 
                                    <td>
                                        <input type="text" value={inq.inqContent || ""} onChange={(e) => {
                                            if (inq.inqContent !== e.target.value) {
                                                inq.inqContent = e.target.value;
                                                setInqList([...inqList]); // 변경된 inqList 상태를 업데이트
                                            }
                                        }} />
                                    </td> 
                                    : <td>{inq.inqContent}</td>
                                }
                                <td>
                                    {inq.inqDepth !== 0 ? 
                                        <a className="table_link" onClick={() => handleUpdate(inq.inqContent, inq.inqSeq)}>수정</a>
                                        : ''
                                    }
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <div  className="admin_update_container">
                <div className="admin_update">
                    <form name="frm" onSubmit={onSubmit} encType="multipart/form-data">
                        <fieldset>
                            <div className="add_padding">
                                <input type="text" value={replyCon || ""} placeholder="답변 입력" onChange={(e) => setReplyCon(e.target.value)} />
                            </div>
                            <input type="submit" value="답변하기" />
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductInqReply;