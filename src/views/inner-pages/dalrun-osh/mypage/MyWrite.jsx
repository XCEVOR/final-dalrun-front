import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Write(){
  const [posts, setPosts] = useState([
    { id: 1, title: '오늘 런닝뛰고 옴', views: 10, writedate: '2023-04-27' },
    { id: 2, title: '운동 할 때 좋은 야식', views: 5, writedate: '2023-04-26'  },
    { id: 3, title: '운영자님 이거 버그인가요??', views: 3, writedate: '2023-04-24'  },
  ]);

  return(
    <div className="members container">
      <h4 className="title">내 게시글 목록</h4>
      <br />
      <div className="inform outline" />
      <br />      
      <table>
        <thead>
          <tr>
            <th>게시판</th>
            <th>제목</th>
            <th>조회수</th>
            <th>작성일자</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>게시판 이름</td>
              <td><Link to={`/posts/${post.id}`}>{post.title}</Link></td>
              <td>{post.views}</td>
              <td>{post.writedate}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
    )
}

export default Write;