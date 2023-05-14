import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import ModalButton from "./storemodal/ModalButton";
import ModalContainer from "./storemodal/ModalContainer";

function StoreDetailsPicture() {
  let prodParams = useParams();
  console.log("StoreDetailsPicture() {: ", prodParams.productCode);
  const [checkbox_DisplayMode, setCheckbox_DisplayMode] = useState(true);  // TEST MODE

  const [productPictureList, setProductPictureList] = useState([]);
  const [productDetails, setProductDetails] = useState();
  const [pictureLocation, setPictureLocation] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [loading, setLoading] = useState(false);

  const productDetailsPictureList = async (productCode) => {
    const resp = await axios.post("http://localhost:3000/getProductAllPictureList", null, { params: {"productCode": productCode} });
    console.log("productDetailsPictureList: ", resp.data);
    setProductPictureList(resp.data);

    setLoading(true);  // 이 코드 전에는 div에 productDetails.productName 등등 적용안됨.
  }

  const productDetailsData = async (productCode) => {  // description 데이터 용.
    const resp = await axios.post("http://localhost:3000/getProductData", null, { params: {"productCode": productCode} });
    console.log(" DESC productDetailsData: ", resp.data);
    setProductDetails(resp.data);
  }

  useEffect(() => {
    productDetailsPictureList(prodParams.productCode);
  }, [prodParams.productCode])

  useMemo (() => {  // description 변경.
    productDetailsData(prodParams.productCode);
  }, [prodParams.productCode])

  useEffect(() => {
    console.log(pictureLocation)
  }, [pictureLocation])

  if(loading === false){
    return <div>Loading...</div>
  }

  // const showPictureModal = (e) => {
  //   const [showModal, setShowModal] = useState(false);
  //   setPictureLocation(e.target.src)
  //   const handleClick = () => {
  //     setShowModal(true);
  //   };
  //   return (
  //     <div>
  //     {showModal && <ModalContainer pictureLocation2={pictureLocation1} onClose={() => setShowModal(false)} />}
  //   </div>
  //   )
  // }

  const handleImageClick = (e) => {
    setImageSrc(e);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return checkbox_DisplayMode 
  // USER_MODE
  ? (
    <>
    <input type='checkbox' onClick={() =>(setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE
    <div className="productpic_container">

      {productPictureList.map((pic, index) => (

        <div key={index}>
          {index == 0 ?
            <div>
              <img 
              className="detailimg"
              src={`http://localhost:3000/dalrun-hc/store/products/${prodParams.productCode}/${pic}`}
              alt={pic}
              loading="lazy"
              /> 
            </div>
            :
            <div className="columnimg" >
              <img onClick={(e) => handleImageClick(e.target.src)}
                className="detailimg zooming zoomin_pointer"
                src={`http://localhost:3000/dalrun-hc/store/products/${prodParams.productCode}/${pic}`}
                alt={pic}
                loading="lazy"
              />
            </div>
          }
          
        </div>
      ))}
      
      {showModal && (
        <ModalContainer pictureLocation2={imageSrc} onClose={handleCloseModal} />
      )}


      <div className="ptf-spacer" style={{ "--ptf-xxl": "7.25rem" }}></div>

      <div>
        <h3 className="text_pdescr">PRODUCT DESCRIPTION</h3>
        
        {/* <p>{productDetails[0].productDescription}</p> */}
        <div>
          <div>
            <p>{JSON.parse(productDetails[0].productDescription).descr}</p>
            <h6>{productDetails[0].productName}</h6>
          {productDetails[0].productCode}
            <p>{JSON.parse(productDetails[0].productDescription).descr}</p>
          </div>
          <div><h6>FEATURES</h6></div>
          <div><p>{JSON.parse(productDetails[0].productDescription).feat1}</p></div>
          <div><p>{JSON.parse(productDetails[0].productDescription).feat2}</p></div>
          <div><p>{JSON.parse(productDetails[0].productDescription).feat3}</p></div>
          <div><p>{JSON.parse(productDetails[0].productDescription).feat4}</p></div>
          <div><p>{JSON.parse(productDetails[0].productDescription).feat5}</p></div>
          <div><p>{JSON.parse(productDetails[0].productDescription).feat6}</p></div>
        </div>
      </div>
    </div>
    </>
    )


    // DEVELOPER_MODE
    : (
      <>
      <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>DEVELOPER_MODE
      <div>
        <ModalButton prodParams={prodParams} productPictureList={productPictureList} pictureLocation={pictureLocation}></ModalButton>
        <div><p>{JSON.parse(productDetails[0].productDescription).descr}</p></div>
        <div><p>{JSON.parse(productDetails[0].productDescription).feat1}</p></div>
        <div><p>{JSON.parse(productDetails[0].productDescription).feat2}</p></div>
        <div className="product_productOrigFile">
          <h1 className="product_productOrigFile">product_origfile_blob 서버: {productPictureList[0]}</h1>
        </div>

        {productPictureList.map((pic, index) => (
          <div key={index}>
            <p>{index}</p>
            <img
              src={`http://localhost:3000/dalrun-hc/store/products/${prodParams.productCode}/${pic}`}
              alt={pic}
              loading="lazy"
            />
          </div>
        ))}


    </div>
    </>
    )
}

export default StoreDetailsPicture;