import React, { useState, useEffect } from 'react';
import shoes from "../shoes.png";
import cloth from "../cloth.png";

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API 호출 등을 통해 데이터를 가져온다
    const data = [
      { id: 1, name: '상품1', price: 10000, description: '상품 설명' },
      { id: 2, name: '상품2', price: 20000, description: '상품 설명' }
    ];

    setProducts(data);
  }, []);

  return (
    <div className="members container">
    <h4 className="title">내 스토어</h4>
    <br />
    <div className="inform outline" />
    <br />
      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}원</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul> */}
      {/* <img src="../../../../../public/assets/img/dalrun-sh/shoes.png" alt="나이키" /> */}
      <img src={shoes} />
      <p>상품명 : 나이키</p>
      <p>가격   : 75,000</p>
      <p>런닝을 위한 최적화 맞춤형 신발</p>

      {/* <img src="../../../../../public/assets/img/dalrun-sh/cloth.png" alt="바람막이" /> */}
      <img src={cloth} />
      <p>상품명 : 데쌍트</p>
      <p>가격   : 125,000</p>
      <p>바람의 저항을 최소화 시켜주는 최강바람막이</p>

    </div>
  );
}  


export default Store;    