import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";

const WritingComponent = ({ onSubmit }) => {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 입력한 제목, 내용, 작성자를 데이터로 묶어 onSubmit 함수에 전달
    onSubmit({ title, content, author });

    // 제출 후 폼 초기화
    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <div>
      <h2>글쓰기</h2>
      <Table striped bordered>
        <colgroup>
          <col style={{width:"200px"}} />
          <col style={{width:"200px"}} />
          <col style={{width:"200px"}} />
          <col style={{width:"200px"}} />
        </colgroup>
        <tbody>
          <tr>
            <td>제목:</td>
            <td>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
            <td>작성자</td>
            <td></td>
          </tr>
          <tr>
            
          </tr>
          <tr>
            <td>내용:</td>
            <td>
              <Form.Control
                as="textarea"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>작성자:</td>
            <td>
              <Form.Control
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <Button variant="primary" onClick={handleSubmit}>
        작성 완료
      </Button>
    </div>
  );
};

export default WritingComponent;
